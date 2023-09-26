import React from 'react';
import 'twin.macro';
import loadable from '@loadable/component';
import { decode } from 'he';

import type { LoadableComponent } from '@loadable/component';
import type { ImageTextBlock } from '~types/blocks';

import HTMLContent from '~components/HTMLContent';

const DefaultImageText = loadable(() => import('./DefaultImageText'));
const FadedImageText = loadable(() => import('./FadedImageText'));
const InsetImageText = loadable(() => import('./InsetImageText'));
const OverlapImageText = loadable(() => import('./OverlapImageText'));
const UnevenImageText = loadable(() => import('./UnevenImageText'));

const CTAButtons = loadable(() => import('../Buttons/CTAButtons'));

const ImageText: React.FC<ImageTextBlock> = (props) => {
  const components: Record<string, LoadableComponent<any>> = {
    default: DefaultImageText,
    faded: FadedImageText,
    inset: InsetImageText,
    overlap: OverlapImageText,
    uneven: UnevenImageText
  };

  const Component = components[props.layout] ? components[props.layout] : DefaultImageText;

  return (
    <Component {...props}>
      <HTMLContent html={decode(props.text)} />
      <div tw="-mx-4">
        <CTAButtons id={props.id} colour={props.colour} links={props.links} />
      </div>
    </Component>
  );
};

export default ImageText;
