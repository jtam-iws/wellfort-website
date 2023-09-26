import tw from 'twin.macro';
import type { TwStyle } from 'twin.macro';

export const getFilledColourStyles = (colour: BlockColour): TwStyle[] => [
  colour === 'primary' ? tw`bg-blue text-gray-50` : tw``,
  colour === 'secondary' ? tw`bg-orange text-gray-900` : tw``,
  colour === 'tertiary' ? tw`bg-yellow text-gray-900` : tw``,
  colour === 'light' ? tw`bg-blue-50 text-blue-600` : tw``,
  colour === 'dark' ? tw`bg-gray-900 text-gray-50` : tw``
];

export const getGradientStyles = (colour: BlockColour): TwStyle[] => [
  colour === 'primary' ? tw`from-blue` : tw``,
  colour === 'secondary' ? tw`from-orange` : tw``,
  colour === 'tertiary' ? tw`from-yellow` : tw``,
  colour === 'light' ? tw`from-blue-50` : tw``,
  colour === 'dark' ? tw`from-gray-900` : tw``
];
