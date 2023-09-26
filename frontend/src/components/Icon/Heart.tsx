import React from "react";

import Svg from "./Svg";

const Heart: React.FC = (props) => (
  <Svg {...props} viewBox="0 0 24 21">
    <path
      fill="currentColor"
      d="M21.67 1.436c-2.568-2.19-6.389-1.795-8.746.637L12 3.025l-.923-.952C8.724-.359 4.899-.753 2.33 1.436-.613 3.948-.768 8.458 1.866 11.18l9.07 9.366a1.47 1.47 0 002.124 0l9.07-9.366c2.639-2.723 2.484-7.233-.46-9.745z"
    ></path>
  </Svg>
);

export default Heart;
