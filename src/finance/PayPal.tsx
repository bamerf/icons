import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const PayPal = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.8485 9.61723C25.1602 7.58517 24.8485 6.23046 23.7576 4.97996C22.5629 3.57315 20.3813 3 17.5762 3H9.52484C8.95345 3 8.48595 3.41683 8.38206 3.98998L5.00566 25.3527C4.95372 25.7695 5.26539 26.1343 5.68094 26.1343H10.6676L10.304 28.3226C10.2521 28.6874 10.5118 29 10.9273 29H15.1349C15.6543 29 16.0699 28.6353 16.1218 28.1663L17.0049 22.6433C17.0568 22.1743 17.5243 21.8096 17.9918 21.8096H18.6151C22.6668 21.8096 25.8874 20.1423 26.8224 15.3487C27.186 13.3687 27.0302 11.6493 25.9913 10.503C25.6796 10.1383 25.316 9.87776 24.8485 9.61723Z"
      fill="#009CDE"
    />
    <path
      d="M24.8485 9.61723C25.1601 7.58517 24.8485 6.23046 23.7576 4.97996C22.5629 3.57315 20.3813 3 17.5762 3H9.52484C8.95345 3 8.48595 3.41683 8.38206 3.98998L5.00566 25.3527C4.95372 25.7695 5.26539 26.1343 5.68094 26.1343H10.6676L11.8623 18.4228C11.9662 17.8497 12.4337 17.4329 13.0051 17.4329H15.3946C20.0696 17.4329 23.7057 15.5571 24.7446 10.0341C24.7965 9.92986 24.7965 9.77355 24.8485 9.61723Z"
      fill="#012169"
    />
    <path
      d="M13.2648 9.66934C13.3168 9.30461 13.7843 8.83567 14.2518 8.83567H20.589C21.3163 8.83567 22.0435 8.88777 22.6668 8.99198C23.2382 9.09619 24.2771 9.35671 24.7965 9.66934C25.1082 7.63727 24.7965 6.28257 23.7057 5.03206C22.5629 3.57315 20.3813 3 17.5762 3H9.52484C8.95345 3 8.48595 3.41683 8.38206 3.98998L5.00566 25.3527C4.95372 25.7695 5.26539 26.1343 5.68094 26.1343H10.6676L13.2648 9.66934Z"
      fill="#003087"
    />
  </svg>
));

export default PayPal;
