import React from "react";
import "twin.macro";
import { useMedia } from "use-media";

import useMenu from "~hooks/useMenu";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Menu: React.FC = () => {
  const isWide = useMedia({ minWidth: "1366px" });
  const menu = useMenu();

  return <>{isWide ? <DesktopMenu menu={menu} /> : <MobileMenu menu={menu} />}</>;
};

export default Menu;
