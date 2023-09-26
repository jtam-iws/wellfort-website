import React from 'react';
import tw from 'twin.macro';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface MenuImageProps {
  id: number;
  colour: BlockColour;
}

interface IMenuImageQuery {
  allStrapiPage: {
    nodes: {
      strapiId: number;
      image: {
        localFile: IGatsbyImageData;
      };
    }[];
  };
}

const MenuImage: React.FC<MenuImageProps> = ({ id, colour }) => {
  const {
    allStrapiPage: { nodes }
  }: IMenuImageQuery = useStaticQuery(graphql`
    query {
      allStrapiPage {
        nodes {
          strapiId
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const node = nodes.find((node) => node.strapiId === id);
  let imageData;
  if (node && node.image) {
    imageData = getImage(node.image.localFile);
  }

  if (!imageData) {
    return null;
  }

  return (
    <div tw="relative w-full h-72 mb-3 overflow-hidden rounded-xl shadow-sm group-hover:(shadow-lg)">
      <GatsbyImage image={imageData} alt="" tw="absolute inset-0 z-10" />
      <div
        css={[
          tw`absolute inset-0 border-b-10 bg-gradient-to-t z-20`,
          colour === 'primary' ? tw`border-blue from-blue-100` : tw``,
          colour === 'secondary' ? tw`border-orange from-orange-100` : tw``,
          colour === 'tertiary' ? tw`border-yellow from-yellow-100` : tw``,
          colour === 'light' ? tw`border-blue-100 from-blue-100` : tw``,
          colour === 'dark' ? tw`border-blue-300 from-blue-300` : tw``
        ]}
      />
    </div>
  );
};

export default MenuImage;
