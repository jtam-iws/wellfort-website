import React from 'react';
import tw from 'twin.macro';

import type { CalloutBlock } from '~types/blocks';

import Constraint from '~components/Constraint';
import Icon from '~components/Icon';

import getStyles, { getBasicBorderStyles } from './styles';

const Callout: React.FC<CalloutBlock> = ({ colour, style, text, icon }) => {
  const styles = getStyles({ colour, style });
  const borderStyles = getBasicBorderStyles(colour);

  return (
    <Constraint>
      <div css={styles}>
        {style === 'basic' && <div css={borderStyles} />}
        <div css={[style === 'basic' && tw`py-2`, tw`flex items-center space-x-2`]}>
          <Icon icon={icon} tw="h-8 w-auto" />
          <div>{text}</div>
        </div>
      </div>
    </Constraint>
  );
};

export default Callout;
