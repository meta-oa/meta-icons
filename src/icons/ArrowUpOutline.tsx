import type { SVGProps } from 'react';
import * as React from 'react';
const ArrowUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
    />
  </svg>
);
export default ArrowUpOutline;
