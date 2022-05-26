import * as React from "react";

const IconFont = ({ id, ...props }) => (
  <svg
    className="icon"
    width="1em"
    height="1em"
    fill="currentColor"
    overflow="hidden"
    aria-hidden="true"
    {...props}
  >
    <use href={`#${id}`}></use>
  </svg>
);

export default IconFont;
