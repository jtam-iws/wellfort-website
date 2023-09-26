import React from 'react';
import 'twin.macro';

import { IGalleryImage } from '~types/components';
import useImageSrc from '~hooks/useImageSrc';

interface LightboxImageProps {
  image: IGalleryImage | null;
}

const LightboxImage: React.FC<LightboxImageProps> = ({ image }) => {
  if (!image) {
    return null;
  }

  const {
    image: { height, width, url },
    caption
  } = image;
  const imgSrc = useImageSrc(url);

  if (!imgSrc) {
    return null;
  }

  return (
    <img tw="w-full h-auto rounded-lg" src={imgSrc} alt="" height={height} width={width} loading="lazy" />
  );
};

export default LightboxImage;
