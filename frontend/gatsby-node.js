/**
 * Prevents optional fields from not appearing in graphql
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `

    type StrapiNotificationLink {
      url: String
      label: String
    }

    type StrapiNotification implements Node {
      enabled: Boolean
      expires: String
      frequency: Int
      message: String
      link: StrapiNotificationLink
    }

    type StrapiPageSeo {
      id: Int
      metaTitle: String
      metaDescription: String
    }

    type StrapiHomeImage {
      id: Int
    }

    type StrapiPageImage {
      id: Int
      strapiId: Int
    }

    type StrapiPage implements Node {
      seo: StrapiPageSeo
      slug: String
      full_slug: String
      image: StrapiPageImage
      blocks: JSON
    }

    type StrapiHome implements Node {
      seo: StrapiPageSeo
      image: StrapiHomeImage
    }
  `
  createTypes(typeDefs)
}
