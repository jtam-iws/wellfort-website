import React from 'react';
import tw from 'twin.macro';

import { ButtonsBlock } from '~types/blocks';

import Constraint from '~components/Constraint';
import Button from './Button';

const Buttons: React.FC<ButtonsBlock> = ({ direction, colour, style, links }) => (
  <Constraint>
    <div
      css={[
        tw`flex mt-6 mb-3 flex-col md:(-mx-1)`,
        direction === 'horizontal' ? tw`md:(flex-row items-center flex-wrap)` : tw``
      ]}
    >
      {links.map((link) => (
        <div key={`button-${link.id}`} tw="md:(mx-1)">
          <Button colour={colour} style={style} to={link.url} icon={link.icon}>
            {link.label}
          </Button>
        </div>
      ))}
    </div>
  </Constraint>
);

export default Buttons;
