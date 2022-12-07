import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Yandex = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16Z"
      fill="white"
    />
    <path
      d="M8.32752 7.8406L7.57883 8.77647C7.25226 9.18468 7.29521 9.77553 7.67738 10.1322L14.5 16.5V26H17.5V16.5L24.3226 10.1322C24.7048 9.77553 24.7477 9.18467 24.4212 8.77647L23.6725 7.8406C23.3094 7.3867 22.6371 7.33697 22.2112 7.7325L16 13.5L9.78884 7.7325C9.3629 7.33697 8.69064 7.3867 8.32752 7.8406Z"
      fill="#FF0013"
    />
  </svg>
));

export default Yandex;