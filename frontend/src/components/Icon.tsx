import React from 'react';
import type { TwStyle } from 'twin.macro';
import 'twin.macro';

import type { IImageFormat } from '~types/components';

import useImageSrc from '~hooks/useImageSrc';

interface IconProps {
  icon?: IImageFormat;
  css?: false | TwStyle[];
}

const Icon: React.FC<IconProps> = ({ icon, ...rest }) => {
  let iconImg;
  if (icon) {
    const iconSrc = useImageSrc(icon.url);

    if (iconSrc) {
      iconImg = (
        // @ts-ignore
        <img
          {...rest}
          src={iconSrc}
          loading="lazy"
          width={icon.width}
          height={icon.height}
          alt=""
        />
      );
    }
  }

  return iconImg || null;
};

export default Icon;
