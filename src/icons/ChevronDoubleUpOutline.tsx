import * as React from 'react';
import type { SVGProps } from 'react';
const ChevronDoubleUpOutline = (props: SVGProps<SVGSVGElement>) => (
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
    className={`meta-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 7.5-7.5 7.5 7.5m-15 6 7.5-7.5 7.5 7.5"
    />
  </svg>
);
export default ChevronDoubleUpOutline;
