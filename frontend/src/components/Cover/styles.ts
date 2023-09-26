import tw from 'twin.macro';
import type { TwStyle } from 'twin.macro';

interface ICoverStyleParams {
  colour: BlockColour;
}

interface ICoverAlignmentStyleParams {
  align: BlockAlignment;
}

export const getAlignmentStyles = (params: ICoverAlignmentStyleParams): TwStyle[] => {
  const { align } = params;
  return [
    align === 'center' ? tw`text-center` : tw``,
    align === 'right' ? tw`text-right` : tw``,
    align === 'left' ? tw`text-left` : tw``
  ];
};

const getStyles = (params: ICoverStyleParams): TwStyle[] => {
  const { colour } = params;
  return [
    tw`relative`,
    colour === 'primary' ? tw`bg-blue text-gray-50` : tw``,
    colour === 'secondary' ? tw`bg-orange text-gray-900` : tw``,
    colour === 'tertiary' ? tw`bg-yellow text-gray-900` : tw``,
    colour === 'light' ? tw`bg-blue-50 text-blue-600` : tw``,
    colour === 'dark' ? tw`bg-gray-900 text-gray-50` : tw``
  ];
};

export default getStyles;
