import React from 'react';
import loadable from '@loadable/component';
import type { LoadableComponent } from '@loadable/component';

import type { StrapiBlocks } from '~types/blocks';

const Accordion = loadable(() => import('../Accordion'));
const Buttons = loadable(() => import('../Buttons'));
const Callout = loadable(() => import('../Callout'));
const Cover = loadable(() => import('../Cover'));
const DescriptionList = loadable(() => import('../DescriptionList'));
const Form = loadable(() => import('../Form'));
const Gallery = loadable(() => import('../Gallery'));
const Image = loadable(() => import('../Image'));
const ImageText = loadable(() => import('../ImageText'));
const Quote = loadable(() => import('../Quote'));
const RichText = loadable(() => import('../RichText'));
const Slideshow = loadable(() => import('../Slideshow'));
const Spacer = loadable(() => import('../Spacer'));
const Videos = loadable(() => import('../Videos'));

interface PageBuilderProps {
  blocks: StrapiBlocks;
}

const PageBuilder: React.FC<PageBuilderProps> = ({ blocks }) => {
  const components: Record<string, LoadableComponent<any>> = {
    'shared.accordion': Accordion,
    'shared.buttons': Buttons,
    'shared.callout': Callout,
    'shared.cover': Cover,
    'shared.description-list': DescriptionList,
    'shared.form': Form,
    'shared.gallery': Gallery,
    'shared.image': Image,
    'shared.image-text': ImageText,
    'shared.quote': Quote,
    'shared.slideshow': Slideshow,
    'shared.spacer': Spacer,
    'shared.text': RichText,
    'shared.videos': Videos
  };

  return (
    <>
      {blocks.map((block) => {
        const Component = components[block.strapi_component];
        //@ts-ignore
        return <Component key={`block-${block.id}`} {...block} />;
      })}
    </>
  );
};

export default PageBuilder;
