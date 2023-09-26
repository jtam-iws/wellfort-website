import React from "react";
import "twin.macro";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import type { IHomePanel } from "~types/strapi-home"

import Heading from "~components/Heading";
import Heart from "./Icon/Heart";

const DonatePanel: React.FC<IHomePanel> = ({
  title,
  text,
  link,
  image,
}) => {
  let imageData;
  if (image.localFile) {
    imageData = getImage(image.localFile);
  }

  if (!imageData) {
    return null;
  }

  return (
    <div tw="relative pb-6 pt-96 lg:(py-24)">
      <div tw="relative z-20 bg-orange bg-opacity-90 p-6 rounded-lg mx-3 max-w-xl lg:(ml-auto mr-6)">
        <Heading level="h2" tw="text-3xl mt-0">
          {title}
        </Heading>
        {text && <p tw="text-2xl font-bold mb-6">{text}</p>}
        {link && (
          <a
            href={link.url}
            tw="rounded-lg bg-white font-bold inline-flex items-center space-x-2 py-3 px-4 hover:(bg-gray-200)"
          >
            <Heart tw="h-6 w-auto text-orange" />
            <span>{link.label || 'Donate'}</span>
          </a>
        )}
      </div>
      <GatsbyImage
        image={imageData}
        alt=""
        tw="absolute inset-0 z-0 bg-cover bg-center rounded-lg"
      />
    </div>
  );
};

export default DonatePanel;
