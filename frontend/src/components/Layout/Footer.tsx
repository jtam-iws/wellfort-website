import React from 'react';
import 'twin.macro';
import { decode } from 'he';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Heading from '~components/Heading';

import useFooter from '~hooks/useFooter';
import useSiteMetaData from '~hooks/useSiteMetaData';

import Facebook from '~components/Icon/Facebook';
import LinkedIn from '~components/Icon/LinkedIn';
import Twitter from '~components/Icon/Twitter';
import YouTube from '~components/Icon/YouTube';
import HTMLContent from '~components/HTMLContent';

const Footer: React.FC = () => {
  const { siteMetadata } = useSiteMetaData();
  const footer = useFooter();
  return (
    <>
      <div tw="container mb-12">
        <div tw="grid gap-6 lg:(gap-12 grid-cols-3 divide-x divide-gray-600)">
          <div>
            <Heading level="h2" tw="text-blue text-2xl">
              Supported By
            </Heading>
            <StaticImage
              src="../../images/cwlhin-logo.png"
              alt="Central West Local Health Integration Network"
            />
          </div>
          <div tw="lg:(pl-12)">
            <Heading level="h2" tw="text-blue text-2xl">
              Traditional Land
            </Heading>
            <HTMLContent html={decode(footer.traditionalLand)} />
          </div>
          <div tw="lg:(pl-12)">
            <Heading level="h2" tw="text-blue text-2xl">
              Accredited
            </Heading>
            <HTMLContent html={decode(footer.accredited)} />
          </div>
        </div>
      </div>
      <footer tw="py-6 bg-blue-800 text-white mt-auto">
        <div tw="container">
          <div tw="flex flex-col space-y-3 items-center md:(flex-row justify-between space-y-0)">
            <p tw="text-sm my-0">
              &copy;{new Date().getFullYear()} {siteMetadata.defaultTitle}. Website by{' '}
              <a
                tw="font-medium text-white hover:(underline)"
                href="https://floating-point.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                floating-point
              </a>
              .
            </p>
            <div tw="flex flex-col space-y-3 items-center md:(flex-row justify-between space-x-4 space-y-0)">
              <nav tw="flex space-x-1" aria-label="Social Links">
                <a
                  href={`https://twitter.com/${siteMetadata.twitter}`}
                  tw="text-white bg-transparent rounded-full p-1 transition-colors duration-100 ease-in hover:(text-opacity-80 bg-blue-800) focus:(outline-none) focus-visible:(ring ring-blue-500 ring-opacity-60)"
                >
                  <Twitter tw="h-8 w-8" />
                  <span tw="sr-only">Twitter</span>
                </a>
                <a
                  href={`https://facebook.com/${siteMetadata.facebook}`}
                  tw="text-white bg-transparent rounded-full p-1 transition-colors duration-100 ease-in hover:(text-opacity-80 bg-blue-800) focus:(outline-none) focus-visible:(ring ring-blue-500 ring-opacity-60)"
                >
                  <Facebook tw="h-8 w-8" />
                  <span tw="sr-only">Facebook</span>
                </a>
                <a
                  href={`https://linkedin.com/company/${siteMetadata.linkedin}`}
                  tw="text-white bg-transparent rounded-full p-1 transition-colors duration-100 ease-in hover:(text-opacity-80 bg-blue-800) focus:(outline-none) focus-visible:(ring ring-blue-500 ring-opacity-60)"
                >
                  <LinkedIn tw="h-8 w-8" />
                  <span tw="sr-only">LinkedIn</span>
                </a>
                <a
                  href={`https://youtube.com/user/${siteMetadata.youtube}`}
                  tw="text-white bg-transparent rounded-full p-1 transition-colors duration-100 ease-in hover:(text-opacity-80 bg-blue-800) focus:(outline-none) focus-visible:(ring ring-blue-500 ring-opacity-60)"
                >
                  <YouTube tw="h-8 w-8" />
                  <span tw="sr-only">YouTube</span>
                </a>
              </nav>
              <nav tw="flex space-x-3" aria-label="Utility Links">
                <Link to="/contact/feedback" tw="text-white font-medium underline hover:(no-underline)">
                  Provide Feedback
                </Link>
                <Link
                  to="/about/privacy-and-confidentiality"
                  tw="text-white font-medium underline hover:(no-underline)"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
