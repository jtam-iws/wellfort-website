import React from 'react';
import 'twin.macro';

import { IGalleryImage } from '~types/components';
import useImageSrc from '~hooks/useImageSrc';

interface SlideProps {
  image: IGalleryImage | null;
}

const Slide: React.FC<SlideProps> = ({ image }) => {
  if (!image) {
    return null;
  }

  const {
    image: { height, width, url }
  } = image;
  const imgSrc = useImageSrc(url);

  if (!imgSrc) {
    return null;
  }

  return (
    <div tw="relative">
      <img tw="w-full h-auto" src={imgSrc} alt="" height={height} width={width} loading="lazy" />
    </div>
  );
};

export default Slide;
