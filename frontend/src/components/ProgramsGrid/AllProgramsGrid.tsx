import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';

import GridImage from './GridImage';
import ChildLinks from './ChildLinks';

import useProgramsMenu from '~hooks/useProgramsMenu';

const AllProgramsGrid: React.FC = () => {
  const menu = useProgramsMenu();

  if (!menu?.items) {
    return null;
  }

  const items = menu.items.filter((item) => item.related[0].id !== 48);

  return (
    <div tw="bg-blue mt-48 py-12">
      <div tw="container">
        <div tw="-mt-32 grid gap-6 lg:(gap-12 grid-cols-2) xl:(gap-16 grid-cols-6)">
          {items.map((item, index) => (
            <div css={[tw`relative`, index !== 3 ? tw`xl:(col-span-2)` : tw`xl:(col-span-4)`]}>
              <div tw="relative z-10">
                <Link to={`/${item.related[0].full_slug}`} className="group" tw="relative rounded-xl">
                  <GridImage id={item.related[0].id} colour="secondary" />
                  <span tw="text-2xl font-medium text-white">{item.title}</span>
                </Link>
                <ChildLinks id={item.related[0].id} split={index === 3} />
              </div>
              <div tw="absolute -top-6 -left-6 w-12 h-12 z-20 lg:(-top-8 -left-8 w-24 h-24)">
                <StaticImage placeholder="tracedSVG" alt="" src="../../images/favicon.png" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProgramsGrid;
