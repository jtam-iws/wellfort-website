import React from 'react';
import 'twin.macro';
import { ILinkComponent } from '~types/components';

import Buttons from './Buttons';

interface CTAButtonProps {
  id: number;
  colour: BlockColour;
  links?: ILinkComponent[];
}

const CTAButtons: React.FC<CTAButtonProps> = ({ id, colour, links }) => {
  const buttonColourMap: Record<BlockColour, BlockColour> = {
    primary: 'tertiary',
    secondary: 'primary',
    tertiary: 'primary',
    light: 'dark',
    dark: 'light'
  };

  if (!links || !links.length) {
    return null;
  }

  return (
    <Buttons
      id={id}
      strapi_component="shared.buttons"
      direction="vertical"
      colour={buttonColourMap[colour]}
      style="filled"
      links={links}
    />
  );
};

export default CTAButtons;
