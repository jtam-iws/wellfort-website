import React from 'react';
import tw from 'twin.macro';
import { ChatIcon } from '@heroicons/react/outline';

import { QuoteBlock } from '~types/blocks';

import Constraint from '~components/Constraint';
import Icon from '~components/Icon';

import getStyles from './styles';

const Quote: React.FC<QuoteBlock> = ({ colour, style, direction, author, role, text, icon }) => {
  const styles = getStyles({ colour, style, direction });

  return (
    <Constraint>
      <blockquote css={styles}>
        <div
          css={[
            tw`flex items-center `,
            direction === 'horizontal'
              ? tw`flex-row space-x-3 text-left`
              : tw`flex-col space-y-3 text-center`
          ]}
        >
          <Icon
            icon={icon}
            css={[tw`w-12 h-auto flex-shrink-0`, direction === 'horizontal' ? tw`-mt-12` : tw``]}
          />
          <div
            css={[
              tw`flex flex-col space-y-3 p-2`,
              direction === 'horizontal' ? tw`items-start` : tw`items-center`
            ]}
          >
            <div tw="text-2xl">{text}</div>
            {author || role ? (
              <cite>
                {author && <span tw="block font-semibold text-base">{author}</span>}
                {role && <span tw="block text-sm">{role}</span>}
              </cite>
            ) : null}
          </div>
        </div>
      </blockquote>
    </Constraint>
  );
};

export default Quote;
