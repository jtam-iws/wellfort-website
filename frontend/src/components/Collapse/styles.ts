import tw from 'twin.macro';
import type { TwStyle } from 'twin.macro';

interface ICollapseStyleParams {
  colour: BlockColour;
  style: BlockStyle;
}

interface IIconStyleParams {
  open?: boolean;
}

export const getIconStyles = ({ open }: IIconStyleParams): TwStyle[] => [
  tw`w-6 h-6`,
  tw`transition-all duration-100 ease-in-out`,
  open ? tw`transform rotate-90` : tw`transform rotate-0`
];

/**
 * NOTE: We return an empty tw`` to satisfy types
 */
const getDefaultStyles = (colour: BlockColour): TwStyle[] => [
  tw`bg-white`,
  colour === 'primary' ? tw`text-blue hover:(bg-blue text-gray-50)` : tw``,
  colour === 'secondary' ? tw`text-orange-900 hover:(bg-orange text-gray-900)` : tw``,
  colour === 'tertiary' ? tw`text-yellow-900 hover:(bg-yellow text-gray-900)` : tw``,
  colour === 'light' ? tw`text-blue-600 hover:(bg-blue-50)` : tw``,
  colour === 'dark' ? tw`text-gray-900 hover:(bg-gray-900 text-gray-50)` : tw``
];

const getFilledStyles = (colour: BlockColour): TwStyle[] => [
  colour === 'primary' ? tw`bg-blue text-gray-50 hover:(bg-blue-700)` : tw``,
  colour === 'secondary' ? tw`bg-orange text-gray-900 hover:(bg-orange-800 text-gray-50)` : tw``,
  colour === 'tertiary' ? tw`bg-yellow text-gray-900 hover:(bg-yellow-800 text-gray-50)` : tw``,
  colour === 'light' ? tw`bg-blue-50 text-blue-600 hover:(bg-blue-400 text-gray-50)` : tw``,
  colour === 'dark' ? tw`bg-blue-700 text-gray-50 hover:(bg-blue-900)` : tw``
];

const getOutlinedStyles = (colour: BlockColour): TwStyle[] => [
  tw`border-2 bg-white`,
  colour === 'primary' ? tw`border-blue text-blue hover:(bg-blue text-gray-50)` : tw``,
  colour === 'secondary' ? tw`border-orange text-orange-800 hover:(bg-orange text-gray-900)` : tw``,
  colour === 'tertiary' ? tw`border-yellow text-yellow-800 hover:(bg-yellow text-gray-900)` : tw``,
  colour === 'light' ? tw`border-blue-50 text-blue hover:(bg-blue-50 text-blue-600)` : tw``,
  colour === 'dark' ? tw`border-blue-700 text-blue-700 hover:(bg-blue-700 text-gray-50)` : tw``
];

const getStyles = (params: ICollapseStyleParams): TwStyle[] => {
  const { colour, style } = params;
  let styles = [
    tw`flex w-full`,
    // Flex
    tw`items-center font-medium py-3 px-4 mb-3`,
    // Text
    tw`text-xl`,
    // Shape
    tw`rounded-lg`,
    // Transition
    tw`transition-all duration-100 ease-in-out`,
    // Focus
    tw`focus:(outline-none ring ring-blue ring-opacity-40)`
    // Block Level
  ];

  switch (style) {
    case 'default':
      styles.push(...getDefaultStyles(colour));
      break;
    case 'filled':
      styles.push(...getFilledStyles(colour));
      break;
    case 'outlined':
      styles.push(...(getOutlinedStyles(colour) || []));
      break;
    default:
    // PASS
  }

  return styles;
};

export default getStyles;
