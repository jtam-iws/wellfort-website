import React from 'react';
import 'twin.macro';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { decode } from 'he';

import type { IHomePanel } from '~types/strapi-home';

import { Button } from '~components/Buttons';
import Heading from '~components/Heading';

const HomeSlide: React.FC<IHomePanel> = ({ title, text, link, image }) => {
  let imageData;
  if (image.localFile) {
    imageData = getImage(image.localFile);
  }

  if (!imageData) {
    return null;
  }

  return (
    <div tw="relative z-10 grid lg:(grid-cols-3)">
      <GatsbyImage
        tw="rounded-t-2xl lg:(col-span-1 rounded-bl-2xl rounded-tr-none)"
        image={imageData}
        alt=""
      />
      <div tw="p-6 bg-gray-50 overflow-hidden rounded-b-2xl lg:(col-span-2 rounded-tr-2xl rounded-bl-none)">
        <Heading level="h2" tw="mt-0">
          {title}
        </Heading>
        <p tw="text-xl">{text}</p>
        {link && (
          <p tw="mt-6">
            <Button to={link.url} style="filled" colour="primary">
              {decode(link.label)}
            </Button>
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeSlide;
