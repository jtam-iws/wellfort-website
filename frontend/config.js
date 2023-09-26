module.exports = {
  pathPrefix: "/",
  title: "WellFort",
  tagline: "Healthcare Services For Our Community",
  description: "WellFort is committed to providing inclusive, accessible and sustainable care. Offering a variety of programs and services to our diversely rich communities.",
  url: "http://localhost:3000", // Domain of your site. No trailing slash!
  siteLanguage: "en",
  logo: require.resolve("./src/images/logo.png"), // Used for SEO

  /**
   * JSONLD Attributes
   */
  titleAlt: "WellFort", // Title for JSONLD
  headline: "Healthcare Services For Our Community", // Headline for schema.org JSONLD
  favicon: require.resolve("./src/images/favicon.png"), // Used for manifest favicon generation
  shortName: "WellFort", // shortname for manifest. MUST be shorter than 12 characters
  author: "Floating-Point", // Author for schemaORGJSONLD
  themeColor: "#FB923C",
  backgroundColor: "#FB923C",

  /**
   * Social Media
   */
  ogLanguage: "en_CA", // Facebook Language
  twitter: "@BramaleaCHC", // Twitter Username
  facebook: "BramaleaCHC",
  linkedin: "wellfort-chs",
  youtube: "bramaleachc",
  /**
   * Skip Nav
   */
  skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
};
