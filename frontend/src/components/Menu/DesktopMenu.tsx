import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import { Menu, Transition } from '@headlessui/react';

import AppointmentDropdown from './AppointmentDropdown';
import { Button } from '~components/Buttons';

import type { MenuProps } from '~types/navigation';

const DesktopMenu: React.FC<MenuProps> = ({ menu }) => {
  const menuLinkStyles = tw`font-semibold text-gray-900 no-underline transition-colors duration-100 ease-in hover:(text-blue-500 underline) focus:(outline-none ring ring-blue-500 ring-opacity-60 ring-offset-2) xl:(text-lg)`;

  return (
    <>
      {menu.items.length ? (
        <div tw="flex space-x-5 justify-end items-center">
          <AppointmentDropdown />
          {menu.items.map((item) => (
            <React.Fragment key={item.id}>
              {item.items?.length ? (
                <div tw="relative inline-block text-left">
                  <Menu>
                    <Menu.Button css={menuLinkStyles}>{item.title}</Menu.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items tw="absolute left-1/2 transform -translate-x-1/2 w-72 mt-2 origin-top-right bg-blue-500 rounded-lg shadow-lg overflow-hidden ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div tw="flex flex-col space-y-2">
                          {item.items.map((child, index) => (
                            <Link
                              key={child.id}
                              to={`/${child.related[0].full_slug}`}
                              css={[
                                tw`text-center text-white no-underline py-2 hover:underline focus:(ring ring-blue-900 ring-opacity-60)`,
                                index % 2 ? tw`bg-blue-700` : tw``
                              ]}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <Link css={menuLinkStyles} to={`/${item.related[0].full_slug}`}>
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          ))}
          <span tw="-mb-3">
            <Button colour="secondary" to="/donate" style="filled">
              Donate
            </Button>
          </span>
        </div>
      ) : null}
    </>
  );
};

export default DesktopMenu;
