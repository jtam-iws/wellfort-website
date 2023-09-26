import tw from 'twin.macro';
import type { TwStyle } from 'twin.macro';

interface IDescriptionListStyleParams {
  colour: BlockColour;
}

const getStyles = (params: IDescriptionListStyleParams): TwStyle[] => {
  const { colour } = params;

  return [
    tw`my-12 py-16`,
    colour === 'primary' ? tw`bg-blue text-gray-50` : tw``,
    colour === 'secondary' ? tw`bg-orange text-gray-900` : tw``,
    colour === 'tertiary' ? tw`bg-yellow text-gray-900` : tw``,
    colour === 'light' ? tw`bg-blue-50 text-blue-600` : tw``,
    colour === 'dark' ? tw`bg-gray-900 text-gray-50` : tw``
  ];
};

export default getStyles;
