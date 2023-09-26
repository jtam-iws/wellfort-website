import tw from 'twin.macro';
import type { TwStyle } from 'twin.macro';

interface ICalloutStyleParams {
  colour: BlockColour;
  style: BlockStyle;
}

/**
 * NOTE: We return an empty tw`` to satisfy types
 */

export const getFilledColourStyles = (colour: BlockColour): TwStyle[] => [
  colour === 'primary' ? tw`bg-blue text-gray-50` : tw``,
  colour === 'secondary' ? tw`bg-orange text-gray-900` : tw``,
  colour === 'tertiary' ? tw`bg-yellow text-gray-900` : tw``,
  colour === 'light' ? tw`bg-blue-50 text-blue-600` : tw``,
  colour === 'dark' ? tw`bg-gray-900 text-gray-50` : tw``
];

export const getTextColourStyles = (colour: BlockColour): TwStyle[] => [
  colour === 'primary' ? tw`text-blue` : tw``,
  colour === 'secondary' ? tw`text-orange-800` : tw``,
  colour === 'tertiary' ? tw`text-yellow-800` : tw``,
  colour === 'light' ? tw`text-blue-600` : tw``,
  colour === 'dark' ? tw`text-gray-900` : tw``
];

const getFilledStyles = (colour: BlockColour): TwStyle[] => [
  tw`p-4`,
  ...getFilledColourStyles(colour)
];

export const getDefaultStyles = (colour: BlockColour): TwStyle[] => [
  ...getTextColourStyles(colour)
];

const getOutlinedStyles = (colour: BlockColour): TwStyle[] => [
  tw`border-2 bg-white p-4`,
  ...getTextColourStyles(colour),
  colour === 'primary' ? tw`border-blue` : tw``,
  colour === 'secondary' ? tw`border-orange` : tw``,
  colour === 'tertiary' ? tw`border-yellow` : tw``,
  colour === 'light' ? tw`border-blue-50` : tw``,
  colour === 'dark' ? tw`border-gray-900` : tw``
];

const getBasicStyles = (colour: BlockColour): TwStyle[] => [
  tw`bg-white flex space-x-3`,
  ...getTextColourStyles(colour)
];

export const getBasicBorderStyles = (colour: BlockColour): TwStyle[] => [
  tw`w-2 rounded-lg flex-shrink-0`,
  ...getFilledColourStyles(colour)
];

const getStyles = (params: ICalloutStyleParams): TwStyle[] => {
  const { colour, style } = params;

  let styles = [
    // Box Model
    tw`inline-block my-6 max-w-5xl w-auto`,
    // Typography
    tw`text-xl font-medium`,
    // Shape
    tw`rounded-lg`
  ];

  switch (style) {
    case 'default':
      styles.push(...getDefaultStyles(colour));
      break;
    case 'basic':
      styles.push(...getBasicStyles(colour));
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
