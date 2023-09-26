import React from 'react';
import 'twin.macro';

import Heading from '~components/Heading';
import Quote from '~components/Quote';

import { colours } from './maps';

const Quotes: React.FC = () => (
  <>
    <Heading level="h2">Default</Heading>
    {colours.map((colour, index) => (
      <Quote
        id={index}
        key={`quote-default-${colour}`}
        strapi_component="shared.quote"
        colour={colour}
        style="default"
        direction={index % 2 ? 'horizontal' : 'vertical'}
        author="Nunc laoreet"
        role="Aenean tortor"
        text="Suspendisse fermentum velit sit amet ipsum tempor, vitae faucibus libero volutpat. Nunc ut ex sodales quam semper bibendum id et lacus."
      />
    ))}
    <Heading level="h2">Filled</Heading>
    {colours.map((colour, index) => (
      <Quote
        id={index}
        key={`quote-filled-${colour}`}
        strapi_component="shared.quote"
        colour={colour}
        style="filled"
        direction={index % 2 ? 'horizontal' : 'vertical'}
        author="Nunc laoreet"
        role="Aenean tortor"
        text="Suspendisse fermentum velit sit amet ipsum tempor, vitae faucibus libero volutpat. Nunc ut ex sodales quam semper bibendum id et lacus."
      />
    ))}
    <Heading level="h2">Outlined</Heading>
    {colours.map((colour, index) => (
      <Quote
        id={index}
        key={`quote-outlined-${colour}`}
        strapi_component="shared.quote"
        colour={colour}
        style="outlined"
        direction={index % 2 ? 'horizontal' : 'vertical'}
        author="Nunc laoreet"
        role="Aenean tortor"
        text="Suspendisse fermentum velit sit amet ipsum tempor, vitae faucibus libero volutpat. Nunc ut ex sodales quam semper bibendum id et lacus."
      />
    ))}
  </>
);

export default Quotes;
