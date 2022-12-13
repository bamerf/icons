import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BA = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187459)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.9994 -0.000732422C7.74456 -0.000732422 4.00721 2.21378 1.87646 5.55297L18.1495 22.3047C21.6531 20.2093 23.9994 16.3785 23.9994 11.9993C23.9994 5.37189 18.6268 -0.000732422 11.9994 -0.000732422Z"
        fill="#FFDA44"
      />
      <path
        d="M24.0001 11.9991C24.0001 8.88554 22.8142 6.04922 20.8696 3.9165V20.0817C22.8142 17.9489 24.0001 15.1126 24.0001 11.9991Z"
        fill="#0052B4"
      />
      <path
        d="M14.9906 22.5868L16.2475 22.586L16.6353 21.3903L17.0245 22.5856L17.6549 22.5852C18.0415 22.3782 18.4154 22.1508 18.7752 21.9042L2.09528 5.22424C1.82041 5.62531 1.56972 6.04409 1.3443 6.47815L1.49252 6.9334L2.74947 6.9326L1.73303 7.67206L2.12219 8.86732L1.10482 8.12913L0.49802 8.57051C0.174535 9.65688 0.000488281 10.8076 0.000488281 11.999C0.000488281 18.6264 5.37311 23.999 12.0005 23.999C13.4017 23.999 14.7466 23.7585 15.9966 23.3169L14.9906 22.5868ZM2.677 11.4773L3.06466 10.2816L2.04738 9.54335L3.30433 9.54256L3.69203 8.34682L4.08119 9.54209L5.33814 9.54129L4.32166 10.2807L4.71082 11.476L3.69344 10.7378L2.677 11.4773ZM5.26568 14.086L5.65333 12.8903L4.63605 12.152L5.893 12.1512L6.28071 10.9555L6.66986 12.1508L7.92682 12.15L6.91038 12.8894L7.29953 14.0847L6.28216 13.3465L5.26568 14.086ZM7.8543 16.6947L8.24196 15.499L7.22468 14.7607L8.48163 14.7599L8.86933 13.5642L9.25849 14.7595L10.5154 14.7587L9.499 15.4981L9.88816 16.6934L8.87078 15.9551L7.8543 16.6947ZM11.4594 18.5639L10.4429 19.3034L10.8306 18.1077L9.8133 17.3694L11.0703 17.3686L11.458 16.1729L11.8472 17.3682L13.1041 17.3674L12.0877 18.1068L12.4768 19.3021L11.4594 18.5639ZM13.0316 21.9121L13.4193 20.7164L12.402 19.9781L13.6589 19.9773L14.0466 18.7816L14.4358 19.9768L15.6927 19.976L14.6763 20.7155L15.0655 21.9108L14.0481 21.1725L13.0316 21.9121Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187459">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BA;
