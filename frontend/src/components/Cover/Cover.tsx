import React from 'react';
import { decode } from 'he';
import tw, { css } from 'twin.macro';

import Constraint from '~components/Constraint';
import HTMLContent from '~components/HTMLContent';

import type { CoverBlock } from '~types/blocks';
import useImageSrc from '~hooks/useImageSrc';

import getStyles, { getAlignmentStyles } from './styles';

const Cover: React.FC<CoverBlock> = ({ align, colour, text, image }) => {
  const styles = getStyles({ colour });
  const alignmentStyles = getAlignmentStyles({ align });

  const renderImage = () => {
    if (image) {
      const { height, width, url } = image;
      const imgSrc = useImageSrc(url);

      return (
        <img
          src={imgSrc}
          tw="absolute inset-0 z-10 opacity-5 object-cover h-full w-full"
          alt=""
          height={height}
          width={width}
          loading="lazy"
        />
      );
    }

    return null;
  };

  return (
    <div className="container-break" css={styles}>
      <div tw="relative z-20 py-12 text-xl lg:(py-16)">
        <div tw="container">
          <Constraint>
            <div
              css={[
                css({
                  '&>h2:first-child': tw`mt-0!`,
                  '&>h3:first-child': tw`mt-0!`,
                  '&>h4:first-child': tw`mt-0!`,
                  '&>h5:first-child': tw`mt-0!`,
                  '&>h6:first-child': tw`mt-0!`
                }),
                ...alignmentStyles
              ]}
            >
              <HTMLContent html={decode(text)} />
            </div>
          </Constraint>
        </div>
      </div>
      {renderImage()}
    </div>
  );
};

export default Cover;
