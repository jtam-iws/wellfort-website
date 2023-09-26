import React from 'react';
import 'twin.macro';
import { graphql, Link } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { PlusIcon } from '@heroicons/react/solid';

import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { IHomePanel } from '~types/strapi-home';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import { Button } from '~components/Buttons';
import DonatePanel from '~components/DonatePanel';
import Heading from '~components/Heading';
import { HomeProgramsGrid } from '~components/ProgramsGrid';
import { HomeSlideshow } from '~components/Slideshow';

interface HomeProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        tagline: string;
      };
    };
    strapiHome: {
      id: number;
      strapiId: string;
      title: string;
      seo?: {
        metaTitle?: string;
        metaDescription?: string;
      };
      image?: {
        localFile: IGatsbyImageData & { publicURL: string };
      };
      slideshow: IHomePanel[];
      donate: IHomePanel;
    };
  };
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        tagline
      }
    }
    strapiHome {
      id
      strapiId
      title
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      slideshow {
        id
        title
        text
        link {
          label
          url
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
      donate {
        id
        title
        text
        link {
          label
          url
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
  }
`;

const HomePage: React.FC<HomeProps> = ({ data }) => {
  const page = data.strapiHome;

  let imageData;
  if (page.image?.localFile) {
    imageData = getImage(page.image.localFile);
  }

  let metaTitle = page.seo?.metaTitle || page.title;
  let metaDescription = page.seo?.metaDescription || undefined;
  let banner = page.image?.localFile.publicURL || undefined;

  return (
    <Layout>
      <SEO title={metaTitle} desc={metaDescription} pathname="/" banner={banner} />
      <div tw="relative w-full mb-12">
        {imageData && <GatsbyImage image={imageData} alt="" tw="w-full absolute inset-0 z-10" />}
        <div tw="w-full relative pb-6 pt-72 overflow-x-hidden z-20 lg:(pb-6 pt-96)">
          <div tw="container">
            <div tw="bg-blue-100 p-6 pr-12 relative lg:(bg-opacity-90 w-10/12 rounded-lg pr-24)">
              <h1 tw="sr-only">{data.site.siteMetadata.title}</h1>
              <Heading level="h2" tw="mt-0">
                {data.site.siteMetadata.tagline}
              </Heading>
              <div tw="flex items-center flex-col md:(flex-row space-x-6)">
                <Button colour="secondary" style="filled" to="/programs-services/all-programs-services">
                  Connect me to a Program or Service
                </Button>
                <Button colour="primary" style="filled" to="/about/who-we-are">
                  Learn More About Wellfort
                </Button>
              </div>
              <div tw="absolute -top-6 -right-6 w-24 h-24 md:(-top-12 -right-12 w-36 h-36) lg:(-top-24 -right-24 w-64 h-64)">
                <StaticImage placeholder="tracedSVG" alt="" src="../images/favicon.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="container">
        <div tw="my-12">
          <HomeSlideshow slides={page.slideshow} />
        </div>
        <div tw="my-12">
          <HomeProgramsGrid />
          <Link
            tw="flex items-center text-2xl font-medium bg-white text-left py-3 hover:(underline)"
            to="/programs-services/all-programs-services"
          >
            <PlusIcon tw="w-8 h-8 mr-2" />All Programs &amp; Services
          </Link>
        </div>
      </div>
      <div tw="container my-12">
        <DonatePanel {...page.donate} />
      </div>
    </Layout>
  );
};

export default HomePage;
