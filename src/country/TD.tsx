import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const TD = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187473)">
      <path
        d="M12.0003 -0.000488281C10.5325 -0.000488281 9.12639 0.263559 7.82645 0.745902L7.30469 11.9995L7.82641 23.2531C9.12639 23.7355 10.5325 23.9995 12.0003 23.9995C13.4682 23.9995 14.8743 23.7355 16.1742 23.2531L16.696 11.9995L16.1743 0.745902C14.8743 0.263559 13.4682 -0.000488281 12.0003 -0.000488281Z"
        fill="#FFDA44"
      />
      <path
        d="M24.0004 12.0004C24.0004 6.84086 20.7439 2.44234 16.1743 0.746826V23.2541C20.7439 21.5585 24.0004 17.16 24.0004 12.0004Z"
        fill="#D80027"
      />
      <path
        d="M7.82611 23.254V0.746826C3.2565 2.44234 0 6.84086 0 12.0004C0 17.16 3.2565 21.5585 7.82611 23.254Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187473">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default TD;
