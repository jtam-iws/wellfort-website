import { useStaticQuery, graphql } from 'gatsby';

interface QueryInterface {
  site: {
    buildTime: string;
    siteMetadata: {
      siteUrl: string;
      defaultTitle: string;
      tagline: string;
      defaultDescription: string;
      defaultBanner: string;
      headline: string;
      siteLanguage: string;
      ogLanguage: string;
      author: string;
      twitter: string;
      facebook: string;
      linkedin: string;
      youtube: string;
    };
  };
}

interface SiteMetaDataInterface {
  buildTime: string;
  siteMetadata: {
    siteUrl: string;
    defaultTitle: string;
    tagline: string;
    defaultDescription: string;
    defaultBanner: string;
    headline: string;
    siteLanguage: string;
    ogLanguage: string;
    author: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
}

const useSiteMetaData = (): SiteMetaDataInterface => {
  const { site }: QueryInterface = useStaticQuery(graphql`
    {
      site {
        buildTime(formatString: "YYYY-MM-DD")
        siteMetadata {
          siteUrl
          defaultTitle: title
          tagline
          defaultDescription: description
          defaultBanner: banner
          headline
          siteLanguage
          ogLanguage
          author
          twitter
          facebook
          linkedin
          youtube
        }
      }
    }
  `);

  return site;
};

export default useSiteMetaData;
