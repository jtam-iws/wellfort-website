import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { Cross as Hamburger } from 'hamburger-react';
import { Transition, Disclosure, Menu } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

import AppointmentDropdown from './AppointmentDropdown';

import type { MenuProps } from '~types/navigation';

const MobileMenu: React.FC<MenuProps> = ({ menu }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const menuLinkStyles = tw`flex justify-center w-full px-4 py-2 text-center text-white bg-transparent rounded-lg hover:(bg-blue-700) focus:(outline-none) focus-visible:(ring ring-blue-500 ring-opacity-60)`;

  return (
    <div tw="flex space-x-2 sm:space-x-6 justify-end items-center">
      <AppointmentDropdown />
      <span tw="block rounded bg-blue text-white hover:(text-gray-200 bg-blue-900) focus:(ring ring-blue-500 ring-opacity-60)">
        <Hamburger
          size={25}
          rounded
          toggled={isOpen}
          onToggle={() => setOpen(!isOpen)}
          label={`${isOpen ? `Close` : `Open`} Menu`}
        />
      </span>
      <Transition
        as={React.Fragment}
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            tw="absolute max-h-96 overflow-y-auto top-full w-screen left-0 bg-blue py-3 transition-all duration-200 ease-in"
          >
            <>
              {menu.items.length ? (
                <div tw="flex flex-col space-y-3 px-3">
                  {menu.items.map((item) => (
                    <React.Fragment key={item.id}>
                      {item.items?.length ? (
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button css={menuLinkStyles}>
                                <span>
                                  {open ? <MinusIcon tw="w-6 h-6" /> : <PlusIcon tw="w-6 h-6" />}
                                </span>
                                <span>{item.title}</span>
                              </Disclosure.Button>
                              <Disclosure.Panel tw="py-2 flex flex-col space-y-1">
                                {item.items &&
                                  item.items.map((child) => (
                                    <Link
                                      key={child.id}
                                      to={`/${child.related[0].full_slug}`}
                                      tw="text-center text-white no-underline hover:underline focus:(ring ring-blue-900 ring-opacity-60)"
                                    >
                                      {child.title}
                                    </Link>
                                  ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <Link css={menuLinkStyles} to={`/${item.related[0].full_slug}`}>
                          {item.title}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ) : null}
            </>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default MobileMenu;
