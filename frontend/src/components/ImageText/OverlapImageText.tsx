import React from 'react';
import tw from 'twin.macro';

import type { ImageTextBlock } from '~types/blocks';

import useImageSrc from '~hooks/useImageSrc';

import { getFilledColourStyles } from './styles';
import { isVertical, isImageFirst } from './utils';

const OverlapImageText: React.FC<ImageTextBlock> = ({ colour, imageSide, image, children }) => {
  const { alternativeText, height, width, url } = image;
  const imgSrc = useImageSrc(url);

  return (
    <div tw="my-12 max-w-5xl">
      <div
        css={[
          tw`grid grid-rows-2`,
          isVertical(imageSide) ? tw`` : tw`lg:(grid-cols-2 grid-rows-1)`
        ]}
      >
        <div
          css={[
            tw`rounded-lg p-4 md:(p-6) lg:(p-12)`,
            imageSide === 'top' && tw`pt-8 lg:(pt-24)`,
            imageSide === 'bottom' && tw`pb-8 lg:(pb-24)`,
            imageSide === 'right' && tw`pb-8 lg:(pr-24)`,
            imageSide === 'left' && tw`pt-8 lg:(pl-24)`,
            isImageFirst(imageSide) && tw`order-2`,
            ...getFilledColourStyles(colour)
          ]}
        >
          {children}
        </div>
        <div
          css={[
            tw`relative rounded-lg shadow-2xl overflow-hidden mx-4`,
            !isVertical(imageSide) && tw`lg:(my-12 mx-0)`,
            isImageFirst(imageSide) && tw`order-1`,
            imageSide === 'top' && tw`-mb-4 lg:(-mb-12)`,
            imageSide === 'bottom' && tw`-mt-4 lg:(-mt-12)`,
            imageSide === 'right' && tw`-mt-4 lg:(-ml-12)`,
            imageSide === 'left' && tw`-mb-4 lg:(-mr-12)`
          ]}
        >
          <img
            src={imgSrc}
            tw="absolute inset-0 object-cover h-full w-full"
            alt={alternativeText}
            height={height}
            width={width}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default OverlapImageText;
