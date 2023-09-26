import tw from 'twin.macro';
import type { TwStyle } from 'twin.macro';

interface IQuoteStyleParams {
  direction: BlockDirection;
  colour: BlockColour;
  style: BlockStyle;
}

interface IQuoteIconStyleParams {
  colour: BlockColour;
  direction: BlockDirection;
}

const getFilledStyles = (colour: BlockColour): TwStyle[] => [
  colour === 'primary' ? tw`bg-blue text-gray-50` : tw``,
  colour === 'secondary' ? tw`bg-orange text-gray-900` : tw``,
  colour === 'tertiary' ? tw`bg-yellow text-gray-900` : tw``,
  colour === 'light' ? tw`bg-blue-50 text-blue-600` : tw``,
  colour === 'dark' ? tw`bg-gray-900 text-gray-50` : tw``
];

const getOutlinedStyles = (colour: BlockColour): TwStyle[] => [
  tw`border-2 bg-white`,
  colour === 'primary' ? tw`border-blue text-blue` : tw``,
  colour === 'secondary' ? tw`border-orange text-orange-800` : tw``,
  colour === 'tertiary' ? tw`border-yellow text-yellow-800` : tw``,
  colour === 'light' ? tw`border-blue-50 text-blue-600` : tw``,
  colour === 'dark' ? tw`border-gray-900 text-gray-900` : tw``
];

const getDefaultStyles = (): TwStyle[] => [tw`bg-white flex space-x-3`];


const getStyles = (params: IQuoteStyleParams): TwStyle[] => {
  const { colour, style } = params;

  let styles = [
    // Box Model
    tw`inline-block my-12 p-4 max-w-5xl w-auto`,
    // Typography
    tw`text-xl font-medium`,
    // Shape
    tw`rounded-lg`,
  ];

  switch (style) {
    case 'default':
      styles.push(...getDefaultStyles());
      break;
    case 'filled':
      styles.push(...getFilledStyles(colour));
      break;
    case 'outlined':
      styles.push(...getOutlinedStyles(colour));
      break;
    default:
    // PASS
  }

  return styles;
};

export default getStyles;
