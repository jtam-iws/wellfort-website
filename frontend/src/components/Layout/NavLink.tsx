import React, { ReactNode } from 'react';
import 'twin.macro';
import { Link } from 'gatsby';

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    tw="
		inline-flex py-2 px-3 rounded-lg tracking-widest bg-transparent
		cursor-pointer transition-colors duration-100 ease-in-out uppercase
		font-semibold text-gray-700 focus:(outline-none ring-4
		ring-indigo-400 ring-opacity-30) hover:(bg-gray-100 shadow)
	"
  >
    {children}
  </Link>
);

export default NavLink;
