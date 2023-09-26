import React from 'react';
import tw from 'twin.macro';

import { SpacerBlock } from '~types/blocks';

const Spacer: React.FC<SpacerBlock> = ({ size }) => (
  <div
    css={[
      tw`block w-full`,
      size === 'xs' ? tw`h-6` : tw``,
      size === 'sm' ? tw`h-8` : tw``,
      size === 'md' ? tw`h-12` : tw``,
      size === 'lg' ? tw`h-24` : tw``,
      size === 'xl' ? tw`h-48` : tw``
    ]}
  />
);

export default Spacer;
