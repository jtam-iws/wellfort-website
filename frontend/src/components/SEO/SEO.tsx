import * as React from 'react';
import { Helmet } from 'react-helmet';

import useSiteMetaData from '~hooks/useSiteMetaData';

import Facebook from './Facebook';
import Twitter from './Twitter';

interface SEOProps {
  title?: string;
  desc?: string;
  banner?: string;
  pathname?: string;
  article?: boolean;
  createdAt?: string;
  index?: boolean;
  follow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = null,
  desc = null,
  banner = null,
  pathname = null,
  article = false,
  createdAt = null,
  index = true,
  follow = true
}) => {
  const site = useSiteMetaData();

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      tagline,
      defaultDescription,
      defaultBanner,
      headline,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook
    }
  } = site;

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : `${defaultTitle} | ${tagline}`,
    description: desc || defaultDescription,
    image: banner ? `${siteUrl}${banner}` : undefined,
    url: `${siteUrl}${pathname || ''}`
  };

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Organization',
      name: author
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: author
    },
    copyrightYear: '2021',
    creator: {
      '@type': 'Organization',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: author
    },
    datePublished: '2021-01-18T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultBanner}`
    }
  };

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage'
      },
      position: 1
    }
  ];

  let schemaArticle = null;

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Organization',
        name: author
      },
      copyrightHolder: {
        '@type': 'Organization',
        name: author
      },
      copyrightYear: '2021',
      creator: {
        '@type': 'Organization',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}${defaultBanner}`
        }
      },
      datePublished: createdAt,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image
      },
      mainEntityOfPage: seo.url
    };
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title
      },
      position: 2
    });
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement
  };

  return (
    <>
      <Helmet
        title={seo.title}
        htmlAttributes={{
          lang: siteLanguage
        }}
      >
        <meta
          name={`robots`}
          content={`${index ? `index` : `noindex`},${follow ? `follow` : `nofollow`}`}
        />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} />
    </>
  );
};

export default SEO;
