import React from 'react';
import 'twin.macro';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

import Heading from '~components/Heading';

import {
  Buttons,
  Callouts,
  Collapses,
  Colours,
  Covers,
  DescriptionLists,
  Galleries,
  ImageTexts,
  Quotes,
  Typography
} from '~components/StyleGuide';

const HomePage: React.FC = () => (
  <Layout>
    <SEO
      title={`Style Guide`}
      desc={`All Available Blocks`}
      pathname="/style-guide"
      follow={false}
      index={false}
    />
    <div tw="container">
      <section>
        <Heading level="h1">Colours</Heading>
        <Colours />
      </section>
      <section>
        <Heading level="h1">Typography</Heading>
        <Typography />
      </section>
      <section>
        <Heading level="h1">Button</Heading>
        <Buttons />
      </section>
      <section>
        <Heading level="h1">Callout</Heading>
        <Callouts />
      </section>
      <section>
        <Heading level="h1">Collapse</Heading>
        <Collapses />
      </section>
      <section>
        <Heading level="h1">Cover</Heading>
        <Covers />
      </section>
      <section>
        <Heading level="h1">Description List</Heading>
        <DescriptionLists />
      </section>
      <section>
        <Heading level="h1">Gallery</Heading>
        <Galleries />
      </section>
      <section>
        <Heading level="h1">Image Text</Heading>
        <ImageTexts />
      </section>
      <section>
        <Heading level="h1">Quote</Heading>
        <Quotes />
      </section>
    </div>
  </Layout>
);

export default HomePage;
