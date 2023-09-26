import React from 'react';
import 'twin.macro';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import Constraint from '~components/Constraint';
import Heading from '~components/Heading';

interface HeroProps {
  title: string;
  image?: {
    localFile: IGatsbyImageData & { publicURL: string };
  };
}

const Hero: React.FC<HeroProps> = ({ title, image }) => {
  let imageData;
  if (image) {
    imageData = getImage(image.localFile);
  }

  const Title: React.FC = () => (
    <div tw="container">
      <Constraint>
        <Heading level="h1" tw="text-white text-3xl sm:(text-5xl) mb-0">
          {title}
        </Heading>
      </Constraint>
    </div>
  );

  if (!imageData) {
    return <Title />;
  }

  return (
    <div tw="relative mb-12">
      <div tw="z-20 relative">
        <div tw="mx-auto relative z-10">
          <GatsbyImage image={imageData} alt="" tw="w-full h-96 relative z-10" />
          { <div tw="absolute inset-0 bg-gradient-to-t from-blue z-20" /> }
        </div>
        <div tw="absolute z-20 mx-4 inset-x-0 bottom-12">
          <Title />
        </div>
      </div>
      <div tw="absolute inset-x-0 top-0 bottom-0 bg-blue z-10" />
    </div>
  );
};

export default Hero;
