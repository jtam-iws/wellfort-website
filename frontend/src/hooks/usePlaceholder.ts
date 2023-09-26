import { useStaticQuery, graphql } from 'gatsby';

interface QueryInterface {
  file: {
    childImageSharp: {
      original: {
        width: number;
        height: number;
        src: string;
      };
    };
  };
}

interface IPlaceholder {
  width: number;
  height: number;
  src: string;
}

const usePlaceholder = (): IPlaceholder => {
  const { file }: QueryInterface = useStaticQuery(graphql`
    query PlaceholderImage {
      file(relativePath: { eq: "placeholder.jpg" }) {
        childImageSharp {
          original {
            width
            height
            src
          }
        }
      }
    }
  `);

  return file.childImageSharp.original;
};

export default usePlaceholder;
