import React from 'react';
import { decode } from 'he';
import 'twin.macro';

import type { AccordionBlock } from '~types/blocks';

import Constraint from '~components/Constraint';

import Collapse from './Collapse';
import HTMLContent from './HTMLContent';

const Accordion: React.FC<AccordionBlock> = ({ colour, style, collapseItems }) => (
  <Constraint>
    <div tw="flex flex-col my-4 space-y-4 w-full">
      {collapseItems.map((item) => (
        <Collapse key={`collapse-${item.id}`} colour={colour} style={style} title={item.title}>
          <HTMLContent html={decode(item.text)} />
        </Collapse>
      ))}
    </div>
  </Constraint>
);

export default Accordion;
