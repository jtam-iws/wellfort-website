import React from 'react';
import 'twin.macro';

import useImageSrc from '~hooks/useImageSrc';

interface ImgProps {
  src: string;
  alt?: string;
}

const Img: React.FC<ImgProps> = ({ src, alt }) => {
  const imgSrc = useImageSrc(src);

  return <img src={imgSrc} alt={alt || ''} />;
};

export default Img;
