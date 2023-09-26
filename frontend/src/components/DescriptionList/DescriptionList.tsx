import React from 'react';
import 'twin.macro';

import type { DescriptionListBlock } from '~types/blocks';

import Constraint from '~components/Constraint';
import DescriptionListItem from './DescriptionListItem';

import getStyles from './styles';

const DescriptionList: React.FC<DescriptionListBlock> = ({ colour, title, text, items }) => {
  const styles = getStyles({ colour });

  return (
    <div className="container-break" css={styles}>
      <Constraint>
        <div tw="container">
          <div tw="mb-12">
            <h2 tw="text-3xl font-semibold tracking-wide">{title}</h2>
            {text ? <p tw="text-xl">{text}</p> : null}
          </div>
          <div tw="mt-12 lg:(mt-0 col-span-2)">
            <dl tw="space-y-10 sm:(space-y-0 grid grid-cols-2 gap-x-4 gap-y-10) lg:(gap-x-6)">
              {items.map((item) => (
                <DescriptionListItem key={item.id} {...item} />
              ))}
            </dl>
          </div>
        </div>
      </Constraint>
    </div>
  );
};

export default DescriptionList;
