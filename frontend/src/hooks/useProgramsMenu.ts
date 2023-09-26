import type { INavigationItem } from '~types/navigation';
import useMenu from './useMenu';

const useProgramsMenu = (): INavigationItem | null => {
  const menu = useMenu();

  if (menu.items) {
    const programMenu = menu.items.find((item) => {
      return item.audience && item.audience.length && item.audience[0].key === 'programs';
    });

    return programMenu || null;
  }

  return null;
};

export default useProgramsMenu;
