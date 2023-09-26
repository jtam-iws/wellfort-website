import React from 'react';
import 'twin.macro';

import Gallery from '~components/Gallery';
import Heading from '~components/Heading';
import usePlaceholder from '~hooks/usePlaceholder';

import { sizes } from './maps';

const columnMap: Record<BlockSize, BlockColumns> = {
  xs: 6,
  sm: 5,
  md: 4,
  lg: 3,
  xl: 2
};

const Galleries: React.FC = () => {
  const { src, width, height } = usePlaceholder();
  const placeholderImage = {
    url: src,
    width,
    height
  };
  const image = {
    ...placeholderImage,
    alternativeText: '',
    caption: '',
    formats: {
      thumbnail: { ...placeholderImage },
      small: { ...placeholderImage },
      medium: { ...placeholderImage },
      large: { ...placeholderImage }
    }
  };

  return (
    <>
      {sizes.map((size, index) => (
        <React.Fragment key={`gallery-gap-${size}`}>
          <Heading level="h2">Gap - {size}</Heading>
          <Gallery
            id={index}
            strapi_component="shared.gallery"
            gap={size}
            images={[
              { id: 1, caption: '', image },
              { id: 2, caption: '', image },
              { id: 3, caption: '', image },
              { id: 4, caption: '', image },
              { id: 5, caption: '', image },
              { id: 6, caption: '', image }
            ]}
            columns={columnMap[size]}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Galleries;
