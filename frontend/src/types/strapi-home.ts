import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IHomePanel {
  id: number;
  title: string;
  text: string;
  link?: {
    label: string;
    url: string;
  };
  image: {
    localFile: IGatsbyImageData & { publicURL: string };
  };
}
