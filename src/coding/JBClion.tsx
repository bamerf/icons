import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JBClion = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_189499)">
      <path
        d="M12.2972 12.9829L10.1943 13.8514L12.0686 0L19.4743 4.02286L12.2972 12.9829Z"
        fill="url(#paint0_linear_4430_189499)"
      />
      <path
        d="M11.1086 19.2L12.2057 0L2.97143 5.80572L0 23.5429L11.1086 19.2Z"
        fill="url(#paint1_linear_4430_189499)"
      />
      <path
        d="M31.36 9.60003L27.2457 1.23431L19.4743 4.02289L13.76 10.3772L0 23.5429L10.3771 31.0857L23.4057 19.3372L31.36 9.60003Z"
        fill="url(#paint2_linear_4430_189499)"
      />
      <path
        d="M13.4401 13.6686L11.6572 24.64L18.9715 30.2629L26.9715 32L32.0001 20.5714L13.4401 13.6686Z"
        fill="url(#paint3_linear_4430_189499)"
      />
      <path
        d="M6.12598 6.12567H25.8745V25.8742H6.12598V6.12567Z"
        fill="black"
      />
      <path d="M8 22.1714H15.4057V23.4057H8V22.1714Z" fill="white" />
      <path
        d="M7.86328 12.8457C7.86328 10.5142 9.60042 8.59424 12.1147 8.59424C13.669 8.59424 14.5833 9.0971 15.3604 9.87424L14.2176 11.2C13.5776 10.6057 12.9376 10.2857 12.1147 10.2857C10.7433 10.2857 9.73757 11.4285 9.73757 12.8457V12.8C9.73757 14.2171 10.6976 15.36 12.1147 15.36C13.029 15.36 13.6233 14.9942 14.2633 14.4L15.4061 15.5428C14.5833 16.4571 13.6233 17.0057 12.069 17.0057C9.64614 17.0514 7.86328 15.1771 7.86328 12.8457Z"
        fill="white"
      />
      <path
        d="M16.6406 8.73138H18.4235V15.4057H21.9892V16.9142H16.6406V8.73138Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_4430_189499"
        x1="10.1733"
        y1="6.91977"
        x2="20.8705"
        y2="6.91977"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#ED358C" />
        <stop offset="0.155" stop-color="#E9388C" />
        <stop offset="0.297" stop-color="#DE418C" />
        <stop offset="0.433" stop-color="#CC508C" />
        <stop offset="0.566" stop-color="#B2658D" />
        <stop offset="0.697" stop-color="#90808D" />
        <stop offset="0.826" stop-color="#67A18E" />
        <stop offset="0.951" stop-color="#37C78F" />
        <stop offset="1" stop-color="#22D88F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4430_189499"
        x1="8.13714"
        y1="4.10606"
        x2="3.43086"
        y2="35.6869"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.091" stop-color="#22D88F" />
        <stop offset="0.903" stop-color="#029DE0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_4430_189499"
        x1="29.1822"
        y1="2.9678"
        x2="-3.00937"
        y2="36.9669"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.091" stop-color="#22D88F" />
        <stop offset="0.903" stop-color="#029DE0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_4430_189499"
        x1="18.3379"
        y1="22.5673"
        x2="30.5715"
        y2="24.3068"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.091" stop-color="#22D88F" />
        <stop offset="0.903" stop-color="#029DE0" />
      </linearGradient>
      <clipPath id="clip0_4430_189499">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default JBClion;
