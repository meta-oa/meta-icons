import type { SVGProps } from 'react';
import * as React from 'react';
const MinusOutline = (props: SVGProps<SVGSVGElement>) => (
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);
export default MinusOutline;
