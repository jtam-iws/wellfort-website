import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import useChildPages from '~hooks/useChildPages';

interface ChildLinksProps {
  id: number;
  split?: boolean;
}

const ChildLinks: React.FC<ChildLinksProps> = ({ id, split }) => {
  const childPages = useChildPages(id);

  if (!childPages) {
    return null;
  }

  return (
    <ul css={[tw`grid gap-2 mt-3`, split && tw`lg:(grid-cols-2)`]}>
      {childPages.map((child) => (
        <li>
          <Link
            tw="text-white underline hover:(no-underline)"
            to={`/${child.full_slug}`}
            key={`program-child-link-${child.strapiId}`}
          >
            {child.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ChildLinks;
