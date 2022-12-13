import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const KP = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187583)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.9999 -0.000244141C8.36285 -0.000244141 5.10396 1.61807 2.90332 4.17365H21.0965C18.8959 1.61807 15.637 -0.000244141 11.9999 -0.000244141Z"
        fill="#0052B4"
      />
      <path
        d="M21.0961 19.827H2.90283C5.10347 22.3826 8.36236 24.0009 11.9994 24.0009C15.6365 24.0009 18.8954 22.3826 21.0961 19.827Z"
        fill="#0052B4"
      />
      <path
        d="M22.2387 5.73859H1.76128C0.644297 7.56132 0 9.70506 0 11.9994C0 14.2938 0.644297 16.4376 1.76128 18.2603H22.2387C23.3557 16.4376 24 14.2938 24 11.9994C24 9.70506 23.3557 7.56132 22.2387 5.73859Z"
        fill="#D80027"
      />
      <path
        d="M7.38251 16.6182C9.93261 16.6182 11.9999 14.5509 11.9999 12.0008C11.9999 9.45069 9.93261 7.38342 7.38251 7.38342C4.8324 7.38342 2.76514 9.45069 2.76514 12.0008C2.76514 14.5509 4.8324 16.6182 7.38251 16.6182Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.3823 7.38342L8.41828 10.5719H11.7763L9.05864 12.5426L10.1027 15.7406L7.3823 13.7605L4.66599 15.7369L5.70596 12.5426L2.99072 10.5719H6.34627L7.3823 7.38342Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187583">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default KP;
