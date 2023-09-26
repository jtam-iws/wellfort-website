import { graphql, useStaticQuery } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface IChildPage {
  strapiId: number;
  title: string;
  full_slug: string;
  image?: {
    localFile: IGatsbyImageData & { publicURL: string };
  };
  parent_page: {
    id: number;
  };
}

interface IChildPageQuery {
  allStrapiPage: {
    nodes: IChildPage[];
  };
}

const useChildPages = (id: number) => {
  const result: IChildPageQuery = useStaticQuery(graphql`
    query ChildPageQuery {
      allStrapiPage(sort: { fields: [order, title], order: ASC }) {
        nodes {
          strapiId
          title
          full_slug
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          parent_page {
            id
          }
        }
      }
    }
  `);

  const pages = result.allStrapiPage.nodes.filter((page) => {
    if (page.parent_page && page.parent_page.id) {
      return page.parent_page.id === id;
    }

    return false;
  });

  return pages;
};

export default useChildPages;
