import * as React from 'react';

function IconFont({ id, className }) {
  return (
    <svg
      className={`icon ${className}`}
      width="1em"
      height="1em"
      fill="currentColor"
      overflow="hidden"
      aria-hidden="true"
    >
      <use href={`#${id}`} />
    </svg>
  );
}

export default IconFont;
