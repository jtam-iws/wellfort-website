import React from 'react';
import 'twin.macro';

import { IGalleryImage } from '~types/components';
import useImageSrc from '~hooks/useImageSrc';

interface GalleryImageProps {
  image: IGalleryImage;
  onClick: () => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  const {
    image: {
      formats: { thumbnail, small }
    },
    caption
  } = image;
  const imgSrc = useImageSrc(small ? small.url : thumbnail.url);

  if (!imgSrc) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      tw="outline-none opacity-100 shadow-none hover:(opacity-90 shadow-2xl)"
    >
      <div tw="w-full h-72">
        <img
          src={imgSrc}
          width={thumbnail.width}
          height={thumbnail.height}
          loading="lazy"
          tw="h-full w-full object-cover object-center rounded-xl"
        />
      </div>
      <span tw="sr-only">Open image {caption}</span>
    </button>
  );
};

export default GalleryImage;
