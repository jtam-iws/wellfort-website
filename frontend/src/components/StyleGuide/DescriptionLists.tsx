import React from 'react';
import 'twin.macro';

import DescriptionList from '~components/DescriptionList';

import { colours } from './maps';

const DescriptionLists: React.FC = () => (
  <>
    {colours.map((colour, index) => (
      <DescriptionList
        id={index}
        strapi_component="shared.description-list"
        key={`description-list-${colour}`}
        colour={colour}
        title={colour.charAt(0).toUpperCase() + colour.slice(1)}
        text="Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris pretium consequat a quis ligula. Sed a interdum ipsum."
        items={[
          {
            id: 1,
            title: 'Item One',
            text: 'Integer vel libero ut magna aliquet ultrices ac ut massa.'
          },
          {
            id: 2,
            title: 'Item Two',
            text: 'Morbi tincidunt magna eget accumsan eleifend'
          },
          {
            id: 3,
            title: 'Item Three',
            text: 'Sed placerat ligula non dictum consectetur.'
          }
        ]}
      />
    ))}
  </>
);

export default DescriptionLists;
