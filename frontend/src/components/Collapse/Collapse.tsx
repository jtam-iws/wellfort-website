import React from 'react';
import 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/solid';

import getStyles, { getIconStyles } from './styles';

interface CollapseProps {
  colour: BlockColour;
  style: BlockStyle;
  title: string;
}

const Collapse: React.FC<CollapseProps> = ({ colour, style, title, children }) => {
  const styles = getStyles({ colour, style });

  return (
    <div tw="mb-3">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button css={styles}>
              <ChevronRightIcon css={getIconStyles({ open })} />
              <span>{title}</span>
            </Disclosure.Button>
            <Disclosure.Panel>
              <div tw="p-4 bg-gray-200 rounded-lg">{children}</div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Collapse;
