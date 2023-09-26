import React from 'react';
import 'twin.macro';
import { A11y, Autoplay, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { SlideshowBlock } from '~types/blocks';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

import Slide from './Slide';
import getStyles from './styles';

const Slideshow: React.FC<SlideshowBlock> = ({ images }) => {
  const styles = getStyles();
  return (
    <>
      {images ? (
        <div css={[styles]}>
          <Swiper
            modules={[A11y, Autoplay, Keyboard, Navigation]}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
          >
            {images.map((image) => (
              <SwiperSlide key={`slideshow-slide-${image.id}`} style={{ width: '100%' }}>
                <Slide image={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </>
  );
};

export default Slideshow;
