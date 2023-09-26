import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';

import Logo from '~components/Brand/Logo';
import Menu from '~components/Menu';
import Notification from '~components/Notification';

const Header: React.FC = () => (
  <>
    <nav tw="sticky top-0 w-full bg-white shadow-lg z-50">
      <div tw="container">
        <div tw="flex items-center justify-between py-3">
          <Link to="/">
            <Logo tw="h-12 w-auto" />
            <span tw="sr-only">Home</span>
          </Link>
          <Menu />
        </div>
      </div>
    </nav>
    <Notification />
  </>
);

export default Header;
