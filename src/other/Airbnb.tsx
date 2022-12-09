import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Airbnb = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z"
      fill="#FF5A5F"
    />
    <path
      d="M16.0003 19.6867C15.0825 18.5322 14.5426 17.5201 14.3626 16.6542C14.1826 15.9506 14.2546 15.3914 14.5605 14.9765C14.8845 14.4894 15.3704 14.2549 16.0003 14.2549C16.6302 14.2549 17.1162 14.4894 17.4401 14.9765C17.7461 15.3914 17.818 15.9506 17.6381 16.6542C17.4401 17.5382 16.9002 18.5484 16.0003 19.6867ZM21.0251 22.3566C19.4954 23.0241 17.9818 21.9597 16.686 20.5165C18.8295 17.8268 19.2254 15.7342 18.3058 14.3794C17.7659 13.6037 16.992 13.2248 16.0003 13.2248C14.0026 13.2248 12.903 14.9206 13.3349 16.8887C13.5869 17.9531 14.2528 19.1636 15.3146 20.5165C14.5182 21.4012 13.4733 22.4047 12.2191 22.519C10.4014 22.7896 8.97781 21.0217 9.62571 19.1978L14.2348 9.63307C14.6282 8.91403 15.1137 8.29812 15.9985 8.29812C16.6464 8.29812 17.1503 8.67696 17.3663 8.98363L22.3713 19.1978C22.8617 20.432 22.2398 21.8308 21.0251 22.3566ZM23.3468 18.837L19.0617 9.90367C18.2518 8.244 17.6759 7.25 16.0003 7.25C14.3446 7.25 13.6409 8.40455 12.921 9.90367L8.65386 18.837C7.73601 21.3644 9.62571 23.5833 11.9132 23.5833C12.0572 23.5833 12.2001 23.5653 12.3451 23.5653C13.5329 23.421 14.7585 22.6633 16.0003 21.3085C17.2421 22.6615 18.4677 23.421 19.6556 23.5653C19.8006 23.5653 19.9435 23.5833 20.0875 23.5833C22.3749 23.5851 24.2646 21.3644 23.3468 18.837Z"
      fill="white"
    />
  </svg>
));

export default Airbnb;
