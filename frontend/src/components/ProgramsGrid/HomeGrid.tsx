import React from 'react';
import { Link } from 'gatsby';
import 'twin.macro';

import GridImage from './GridImage';

import useProgramsMenu from '~hooks/useProgramsMenu';

const HomeGrid: React.FC = () => {
  const menu = useProgramsMenu();

  if (!menu?.items) {
    return null;
  }

  const items = menu.items.filter((item) => item.related[0].id !== 48);

  return (
    <div tw="my-12 grid gap-6 sm:(grid-cols-2) lg:(grid-cols-3)">
      {items.map((item, index) => (
        <Link
          to={item.related[0].full_slug}
          className="group"
          tw="relative rounded-xl"
          key={`home-grid-${item.related[0].id}`}
        >
          <GridImage id={item.related[0].id} colour={index % 2 ? 'primary' : 'secondary'} />
          <span tw="text-2xl font-medium">{item.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default HomeGrid;
