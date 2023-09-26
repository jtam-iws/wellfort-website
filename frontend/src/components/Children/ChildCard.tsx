import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface ChildCardProps {
  index: number;
  to: string;
  image?: {
    localFile: IGatsbyImageData;
  };
}

const ChildCard: React.FC<ChildCardProps> = ({ to, image, children, index }) => {
  let imageData;
  if (image) {
    imageData = getImage(image.localFile);
  }

  return (
    <Link to={to} className="group" tw="relative rounded-xl">
      <div tw="relative w-full h-72 mb-3 overflow-hidden rounded-xl shadow-sm group-hover:(shadow-lg)">
        {imageData && <GatsbyImage image={imageData} alt="" tw="absolute inset-0 z-10" />}
        <div
          css={[
            tw`absolute inset-0 border-b-10 bg-gradient-to-t z-20`,
            index % 2 ? tw`border-orange from-orange-100` : tw`border-blue from-blue-100`
          ]}
        />
      </div>
      <span tw="text-2xl font-medium">{children}</span>
    </Link>
  );
};

export default ChildCard;
