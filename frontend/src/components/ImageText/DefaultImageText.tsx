import React from 'react';
import tw from 'twin.macro';

import type { ImageTextBlock } from '~types/blocks';

import useImageSrc from '~hooks/useImageSrc';

import { getFilledColourStyles } from './styles';
import { isVertical, isImageFirst } from './utils';

const DefaultImageText: React.FC<ImageTextBlock> = ({ colour, imageSide, image, children }) => {
  const { alternativeText, height, width, url } = image;
  const imgSrc = useImageSrc(url);

  return (
    <div className="container-break" tw="my-12">
      <div
        css={[
          tw`grid grid-rows-2`,
          isVertical(imageSide) ? tw`` : tw`lg:(grid-cols-2 grid-rows-1)`
        ]}
      >
        <div
          css={[
            tw`p-4 md:(p-6) lg:(p-12)`,
            isImageFirst(imageSide) ? tw`order-2` : tw``,
            ...getFilledColourStyles(colour)
          ]}
        >
          {children}
        </div>
        <div tw="relative">
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

export default DefaultImageText;
