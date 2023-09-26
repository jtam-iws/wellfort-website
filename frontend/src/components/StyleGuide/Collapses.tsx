import React from 'react';
import 'twin.macro';

import Heading from '~components/Heading';
import Collapse from '~components/Collapse';

import { colours } from './maps';

const Collapses: React.FC = () => (
  <>
    <Heading level="h2">Default</Heading>
    {colours.map((colour) => (
      <Collapse
        key={`collapse-default-${colour}`}
        style="default"
        colour={colour}
        title={colour.charAt(0).toUpperCase() + colour.slice(1)}
      >
        Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris
        pretium consequat a quis ligula. Sed a interdum ipsum.
      </Collapse>
    ))}
    <Heading level="h2">Filled</Heading>
    {colours.map((colour) => (
      <Collapse
        key={`collapse-default-${colour}`}
        style="filled"
        colour={colour}
        title={colour.charAt(0).toUpperCase() + colour.slice(1)}
      >
        Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris
        pretium consequat a quis ligula. Sed a interdum ipsum.
      </Collapse>
    ))}
    <Heading level="h2">Outlined</Heading>
    {colours.map((colour) => (
      <Collapse
        key={`collapse-default-${colour}`}
        style="outlined"
        colour={colour}
        title={colour.charAt(0).toUpperCase() + colour.slice(1)}
      >
        Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris
        pretium consequat a quis ligula. Sed a interdum ipsum.
      </Collapse>
    ))}
  </>
);

export default Collapses;
