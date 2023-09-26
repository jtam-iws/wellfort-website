import React from 'react';
import tw from 'twin.macro';
import { Menu, Transition } from '@headlessui/react';

const AppointmentDropdown = () => (
  <div tw="relative inline-block text-left">
    <Menu>
      <Menu.Button
        css={tw`font-semibold text-red-600 no-underline transition-colors duration-100 ease-in hover:(text-red-900 underline) focus:(outline-none ring ring-red-500 ring-opacity-60 ring-offset-2) xl:(text-lg)`}
      >
        Book an Appointment
      </Menu.Button>
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
            <a
              href="https://www.wellfort.ca/covid-cough-flu/"
              tw="text-center bg-blue-700 text-white no-underline py-2 hover:underline focus:(ring ring-blue-900 ring-opacity-60)"
            >
              COVID, Cough & Flu
            </a>
            <a
              href="https://ocean.cognisantmd.com/online-booking/9be0deff-8e94-44f9-9eb9-f458d1d9061e"
              tw="text-center text-white no-underline py-2 hover:underline focus:(ring ring-blue-900 ring-opacity-60)"
            >
              Book an appointment with a Healthcare Provider – Bramalea Site
            </a>
            <a
              href="https://ocean.cognisantmd.com/online-booking/f65e035b-5c13-40aa-a978-ab75d5495c36"
              tw="text-center bg-blue-700 text-white no-underline py-2 hover:underline focus:(ring ring-blue-900 ring-opacity-60)"
            >
             Book an appointment with a Healthcare Provider – Four Corners Site
            </a>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);

export default AppointmentDropdown;