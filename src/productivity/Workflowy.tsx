import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Workflowy = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5.02367C2 3.35374 3.35374 2 5.02367 2H26.9763C28.6463 2 30 3.35374 30 5.02367V26.9763C30 28.6463 28.6463 30 26.9763 30H5.02367C3.35374 30 2 28.6463 2 26.9763V5.02367Z"
        fill="#558AAD"
      />
      <path
        d="M12.3315 11.7751C11.9213 12.3753 11.2314 12.7692 10.4495 12.7692C10.0767 12.7692 9.72486 12.6796 9.41424 12.5209L12.431 15.5377C12.6898 14.5638 13.5775 13.8461 14.6329 13.8461C15.4148 13.8461 16.1047 14.24 16.515 14.8402H22.6684C23.3776 14.8402 23.9525 15.4151 23.9525 16.1242C23.9525 16.8334 23.3776 17.4082 22.6684 17.4082H16.515C16.1047 18.0084 15.4148 18.4023 14.6329 18.4023C14.2921 18.4023 13.9687 18.3274 13.6783 18.1933L15.9584 20.4733H22.6684C23.3776 20.4733 23.9525 21.0482 23.9525 21.7573C23.9525 22.4665 23.3776 23.0414 22.6684 23.0414H12.3315C11.9213 23.6415 11.2314 24.0354 10.4495 24.0354C10.0637 24.0354 9.7003 23.9395 9.38184 23.7703L15.8462 29.9999H26.9761C28.6461 29.9999 29.9998 28.6462 29.9998 26.9763V15.9999L23.4554 9.45557L23.4327 9.45914C23.7481 9.69309 23.9525 10.0682 23.9525 10.4911C23.9525 11.2002 23.3776 11.7751 22.6684 11.7751H12.3315Z"
        fill="#4C7B9B"
      />
      <rect
        x="8.95898"
        y="20.4734"
        width="14.9941"
        height="2.56805"
        rx="1.28402"
        fill="#A1BED2"
      />
      <rect
        x="12.7275"
        y="14.8402"
        width="11.2249"
        height="2.56805"
        rx="1.28402"
        fill="#A1BED2"
      />
      <rect
        x="8.95898"
        y="9.20715"
        width="14.9941"
        height="2.56805"
        rx="1.28402"
        fill="#A1BED2"
      />
      <path
        d="M12.332 11.7751C12.5819 11.4095 12.7281 10.9674 12.7281 10.4911C12.7281 10.0383 12.596 9.61646 12.3683 9.26184L14.9648 11.7751H12.332Z"
        fill="#98B3C6"
      />
      <path
        d="M16.5156 17.4083C16.7655 17.0427 16.9117 16.6005 16.9117 16.1243C16.9117 15.7122 16.8023 15.3258 16.611 14.9923L19.107 17.4083H16.5156Z"
        fill="#98B3C6"
      />
      <path
        d="M12.332 23.0415C12.5819 22.6759 12.7281 22.2337 12.7281 21.7574C12.7281 21.3047 12.596 20.8828 12.3683 20.5282L14.9648 23.0415H12.332Z"
        fill="#98B3C6"
      />
      <circle cx="10.45" cy="10.4911" r="2.27811" fill="white" />
      <circle cx="14.6336" cy="16.1243" r="2.27811" fill="white" />
      <circle cx="10.45" cy="21.7574" r="2.27811" fill="white" />
    </svg>
  )
);

export default Workflowy;
