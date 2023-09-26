import * as React from 'react';
import { Helmet } from 'react-helmet';

interface FacebookProps {
  url: string;
  name?: string;
  type: string;
  title: string;
  desc: string;
  image?: string;
  locale: string;
}

const Facebook: React.FC<FacebookProps> = ({
  url,
  name = null,
  type = 'website',
  title,
  desc,
  image,
  locale
}) => (
  <Helmet>
    {name && <meta property="og:site_name" content={name} />}
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    {image && <meta property="og:image" content={image} />}
    <meta property="og:image:alt" content={desc} />
  </Helmet>
);

export default Facebook;
