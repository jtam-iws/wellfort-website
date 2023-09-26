import React from 'react';
import type { TextBlock } from '~types/blocks';

import Constraint from './Constraint';
import HTMLContent from '~components/HTMLContent';

const RichText: React.FC<TextBlock> = ({ text }) => (
  <Constraint>
    <HTMLContent html={text} />
  </Constraint>
);

export default RichText;
