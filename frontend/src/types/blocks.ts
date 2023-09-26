import {
  ICollapseComponent,
  IDescriptionListItemComponent,
  IEmbedComponent,
  IGalleryImage,
  IImageComponent,
  IImageFormat,
  ILinkComponent
} from './components';

export interface StrapiBlock {
  id: number;
  strapi_component: string;
}

export interface AccordionBlock extends StrapiBlock {
  colour: BlockColour;
  style: BlockStyle;
  collapseItems: ICollapseComponent[];
}

export interface ButtonsBlock extends StrapiBlock {
  colour: BlockColour;
  style: BlockStyle;
  direction: BlockDirection;
  links: ILinkComponent[];
}

export interface CalloutBlock extends StrapiBlock {
  colour: BlockColour;
  style: BlockStyle;
  text: string;
  icon?: IImageFormat;
}

export interface CoverBlock extends StrapiBlock {
  align: BlockAlignment;
  colour: BlockColour;
  text: string;
  image?: IImageComponent;
}

export interface DescriptionListBlock extends StrapiBlock {
  colour: BlockColour;
  title: string;
  text?: string;
  items: IDescriptionListItemComponent[];
}

export interface FormBlock extends StrapiBlock {
  form: string;
  confirmation?: string;
}

export interface GalleryBlock extends StrapiBlock {
  columns: BlockColumns;
  gap?: BlockSize;
  images: IGalleryImage[];
}

export interface ImageBlock extends StrapiBlock {
  image: IImageComponent;
}

export interface ImageTextBlock extends StrapiBlock {
  colour: BlockColour;
  layout: BlockImageLayout;
  imageSide: BlockSide;
  text: string;
  image: IImageComponent;
  links?: ILinkComponent[];
}

export interface QuoteBlock extends StrapiBlock {
  style: BlockStyle;
  direction: BlockDirection;
  colour: BlockColour;
  author?: string;
  role?: string;
  text: string;
  icon?: IImageFormat;
}

export interface SlideshowBlock extends StrapiBlock {
  images: IGalleryImage[];
}

export interface SpacerBlock extends StrapiBlock {
  size: BlockSize;
}

export interface TextBlock extends StrapiBlock {
  text: string;
}

export interface VideosBlock extends StrapiBlock {
  columns: BlockColumns;
  gap?: BlockSize;
  embeds: IEmbedComponent[];
}

export type StrapiBlocks = Array<
  | AccordionBlock
  | ButtonsBlock
  | CalloutBlock
  | CoverBlock
  | DescriptionListBlock
  | FormBlock
  | GalleryBlock
  | ImageBlock
  | ImageTextBlock
  | QuoteBlock
  | SlideshowBlock
  | SpacerBlock
  | TextBlock
  | VideosBlock
>;
