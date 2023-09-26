import React from 'react';
import tw from 'twin.macro';

import type { ImageTextBlock } from '~types/blocks';

import useImageSrc from '~hooks/useImageSrc';

import { getFilledColourStyles } from './styles';
import { isVertical, isImageFirst } from './utils';

const InsetImageText: React.FC<ImageTextBlock> = ({ colour, imageSide, image, children }) => {
  const { alternativeText, height, width, url } = image;
  const imgSrc = useImageSrc(url);

  return (
    <div className="container-break" tw="my-12" css={[tw`my-12`, ...getFilledColourStyles(colour)]}>
      <div tw="container">
        <div
          css={[
            tw`grid grid-rows-2 py-12`,
            isVertical(imageSide) ? tw`` : tw`lg:(grid-cols-2 grid-rows-1)`
          ]}
        >
          <div css={[tw`p-4 md:(p-6) lg:(p-12)`, isImageFirst(imageSide) ? tw`order-2` : tw``]}>
            {children}
          </div>
          <div tw="relative">
            <img
              src={imgSrc}
              tw="mt-4 h-auto w-full rounded-lg"
              alt={alternativeText}
              height={height}
              width={width}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsetImageText;
