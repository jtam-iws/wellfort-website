import React from 'react';
import parse, {
  attributesToProps,
  HTMLReactParserOptions,
  Element,
  domToReact
} from 'html-react-parser';

import components from './componentMap';
import { xss } from './utils';

interface HTMLContentProps {
  html: string;
}

const HTMLContent: React.FC<HTMLContentProps> = ({ html }) => {
  const options: HTMLReactParserOptions = {
    htmlparser2: {
      lowerCaseAttributeNames: true
    },
    //@ts-ignore
    replace: (domNode: Element) => {
      if (domNode.attribs) {
        if (domNode.type === 'tag') {
          const Component = components[domNode.name];

          if (!Component) return null;

          const props = attributesToProps(domNode.attribs);

          if (domNode.children && domNode.children.length > 0) {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Component {...props}>{domToReact(domNode.children, options)}</Component>;
          }

          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Component {...props} />;
        }
      }

      return domNode;
    }
  };

  return html ? <>{parse(html, options)}</> : null;
};

export { xss };

export default HTMLContent;
