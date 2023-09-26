import React from 'react';
import tw from 'twin.macro';

import type { ImageTextBlock } from '~types/blocks';

import useImageSrc from '~hooks/useImageSrc';

import { getFilledColourStyles, getGradientStyles } from './styles';
import { isVertical, isImageFirst } from './utils';

const FadedImageText: React.FC<ImageTextBlock> = ({ colour, imageSide, image, children }) => {
  const { alternativeText, height, width, url } = image;
  const imgSrc = useImageSrc(url);
  const vertical = isVertical(imageSide);

  return (
    <div css={[tw`relative rounded-xl overflow-hidden my-12`, ...getFilledColourStyles(colour)]}>
      <div
        css={[
          tw`w-full absolute h-80 lg:(h-128) xl:(absolute h-80)`,
          (imageSide === 'top' || imageSide === 'left') && tw`top-0`,
          (imageSide === 'bottom' || imageSide === 'right') && tw`bottom-0`,
          !vertical && tw`xl:(inset-0 h-full)`
        ]}
      >
        <div css={[tw`h-full w-full`, !vertical && tw`xl:(grid grid-cols-2)`]}>
          <div
            css={[
              tw`h-full relative`,
              imageSide === 'left' && tw`xl:col-start-2`,
              imageSide === 'right' && tw`xl:col-start-1`
            ]}
          >
            <img
              src={imgSrc}
              tw="h-full w-full object-cover opacity-95 xl:(absolute inset-0)"
              alt={alternativeText}
              height={height}
              width={width}
              loading="lazy"
            />
            <div
              aria-hidden="true"
              css={[
                tw`absolute h-32 inset-x-0`,
                !vertical && tw`xl:(inset-y-0 h-full w-32)`,
                imageSide === 'left' &&
                  tw`bg-gradient-to-t bottom-0 xl:(left-0 right-auto bg-gradient-to-r)`,
                imageSide === 'right' &&
                  tw`bg-gradient-to-b top-0 bottom-auto xl:(right-0 left-auto bg-gradient-to-l)`,
                imageSide === 'top' && tw`bg-gradient-to-t bottom-0`,
                imageSide === 'bottom' && tw`bg-gradient-to-b top-0 bottom-auto`,
                ...getGradientStyles(colour)
              ]}
            />
          </div>
        </div>
      </div>
      <div
        css={[
          tw`max-w-5xl mx-auto px-4 sm:px-6 lg:(max-w-full px-12)`,
          !vertical && tw`xl:(grid grid-cols-2 grid-flow-col-dense gap-x-24)`
        ]}
      >
        <div
          css={[
            tw`relative`,
            !vertical && tw`xl:py-24`,
            imageSide === 'top' && tw`pb-6 pt-80`,
            imageSide === 'bottom' && tw`pt-6 pb-80`,
            imageSide === 'left' && tw`pb-6 pt-80 lg:(pt-128) xl:(pt-12) xl:col-start-1`,
            imageSide === 'right' && tw`pt-6 pb-80 lg:(pb-128) xl:(pb-12) xl:col-start-8 2xl:col-start-9`
          ]}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FadedImageText;
