import React from 'react';
import 'twin.macro';

import useChildPages from '~hooks/useChildPages';
import ChildCard from './ChildCard';

interface ChildrenProps {
  id: number;
}

const Children: React.FC<ChildrenProps> = ({ id }) => {
  const childPages = useChildPages(id);

  if (!childPages) {
    return null;
  }

  return (
    <div tw="grid gap-6 my-12 md:(grid-cols-2 gap-8) lg:(grid-cols-3 gap-12)">
      {childPages.map((child, index) => (
        <ChildCard
          index={index}
          key={`child-card-${child.strapiId}`}
          image={child.image}
          to={`/${child.full_slug}`}
        >
          {child.title}
        </ChildCard>
      ))}
    </div>
  );
};

export default Children;
