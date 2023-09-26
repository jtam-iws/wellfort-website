import React from 'react';
import 'twin.macro';

import Heading1 from './Heading1';
import Heading2 from './Heading2';
import Heading3 from './Heading3';
import Heading4 from './Heading4';
import Heading5 from './Heading5';
import Heading6 from './Heading6';

interface HeadingProps {
  level?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 'h2', children, ...rest }) => {
  const levels: Record<string, React.FC> = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6
  };

  const ComponentTag: React.FC = levels[level] ? levels[level] : levels.h2;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ComponentTag {...rest}>{children}</ComponentTag>;
};

export default Heading;
