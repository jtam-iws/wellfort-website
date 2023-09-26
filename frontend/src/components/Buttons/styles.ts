import tw from 'twin.macro';
import type { TwStyle } from 'twin.macro';

interface IButtonStyleParams {
  block?: boolean;
  colour: BlockColour;
  style: BlockStyle;
}

/**
 * NOTE: We return an empty tw`` to satisfy types
 */
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

const getStyles = (params: IButtonStyleParams): TwStyle[] => {
  const { block, colour, style } = params;
  let styles = [
    block ? tw`flex w-full justify-center` : tw`inline-flex`,
    // Flex
    tw`items-center w-max font-medium py-3 px-4 mb-3`,
    // Shape
    tw`rounded-lg`,
    // Transition
    tw`transition-colors duration-100 ease-in-out`,
    // Focus
    tw`focus:(outline-none ring ring-blue-500 ring-opacity-40)`
  ];

  switch (style) {
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
