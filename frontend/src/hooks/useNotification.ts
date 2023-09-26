import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { parseISO, compareAsc, addHours } from 'date-fns';
import { useStaticQuery, graphql } from 'gatsby';

import type { INotification, INotificationHook } from '~types/notification';

const useNotification = (): INotificationHook => {
  const { strapiNotification } = useStaticQuery(graphql`
    query NotficiationQuery {
      strapiNotification {
        enabled
        expires
        frequency
        message
        link {
          label
          url
        }
      }
    }
  `);
  console.log(strapiNotification);
  const { enabled, expires, frequency, message, link }: INotification = strapiNotification;
  const [show, setShow] = React.useState<boolean>(true);
  const cookieName = `wellfort-notification`;

  const determineVisibility = () => {
    let expired;
    if (expires) {
      const exipiryDate = parseISO(expires);
      expired = compareAsc(exipiryDate, new Date()) < 0;
    }

    const cookie = Cookies.get(cookieName);

    if (!enabled || expired || cookie) {
      setShow(false);
    }
  };

  useEffect(() => {
    determineVisibility();
  }, []);

  useEffect(() => {
    determineVisibility();
  }, [enabled, frequency, expires]);

  const close = () => {
    if (frequency) {
      Cookies.set(cookieName, `true`, { expires: addHours(new Date(), frequency) });
    }
    setShow(false);
  };

  return {
    show,
    close,
    message,
    link
  };
};

export default useNotification;
