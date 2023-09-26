import React from 'react';
import 'twin.macro';

import useNotification from '~hooks/useNotification';

import NotificationLink from './NotificationLink';

const Notification: React.FC = () => {
  const { show, close, message, link } = useNotification();

  if (!show) return null;

  return (
    <div tw="bg-orange text-black text-lg py-3">
      <div tw="container">
        <div tw="flex items-center space-x-2 w-full">
          <div tw="truncate w-full">{message}</div>
          {link && (
            <div tw="flex-shrink-0">
              <NotificationLink to={link.url}>{link.label}</NotificationLink>
            </div>
          )}
          {/* <div tw="flex-shrink-0">
            <button
              onClick={() => close()}
              type="button"
              tw="rounded-full bg-white bg-opacity-60 p-2 text-black focus:(ring ring-blue-500 ring-opacity-40) hover:(bg-blue text-gray-50)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tw="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span tw="sr-only">Dismiss Notification</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Notification;
