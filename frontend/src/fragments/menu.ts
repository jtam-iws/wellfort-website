import { graphql } from 'gatsby';

export const navigationItemFragment = graphql`
  fragment NavigationItems on StrapiNavigationItems {
    id
    title
    audience {
      key
    }
    related {
      id
      full_slug
    }
  }
`;

export const navigationItemsItemsFragment = graphql`
  fragment NavigationItemsItems on StrapiNavigationItemsItems {
    id
    title
    related {
      id
      full_slug
    }
  }
`;
