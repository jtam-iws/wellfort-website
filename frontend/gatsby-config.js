const path = require("path")
const website = require("./config.js")

const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix

require("dotenv").config({
  path: `.env`,
})

const siteUrl = `${website.url + pathPrefix}`;

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: siteUrl, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    tagline: website.tagline,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
    youtube: website.youtube,
    linkedin: website.linkedin,
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_API_URL || 'http://localhost:1337',
        collectionTypes: [
          'page',
        ],
        singleTypes: [
          'footer',
          'home',
          'notification'
        ],
        queryLimit: 1000
      }
    },
    {
      resolve: `gatsby-source-strapi-plugin-navigation`,
      options: {
        apiURL: process.env.GATSBY_API_URL || 'http://localhost:1337',
        queryLimit: 100,
        navigationEndpoint: [`navigation`],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_MEASUREMENT_ID
        ],
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
        }
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: website.pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: "standalone",
        icon: website.favicon,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        "~": path.join(__dirname, "src"),
        "~components": path.join(__dirname, "src/components"),
        "~hooks": path.join(__dirname, "src/hooks"),
        "~lib": path.join(__dirname, "src/lib"),
        "~theme": path.join(__dirname, "src/theme/index.tsx"),
        "~types": path.join(__dirname, "src/types"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/style-guide/`],
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            allStrapiPage {
              nodes {
                updated_at
                full_slug
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allStrapiPage: { nodes: allStrapiPages },
        }) => {
          const strapiPageMap = allStrapiPages.reduce((acc, node) => {
            const { full_slug } = node
            acc[`/${full_slug}/`] = node

            return acc
          }, {});

          return allPages.map(page => {
            return { ...page, ...strapiPageMap[page.path] }
          });
        },
        serialize: ({ path, updated_at }) => {
          return {
            url: path,
            lastmod: updated_at,
          }
        },
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-loadable-components-ssr`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-gatsby-cloud`
  ],
}
