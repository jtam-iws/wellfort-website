import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { ILinkComponent } from './components';

export interface IFooterLogo {
  link: ILinkComponent;
  image: {
    localFile: IGatsbyImageData;
  };
}

export interface IFooterInfo {
  traditionalLand: string;
  accredited: string;
  logos: IFooterLogo[];
}
