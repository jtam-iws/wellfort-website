import React from 'react';
import 'twin.macro';

import type { IDescriptionListItemComponent } from '~types/components';

const DescriptionListItem: React.FC<IDescriptionListItemComponent> = ({ title, text }) => (
  <div tw="relative">
    <dt>
      <p tw="text-lg leading-6 font-semibold lg:text-xl">{title}</p>
    </dt>
    <dd tw="mt-2 text-base">
      <p tw="opacity-90">{text}</p>
    </dd>
  </div>
);

export default DescriptionListItem;
