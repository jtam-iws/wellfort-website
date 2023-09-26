import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

interface NotificationLinkProps {
  to: string;
}

const NotificationLink: React.FC<NotificationLinkProps> = ({ to, children }) => {
  const styles = tw`rounded-lg py-2 px-3 bg-blue text-white hover:(bg-blue-700)`;
  /**
   * External Link
   */
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} css={styles}>
        <span>{children}</span>
      </a>
    );
  }

  /**
   * Internal Link
   */
  return (
    <Link css={styles} to={to}>
      <span>{children}</span>
    </Link>
  );
};

export default NotificationLink;
