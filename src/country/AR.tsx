import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AR = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187433)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.0002 -0.000976562C7.24267 -0.000976562 3.13192 2.7677 1.19092 6.78165H22.8094C20.8685 2.7677 16.7577 -0.000976562 12.0002 -0.000976562Z"
        fill="#338AF3"
      />
      <path
        d="M12.0007 23.9987C16.7582 23.9987 20.869 21.23 22.81 17.2161H1.19141C3.13241 21.23 7.24316 23.9987 12.0007 23.9987Z"
        fill="#338AF3"
      />
      <path
        d="M15.5864 12L14.1208 12.6894L14.9012 14.1087L13.3098 13.8043L13.1082 15.4119L11.9997 14.2295L10.8912 15.4119L10.6896 13.8043L9.09821 14.1087L9.87859 12.6894L8.41309 12L9.87863 11.3106L9.09821 9.89135L10.6896 10.1958L10.8913 8.58813L11.9997 9.77051L13.1082 8.58813L13.3098 10.1958L14.9013 9.89135L14.1209 11.3107L15.5864 12Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187433">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AR;
