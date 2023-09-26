import React from 'react';
import 'twin.macro';

import type { VideosBlock } from '~types/blocks';

import Embed from '~components/Embed';

import getStyles from './styles';

const Videos: React.FC<VideosBlock> = ({ columns, gap, embeds }) => {
  const styles = getStyles({ columns, gap });

  return (
    <div css={styles}>
      {embeds.map((embed) => {
        if (embed.oembed) {
          return <Embed json={embed.oembed} />;
        }
      })}
    </div>
  );
};

export default Videos;
