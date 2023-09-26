interface IStrapiComponent {
  id: number;
}

export interface ILinkComponent extends IStrapiComponent {
  label: string;
  url: string;
  icon?: IImageFormat;
}

export interface ICollapseComponent extends IStrapiComponent {
  title: string;
  text: string;
}

export interface IDescriptionListItemComponent extends IStrapiComponent {
  title: string;
  text: string;
}

export interface IEmbedComponent extends IStrapiComponent {
  title: string;
  oembed: string;
}

export interface IImageFormat {
  height: number;
  width: number;
  url: string;
}

export interface IImageComponent {
  alternativeText: string;
  caption: string;
  height: number;
  width: number;
  url: string;
  formats: {
    thumbnail: IImageFormat;
    small: IImageFormat;
    medium: IImageFormat;
    large: IImageFormat;
  };
}

export interface IGalleryImage extends IStrapiComponent {
  caption: string;
  image: IImageComponent;
}
