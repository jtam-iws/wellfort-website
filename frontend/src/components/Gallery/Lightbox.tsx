import React, { Fragment } from 'react';
import tw from 'twin.macro';
import { Dialog } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/solid';

import { Transition } from '~components/Transition';
import { IGalleryImage } from '~types/components';
import useImageSrc from '~hooks/useImageSrc';

import LightboxImage from './LightboxImage';

interface LightboxProps {
  isOpen: boolean;
  image: IGalleryImage | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, image }) => {
  const initialFocus = React.useRef(null);

  let imgSrc = '';
  if (image) {
    const {
      image: { height, width, url },
      caption
    } = image;
    imgSrc = useImageSrc(url);
  }

  return (
    <Transition show={isOpen}>
      <Dialog
        onClose={onClose}
        initialFocus={initialFocus}
        tw="fixed max-w-full inset-0 z-50 overflow-x-hidden flex items-center justify-center h-full"
      >
        <Transition.Child
          enter={tw`ease-out duration-300`}
          enterFrom={tw`opacity-0`}
          enterTo={tw`opacity-100`}
          leave={tw`ease-in duration-300`}
          leaveFrom={tw`opacity-100`}
          leaveTo={tw`opacity-0`}
        >
          <Dialog.Overlay tw="fixed z-10 inset-0 w-full h-full bg-black opacity-30" />
          <div tw="left-0 p-12 top-0 mx-auto absolute z-20">
            <button
              ref={initialFocus}
              tw="absolute z-20 top-16 right-16 p-3 outline-none border-0 rounded-lg text-white bg-black bg-opacity-60 hover:(bg-black bg-opacity-90) focus:(ring-2 ring-gray-800)"
              onClick={onClose}
            >
              <XCircleIcon tw="w-6 h-6" />
              <span tw="sr-only">Close Lightbox</span>
            </button>
            <LightboxImage image={image} />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Lightbox;
