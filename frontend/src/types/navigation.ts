export interface INavigationItem {
  id: number;
  title: string;
  audience?: {
    key: string;
  }[];
  related: {
    id: number;
    full_slug: string;
  }[];
  items: INavigationItem[];
}

export interface INavigation {
  id: string;
  items: INavigationItem[];
}

export interface MenuProps {
  menu: INavigation;
}

export interface ChildMenuProps {
  menu: INavigationItem[];
}
