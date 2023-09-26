import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { StrapiBlocks } from './blocks';

export interface StrapiPage {
  id: number;
  strapiId: number;
  title: string;
  slug: string;
  full_slug: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  image?: {
    localFile: IGatsbyImageData & { publicURL: string };
  };
  blocks: StrapiBlocks;
}
