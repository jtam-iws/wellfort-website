import React from 'react';
import 'twin.macro';
import parse, { attributesToProps, HTMLReactParserOptions, Element } from 'html-react-parser';

interface IOembed {
  title: string;
  url: string;
  thumbnail: string;
  mime: string;
  rawData: {
    height: number;
    width: number;
    html: string;
  };
}

interface EmbedProps {
  json: string;
}

const Embed: React.FC<EmbedProps> = ({ json }) => {
  const oembed: IOembed = JSON.parse(json);

  const options: HTMLReactParserOptions = {
    htmlparser2: {
      lowerCaseAttributeNames: true
    },
    //@ts-ignore
    replace: (domNode: Element) => {
      if (domNode.attribs && domNode.name === 'iframe') {
        const props = attributesToProps(domNode.attribs);
        return <iframe tw="absolute top-0 left-0 w-full h-full" title={oembed.title} {...props} />;
      }

      return domNode;
    }
  };

  return oembed && oembed.rawData.html ? (
    <div tw="relative h-0" style={{ paddingBottom: '56.25%' }}>
      {parse(oembed.rawData.html, options)}
    </div>
  ) : null;
};

export default Embed;
