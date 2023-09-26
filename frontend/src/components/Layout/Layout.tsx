/* eslint-disable import/no-duplicates */
import * as React from 'react';
import { GlobalStyles } from 'twin.macro';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

import '@reach/skip-nav/styles.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '../../css/styles.css';
import { ThemeProvider } from '~theme';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <ThemeProvider>
    <GlobalStyles />
    <SkipNavLink />
    <div tw="font-sans text-base bg-white text-gray-900 min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <SkipNavContent>
        <main id="main">{children}</main>
      </SkipNavContent>
      <Footer />
    </div>
  </ThemeProvider>
);

export default Layout;
