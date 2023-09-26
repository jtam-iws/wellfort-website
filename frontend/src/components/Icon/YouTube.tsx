import React from "react";

import Svg from "~components/Icon/Svg";

const YouTube: React.FC = (props) => (
  <Svg {...props} viewBox="0 0 22 22">
    <path fill="#fff" d="M12.768 11.008l-2.87-1.633v3.265l2.87-1.632z"></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.021 21.979C17.085 21.979 22 17.063 22 11 22 4.937 17.085.021 11.021.021 4.958.021.043 4.937.043 11c0 6.063 4.915 10.979 10.978 10.979zm4.29-14.608c.472.127.844.502.97.977.23.862.23 2.66.23 2.66s0 1.798-.23 2.66a1.359 1.359 0 01-.97.96c-.857.232-4.29.232-4.29.232s-3.433 0-4.289-.231a1.359 1.359 0 01-.97-.961c-.23-.862-.23-2.66-.23-2.66s0-1.798.23-2.66a1.38 1.38 0 01.97-.977c.856-.23 4.29-.23 4.29-.23s3.432 0 4.289.23z"
      clipRule="evenodd"
    ></path>
  </Svg>
);

export default YouTube;