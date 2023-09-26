import React from 'react';
import 'twin.macro';

import Cover from '~components/Cover';
import Heading from '~components/Heading';
import usePlaceholder from '~hooks/usePlaceholder';

import { colours } from './maps';

const Covers: React.FC = () => {
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
      <Heading level="h2">No Image - Center</Heading>
      {colours.map((colour, index) => (
        <Cover
          id={index}
          strapi_component="shared.cover"
          key={`cover-no-image-${colour}`}
          colour={colour}
          align="center"
          text={`
          <div>
            <h2>${colour.charAt(0).toUpperCase() + colour.slice(1)}</h2>
            <p>Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris pretium consequat a quis ligula. Sed a interdum ipsum.</p>
          </div>
        `}
        />
      ))}
      <Heading level="h2">With Image - Left</Heading>
      {colours.map((colour, index) => (
        <Cover
          id={index}
          strapi_component="shared.cover"
          key={`cover-with-image-${colour}`}
          colour={colour}
          align="left"
          image={image}
          text={`
          <div>
            <h2>${colour.charAt(0).toUpperCase() + colour.slice(1)}</h2>
            <p>Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris pretium consequat a quis ligula. Sed a interdum ipsum.</p>
          </div>
        `}
        />
      ))}
    </>
  );
};

export default Covers;
