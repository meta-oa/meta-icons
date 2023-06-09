import * as React from 'react';
import type { SVGProps } from 'react';
const ChevronDoubleDownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    className={`meta-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path
      fillRule="evenodd"
      d="M20.03 4.72a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 11.69l6.97-6.97a.75.75 0 0 1 1.06 0zm0 6a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06L12 17.69l6.97-6.97a.75.75 0 0 1 1.06 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronDoubleDownSolid;
