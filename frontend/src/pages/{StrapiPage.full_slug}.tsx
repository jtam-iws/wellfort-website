import React from 'react';
import 'twin.macro';
import { graphql } from 'gatsby';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import Constraint from '~components/Constraint';
import Children from '~components/Children';
import Hero from '~components/Hero';
import PageBuilder from '~components/PageBuilder';
import { AllProgramsGrid } from '~components/ProgramsGrid';

import type { StrapiPage } from '~types/strapi-page';

interface PageProps {
  data: {
    strapiPage: StrapiPage;
  };
}

export const query = graphql`
  query StrapiPageQuery($full_slug: String!) {
    strapiPage(full_slug: { eq: $full_slug }) {
      id
      strapiId
      title
      slug
      full_slug
      blocks
      seo {
        metaTitle
        metaDescription
      }
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

const PageTemplate: React.FC<PageProps> = ({ data }) => {
  const page = data.strapiPage;

  let metaTitle = page.seo?.metaTitle || page.title;
  let metaDescription = page.seo?.metaDescription || undefined;
  let banner = page.image?.localFile.publicURL || undefined;

  return (
    <Layout>
      <SEO title={metaTitle} desc={metaDescription} pathname={`/${page.slug}`} banner={banner} />
      <Hero title={page.title} image={page.image} />
      <div tw="container">
        {page.strapiId !== 48 && (
          <Constraint>
            <Children id={page.strapiId} />
          </Constraint>
        )}
      </div>
      <div tw="container">
        <PageBuilder blocks={page.blocks} />
      </div>
      {page.strapiId === 48 && <AllProgramsGrid />}
    </Layout>
  );
};

export default PageTemplate;
