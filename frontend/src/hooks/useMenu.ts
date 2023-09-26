import { graphql, useStaticQuery } from 'gatsby';
import type { INavigation } from '~types/navigation'

const useMenu = (): INavigation => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      strapiNavigation {
        id
        items {
          ...NavigationItems
          items {
            ...NavigationItemsItems
          }
        }
      }
    }
  `);

  return data.strapiNavigation;
};

export default useMenu;
