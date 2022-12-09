import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AdobeLightroom = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="28" height="28" fill="#ADD5EC" />
      <rect x="3" y="3" width="26" height="26" fill="#022326" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1568 22.9873C10.0314 22.9873 10 22.9239 10 22.7971V9.16485C10 9.06341 10.0314 9 10.1254 9H11.777C11.8606 9 11.8815 9.03804 11.8815 9.15217V20.8949H16.1882C16.2718 20.8949 16.3031 20.933 16.2822 21.0471L16.0209 22.8478C16 22.9493 15.9477 23 15.8641 23L10.1568 22.9873ZM17.9443 13.5399C17.9443 13.4384 17.9652 13.413 18.0279 13.375C18.6655 13.058 20.1812 12.5 21.8746 12.5C21.9582 12.5 22 12.5254 22 12.6268V14.4529C22 14.5543 21.9686 14.5797 21.8746 14.5797C21.216 14.5417 20.2439 14.6431 19.878 14.8333V22.8351C19.878 22.9366 19.8467 22.9873 19.7526 22.9873H18.1115C18.0279 22.9873 17.9861 22.9493 17.9861 22.8351L17.9443 13.5399Z"
        fill="#ADD5EC"
      />
    </svg>
  )
);

export default AdobeLightroom;
