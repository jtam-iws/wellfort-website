import React from 'react';
import 'twin.macro';
import type { ImageBlock } from '~types/blocks';

import useImageSrc from '~hooks/useImageSrc';

const Image: React.FC<ImageBlock> = ({ image, id, strapi_component, ...rest }) => {
  const { alternativeText, caption, height, width, url } = image;
  const imgSrc = useImageSrc(url);

  return (
    <figure {...rest}>
      <img
        src={imgSrc}
        tw="h-auto max-w-full mx-auto"
        alt={alternativeText}
        height={height}
        width={width}
        loading="lazy"
      />
      {caption && <figcaption tw="mt-2 italic text-gray-700">{caption}</figcaption>}
    </figure>
  );
};

export default Image;
