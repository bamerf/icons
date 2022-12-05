import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Skype = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="10.5" cy="10" rx="8.5" ry="8" fill="#184AA9" />
    <circle cx="22" cy="22" r="8" fill="#2173F0" />
    <circle cx="16" cy="16" r="13" fill="url(#paint0_linear_4430_189382)" />
    <path
      d="M16.0688 9C18.1822 9 21 10 20.2955 11.3333C19.3327 13.1557 17.4777 11.3333 16.0688 11.3333C14.6598 11.3333 13.9554 12 13.9554 12.6667C13.9554 13.3333 14.3076 14 16.0688 14.6667C17.8299 15.3333 21 16.3333 21 19C21 21.6667 18.5344 23 15.3643 23C12.5245 23 10.4331 21.6667 11.1375 20.3333C11.9477 18.8 13.9554 20.6667 15.3643 20.6667C16.7732 20.6667 18.1822 20.3333 18.1822 19C18.1822 17.6667 16.0687 17.3333 14.6598 16.6667C12.8986 15.8333 11.1375 15 11.1375 12.6667C11.1375 10.3333 13.9554 9 16.0688 9Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4430_189382"
        x1="5.88889"
        y1="8.05556"
        x2="25.3889"
        y2="24.3056"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#297AC0" />
        <stop offset="1" stop-color="#48B0F9" />
      </linearGradient>
    </defs>
  </svg>
));

export default Skype;
