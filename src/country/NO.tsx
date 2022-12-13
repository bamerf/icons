import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const NO = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187585)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M0.413574 15.131C1.10789 17.7072 2.63812 19.94 4.69584 21.5211V15.131H0.413574Z"
        fill="#D80027"
      />
      <path
        d="M10.9565 23.9549C11.3005 23.9845 11.6484 24.0005 12 24.0005C17.5444 24.0005 22.2096 20.2402 23.5866 15.131H10.9565V23.9549Z"
        fill="#D80027"
      />
      <path
        d="M23.5866 8.87004C22.2096 3.76085 17.5444 0.000488281 12 0.000488281C11.6484 0.000488281 11.3005 0.0165195 10.9565 0.0461445V8.87004H23.5866Z"
        fill="#D80027"
      />
      <path
        d="M4.69584 2.48022C2.63812 4.06132 1.10789 6.29412 0.413574 8.87032H4.69584V2.48022Z"
        fill="#D80027"
      />
      <path
        d="M23.8984 10.4344H9.39136H9.39131V0.28479C8.28234 0.530696 7.23098 0.929274 6.26086 1.45863V10.4343V10.4343H0.101578C0.0347813 10.9467 0 11.4691 0 11.9996C0 12.53 0.0347813 13.0524 0.101578 13.5648H6.26081H6.26086V22.5404C7.23098 23.0697 8.28234 23.4684 9.39131 23.7143V13.5649V13.5648H23.8984C23.9651 13.0524 24 12.53 24 11.9996C24 11.4691 23.9651 10.9467 23.8984 10.4344Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187585">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default NO;
