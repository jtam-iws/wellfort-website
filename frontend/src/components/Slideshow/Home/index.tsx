import React from 'react';
import 'twin.macro';
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { IHomePanel } from '~types/strapi-home';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';

import HomeSlide from './HomeSlide';

export interface HomeSlideshowProps {
  slides: IHomePanel[];
}

const HomeSlideshow: React.FC<HomeSlideshowProps> = ({ slides }) => (
  <Swiper
    modules={[A11y, Autoplay, Keyboard, Pagination]}
    loop={true}
    spaceBetween={0}
    slidesPerView={1}
    autoHeight={true}
    autoplay={{
      delay: 5000
    }}
    pagination={{ clickable: true }}
  >
    {slides.map((slide) => (
      <SwiperSlide
        style={{ backgroundColor: 'transparent', width: '100%' }}
        key={`home-slideshow-slide-${slide.id}`}
      >
        <HomeSlide {...slide} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default HomeSlideshow;
