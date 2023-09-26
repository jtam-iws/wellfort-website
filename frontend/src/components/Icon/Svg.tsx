import React from "react";

interface SvgProps {
  viewBox?: string;
}

const Svg: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} />
);

export default Svg;
