import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const ZM = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187455)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#496E2D"
      />
      <path
        d="M16.6952 11.9993H11.9995V23.9993C13.4022 23.9993 14.7483 23.7578 15.9995 23.3156L16.6952 11.9993Z"
        fill="#D80027"
      />
      <path
        d="M20.0003 20.9427C22.4551 18.7455 24.0004 15.553 24.0004 11.9993H19.3047L20.0003 20.9427Z"
        fill="#FF9811"
      />
      <path
        d="M16 11.9993V23.3155C17.4905 22.7886 18.8458 21.9759 20 20.9427V11.9993H16Z"
        fill="black"
      />
      <path
        d="M22.174 7.82669H19.0436C19.0436 7.25041 18.5764 6.7832 18.0001 6.7832C17.4238 6.7832 16.9566 7.25041 16.9566 7.82669H13.8262C13.8262 8.40302 14.3282 8.87017 14.9044 8.87017H14.8697C14.8697 9.4465 15.3368 9.91366 15.9131 9.91366C15.9131 10.49 16.3803 10.9571 16.9566 10.9571H19.0436C19.6199 10.9571 20.0871 10.49 20.0871 9.91366C20.6634 9.91366 21.1306 9.4465 21.1306 8.87017H21.0958C21.6721 8.87013 22.174 8.40297 22.174 7.82669Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187455">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default ZM;
