import React from 'react';
import 'twin.macro';

import Heading from '~components/Heading';
import ImageText from '~components/ImageText';
import usePlaceholder from '~hooks/usePlaceholder';

import { colours } from './maps';

const ImageTexts: React.FC = () => {
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
      <Heading level="h2">Default</Heading>
      {colours.map((colour, index) => (
        <ImageText
          id={index}
          strapi_component="shared.image-text"
          key={`image-text-default-${colour}`}
          imageSide={index % 2 ? 'left' : 'right'}
          layout="default"
          colour={colour}
          image={image}
          text={`
            <div>
				<h2>${colour.charAt(0).toUpperCase() + colour.slice(1)}</h2>
				<p>Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris pretium consequat a quis ligula. Sed a interdum ipsum.</p>
			</div>
		`}
        />
      ))}
      <Heading level="h2">Overlap</Heading>
      {colours.map((colour, index) => (
        <ImageText
          id={index}
          strapi_component="shared.image-text"
          key={`image-text-overlap-${colour}`}
          imageSide={index % 2 ? 'left' : 'right'}
          layout="overlap"
          colour={colour}
          image={image}
          text={`
            <div>
              <h2>${colour.charAt(0).toUpperCase() + colour.slice(1)}</h2>
              <p>Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris pretium consequat a quis ligula. Sed a interdum ipsum.</p>
            </div>
          `}
        />
      ))}
      <Heading level="h2">Faded</Heading>
      {colours.map((colour, index) => (
        <ImageText
          id={index}
          strapi_component="shared.image-text"
          key={`image-text-faded-${colour}`}
          imageSide={index % 2 ? 'left' : 'right'}
          layout="faded"
          colour={colour}
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

export default ImageTexts;
