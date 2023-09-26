import React from 'react';
import 'twin.macro';

import Heading from '~components/Heading';
import Callout from '~components/Callout';

import { colours } from './maps';

const Callouts: React.FC = () => (
  <>
    <Heading level="h2">Default</Heading>
    {colours.map((colour, index) => (
      <Callout
        strapi_component="shared.callout"
        key={`callout-default-${colour}`}
        id={index}
        colour={colour}
        style="default"
        text="Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris
	  pretium consequat a quis ligula. Sed a interdum ipsum."
      />
    ))}
    <Heading level="h2">Basic</Heading>
    {colours.map((colour, index) => (
      <Callout
        strapi_component="shared.callout"
        key={`callout-basic-${colour}`}
        id={index}
        colour={colour}
        style="basic"
        text="Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris
	  pretium consequat a quis ligula. Sed a interdum ipsum."
      />
    ))}
    <Heading level="h2">Filled</Heading>
    {colours.map((colour, index) => (
      <Callout
        strapi_component="shared.callout"
        key={`callout-filled-${colour}`}
        id={index}
        colour={colour}
        style="filled"
        text="Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris
	  pretium consequat a quis ligula. Sed a interdum ipsum."
      />
    ))}
    <Heading level="h2">Outlined</Heading>
    {colours.map((colour, index) => (
      <Callout
        strapi_component="shared.callout"
        key={`callout-outlined-${colour}`}
        id={index}
        colour={colour}
        style="outlined"
        text="Sed tincidunt lectus efficitur pharetra lobortis. Praesent ultricies nibh vitae mauris
	  pretium consequat a quis ligula. Sed a interdum ipsum."
      />
    ))}
  </>
);

export default Callouts;
