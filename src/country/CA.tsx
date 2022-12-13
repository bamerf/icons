import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const CA = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187470)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24.0009 12.0011C24.0009 7.24352 21.2322 3.13277 17.2183 1.19177V22.8103C21.2322 20.8693 24.0009 16.7586 24.0009 12.0011Z"
        fill="#D80027"
      />
      <path
        d="M0.000488281 12.0004C0.000488281 16.758 2.76916 20.8687 6.78311 22.8097V1.19116C2.76916 3.13216 0.000488281 7.24291 0.000488281 12.0004Z"
        fill="#D80027"
      />
      <path
        d="M14.0875 13.5663L16.1744 12.5228L15.131 12.001V10.9576L13.044 12.001L14.0875 9.91408H13.044L12.0006 8.34888L10.9571 9.91408H9.91358L10.9571 12.001L8.8701 10.9576V12.001L7.82666 12.5228L9.91358 13.5663L9.39186 14.6097H11.4788V16.1749H12.5223V14.6097H14.6092L14.0875 13.5663Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187470">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default CA;
