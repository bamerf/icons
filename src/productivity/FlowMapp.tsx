import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const FlowMapp = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#172132" />
      <path
        d="M7.9 11C7.40294 11 7 11.407 7 11.9091V20.0909C7 20.593 7.40294 21 7.9 21H8.35C8.84706 21 9.25 20.593 9.25 20.0909V13.2727H13.3C13.7971 13.2727 14.2 12.8657 14.2 12.3636V11.9091C14.2 11.407 13.7971 11 13.3 11H7.9Z"
        fill="white"
      />
      <path
        d="M16.9 11H16.45C15.9529 11 15.55 11.407 15.55 11.9091V20.0909C15.55 20.593 15.9529 21 16.45 21H16.9C17.3971 21 17.8 20.593 17.8 20.0909V11.9091C17.8 11.407 17.3971 11 16.9 11Z"
        fill="white"
      />
      <path
        d="M24.1 11H23.65C23.1529 11 22.75 11.407 22.75 11.9091V20.0909C22.75 20.593 23.1529 21 23.65 21H24.1C24.5971 21 25 20.593 25 20.0909V11.9091C25 11.407 24.5971 11 24.1 11Z"
        fill="white"
      />
      <path
        d="M20.05 12.8182H20.5C20.9971 12.8182 21.4 13.2252 21.4 13.7273V18.7273C21.4 19.2294 20.9971 19.6364 20.5 19.6364H20.05C19.5529 19.6364 19.15 19.2294 19.15 18.7273V13.7273C19.15 13.2252 19.5529 12.8182 20.05 12.8182Z"
        fill="white"
      />
      <path
        d="M11.95 15.5454H11.05C10.553 15.5454 10.15 15.9525 10.15 16.4545V16.9091C10.15 17.4112 10.553 17.8182 11.05 17.8182H11.95C12.4471 17.8182 12.85 17.4112 12.85 16.9091V16.4545C12.85 15.9525 12.4471 15.5454 11.95 15.5454Z"
        fill="white"
      />
    </svg>
  )
);

export default FlowMapp;