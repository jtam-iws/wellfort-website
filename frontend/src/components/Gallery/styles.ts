import tw from 'twin.macro';
import type { TwStyle } from 'twin.macro';

interface GalleryStyleParams {
  columns: BlockColumns;
  gap?: BlockSize;
}

const getStyles = (params: GalleryStyleParams): TwStyle[] => [
  tw`grid my-6 gap-2 sm:(grid-cols-2)`,
  // Columns
  params.columns >= 3 ? tw`md:(grid-cols-3)` : tw``,
  params.columns >= 4 ? tw`lg:(grid-cols-4)` : tw``,
  params.columns === 5 ? tw`xl:(grid-cols-5)` : tw``,
  params.columns === 6 ? tw`xl:(grid-cols-6)` : tw``,
  // Gap
  params.gap === 'xs' ? tw`gap-3` : tw``,
  params.gap === 'sm' ? tw`gap-4` : tw``,
  params.gap === 'md' ? tw`gap-6` : tw``,
  params.gap === 'lg' ? tw`gap-6 lg:(gap-8)` : tw``,
  params.gap === 'xl' ? tw`gap-8 lg:(gap-12)` : tw``
];

export default getStyles;
