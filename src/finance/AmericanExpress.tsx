import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AmericanExpress = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="28" height="28" fill="#1271CD" />
      <path
        d="M8.52344 16.5598L13.002 6.5498H17.269L18.7854 9.94481V6.5498H24.1103L24.992 9.1748L25.9088 6.5498H29.9995V7.73987H26.7553L25.0273 12.4999L23.2288 7.73987H19.914V15.4049L16.5286 7.73987H13.7427L10.322 15.4049H12.6847L13.2842 13.8999H16.8812L17.516 15.4049H19.914H22.0298V10.0849L24.0046 15.4049H25.9089L27.9543 10.0849V15.4049H29.9995V16.5599H27.249L24.9568 19.0099L22.6999 16.5599H19.9492H13.3195V24.2599H19.9492H22.6999L24.9568 21.8099L27.249 24.2599H29.9995V25.4148H26.6846L24.992 23.5248L23.1935 25.4148H12.0852V16.5598H8.52344Z"
        fill="white"
      />
      <path
        d="M29.9995 24.2599V22.6832L27.9189 20.4448L29.9995 18.2651V16.5599L26.3321 20.4449L29.9995 24.2599Z"
        fill="white"
      />
      <path
        d="M19.9492 24.2599V22.5449H15.4001V21.3199H19.8082V19.6049H15.4001V18.3799H19.9492V16.5599L23.6167 20.4449L19.9492 24.2599Z"
        fill="white"
      />
      <path
        d="M15.118 9.62987L14.0248 12.1849H16.1759L15.118 9.62987Z"
        fill="white"
      />
    </svg>
  )
);

export default AmericanExpress;
