import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SE = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187634)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FFDA44"
      />
      <path
        d="M9.39116 10.435H23.8982C23.1312 4.54721 18.0967 0.000244141 11.9998 0.000244141C11.1038 0.000244141 10.2311 0.099291 9.39111 0.285479V10.435H9.39116Z"
        fill="#0052B4"
      />
      <path
        d="M6.26085 10.4349V1.45923C2.96581 3.25707 0.607016 6.55478 0.101562 10.4349H6.26085V10.4349Z"
        fill="#0052B4"
      />
      <path
        d="M6.2608 13.5657H0.101562C0.607016 17.4458 2.96581 20.7436 6.26085 22.5414L6.2608 13.5657Z"
        fill="#0052B4"
      />
      <path
        d="M9.39111 13.5657V23.7152C10.2311 23.9014 11.1038 24.0005 11.9998 24.0005C18.0967 24.0005 23.1312 19.4535 23.8982 13.5657H9.39111V13.5657Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187634">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default SE;
