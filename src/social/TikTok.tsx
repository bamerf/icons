import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const TikTok = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.45095 19.7926C8.60723 18.4987 9.1379 17.7742 10.1379 17.0316C11.5688 16.0258 13.3561 16.5948 13.3561 16.5948V13.2196C13.7907 13.2085 14.2254 13.2342 14.6551 13.2966V17.6401C14.6551 17.6401 12.8683 17.0711 11.4375 18.0774C10.438 18.8196 9.90623 19.5445 9.7505 20.8384C9.74562 21.541 9.87747 22.4594 10.4847 23.2536C10.3345 23.1766 10.1815 23.0889 10.0256 22.9904C8.68807 22.0923 8.44444 20.7448 8.45095 19.7926ZM22.0352 6.97892C21.0509 5.90033 20.6786 4.81133 20.5441 4.04633H21.7823C21.7823 4.04633 21.5354 6.05218 23.3347 8.02475L23.3597 8.05128C22.8747 7.74624 22.43 7.38618 22.0352 6.97892ZM28 10.0369V14.293C28 14.293 26.42 14.2311 25.2507 13.9336C23.6179 13.5176 22.5685 12.8795 22.5685 12.8795C22.5685 12.8795 21.8436 12.4244 21.785 12.3927V21.1817C21.785 21.671 21.651 22.8932 21.2424 23.9125C20.709 25.2459 19.8859 26.1211 19.7345 26.3C19.7345 26.3 18.7334 27.4832 16.9672 28.2799C15.3752 28.9986 13.9774 28.9804 13.5596 28.9986C13.5596 28.9986 11.1434 29.0943 8.96915 27.6813C8.49898 27.3699 8.06011 27.0171 7.6582 26.6277L7.66906 26.6355C9.84383 28.0485 12.2595 27.9528 12.2595 27.9528C12.6779 27.9346 14.0756 27.9528 15.6671 27.2341C17.4317 26.4373 18.4344 25.2542 18.4344 25.2542C18.5842 25.0753 19.4111 24.2001 19.9423 22.8661C20.3498 21.8473 20.4849 20.6247 20.4849 20.1353V11.3474C20.5435 11.3796 21.2679 11.8347 21.2679 11.8347C21.2679 11.8347 22.3179 12.4733 23.9506 12.8888C25.1204 13.1863 26.7 13.2482 26.7 13.2482V9.91308C27.2404 10.0343 27.7011 10.067 28 10.0369Z"
      fill="#EE1D52"
    />
    <path
      d="M26.7009 9.91308V13.2472C26.7009 13.2472 25.1213 13.1853 23.9515 12.8878C22.3188 12.4718 21.2688 11.8336 21.2688 11.8336C21.2688 11.8336 20.5444 11.3786 20.4858 11.3464V20.1363C20.4858 20.6257 20.3518 21.8484 19.9432 22.8672C19.4098 24.2011 18.5867 25.0763 18.4353 25.2552C18.4353 25.2552 17.4337 26.4384 15.668 27.2351C14.0765 27.9538 12.6788 27.9356 12.2604 27.9538C12.2604 27.9538 9.84473 28.0495 7.66995 26.6365L7.6591 26.6287C7.42949 26.4064 7.21336 26.1716 7.01177 25.9256C6.31777 25.0795 5.89237 24.0789 5.78547 23.7934C5.78529 23.7922 5.78529 23.7909 5.78547 23.7897C5.61347 23.2936 5.25209 22.1021 5.30147 20.9481C5.38883 18.9121 6.10507 17.6624 6.29444 17.3494C6.79597 16.4956 7.44828 15.7318 8.22233 15.0918C8.90538 14.5396 9.6796 14.1002 10.5132 13.7917C11.4144 13.4294 12.3794 13.2353 13.3565 13.2196V16.5948C13.3565 16.5948 11.5691 16.0279 10.1388 17.0316C9.13879 17.7742 8.60812 18.4987 8.45185 19.7926C8.44534 20.7448 8.68897 22.0923 10.0254 22.9909C10.1813 23.0897 10.3343 23.1775 10.4845 23.2541C10.7179 23.5576 11.0021 23.822 11.3255 24.0368C12.631 24.8631 13.7249 24.9209 15.1238 24.3842C16.0565 24.0253 16.7586 23.2166 17.0842 22.3206C17.2888 21.761 17.2861 21.1978 17.2861 20.6153V4.04633H20.5417C20.6763 4.81133 21.0485 5.90033 22.0328 6.97892C22.4276 7.38618 22.8724 7.74624 23.3573 8.05128C23.5006 8.19949 24.2331 8.93225 25.1734 9.3821C25.6596 9.61463 26.1722 9.79279 26.7009 9.91308Z"
      fill="black"
    />
    <path
      d="M4.48926 22.757V22.7596L4.57004 22.9785C4.56076 22.953 4.53074 22.8755 4.48926 22.757Z"
      fill="#69C9D0"
    />
    <path
      d="M10.5128 13.7917C9.67919 14.1002 8.90498 14.5396 8.22192 15.0918C7.44763 15.7333 6.79548 16.4987 6.29458 17.3541C6.10521 17.6661 5.38897 18.9169 5.30161 20.9529C5.25223 22.1069 5.61361 23.2983 5.78561 23.7945C5.78543 23.7957 5.78543 23.7969 5.78561 23.7981C5.89413 24.081 6.31791 25.0816 7.01191 25.9303C7.2135 26.1764 7.42963 26.4111 7.65924 26.6334C6.92357 26.1458 6.26746 25.5562 5.71236 24.884C5.02433 24.0451 4.60001 23.0549 4.48932 22.7627C4.48919 22.7606 4.48919 22.7585 4.48932 22.7564V22.7528C4.31677 22.2572 3.95431 21.0652 4.00477 19.9096C4.09213 17.8736 4.80838 16.6239 4.99775 16.3109C5.4985 15.4554 6.15067 14.6899 6.92509 14.0486C7.608 13.4962 8.38225 13.0568 9.21598 12.7485C9.73602 12.5417 10.2778 12.3891 10.8319 12.2934C11.6669 12.1537 12.5198 12.1416 13.3588 12.2575V13.2196C12.3808 13.235 11.4148 13.4291 10.5128 13.7917Z"
      fill="#69C9D0"
    />
    <path
      d="M20.5438 4.04635H17.2881V20.6159C17.2881 21.1983 17.2881 21.76 17.0863 22.3211C16.7575 23.2167 16.058 24.0253 15.1258 24.3842C13.7265 24.923 12.6326 24.8632 11.3276 24.0368C11.0036 23.823 10.7187 23.5594 10.4844 23.2567C11.5962 23.8251 12.5913 23.8152 13.8241 23.341C14.7558 22.9821 15.4563 22.1734 15.784 21.2774C15.9891 20.7178 15.9864 20.1546 15.9864 19.5726V3H20.4819C20.4819 3 20.4315 3.41188 20.5438 4.04635ZM26.7002 8.99104V9.9131C26.1725 9.79263 25.6609 9.61447 25.1755 9.38213C24.2352 8.93228 23.5026 8.19952 23.3594 8.0513C23.5256 8.1559 23.6981 8.25106 23.8759 8.33629C25.0192 8.88339 26.1451 9.04669 26.7002 8.99104Z"
      fill="#69C9D0"
    />
  </svg>
));

export default TikTok;
