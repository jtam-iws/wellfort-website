import { useStaticQuery, graphql } from 'gatsby';

import type { IFooterInfo } from '~types/footer';

const useFooter = (): IFooterInfo => {
  const { strapiFooter } = useStaticQuery(graphql`
    query FooterQuery {
      strapiFooter {
        traditionalLand
        accredited
      }
    }
  `);

  return strapiFooter;
};

export default useFooter;
