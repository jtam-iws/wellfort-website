import React from 'react';
import { Link } from 'gatsby';
import 'twin.macro';
import type { IImageFormat } from '~types/components';

import Icon from '~components/Icon';

import getStyles from './styles';

interface ButtonProps {
  block?: boolean;
  submit?: boolean;
  colour: BlockColour;
  style: BlockStyle;
  to?: string;
  icon?: IImageFormat;
}

const Button: React.FC<ButtonProps> = ({ colour, style, to, submit, block, children, icon }) => {
  const styles = getStyles({ colour, style, block });
  const styledIcon = <Icon icon={icon} tw="h-4 w-auto mr-1" />;

  if (to) {
    /**
     * File Link
     */
    if (to.startsWith(`/uploads/`)) {
      return (
        <a href={`${process.env.GATSBY_API_URL || 'http://localhost:1337'}${to}`} css={styles}>
          {styledIcon}
          <span>{children}</span>
        </a>
      );
    }

    /**
     * External Link
     */
    if (/^(https|http):\/\/|tel:[\+\(\)\-0-9]+|mailto:/.test(to)) {
      return (
        <a href={to} css={styles}>
          {styledIcon}
          <span>{children}</span>
        </a>
      );
    }

    /**
     * Internal Link
     */
    return (
      <Link css={styles} to={to}>
        {styledIcon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type={submit ? 'submit' : 'button'} css={styles}>
      {styledIcon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
