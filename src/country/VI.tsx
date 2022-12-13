import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const VI = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187452)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FCFCFC"
      />
      <path
        d="M14.0378 8.38349C14.0378 7.25793 13.1254 6.34546 11.9997 6.34546C10.8741 6.34546 9.96167 7.25793 9.96167 8.38349H5.47803C5.47803 9.49166 6.44337 10.3901 7.55154 10.3901H7.48479C7.48479 11.4984 8.38311 12.3969 9.49147 12.3969C9.49147 13.3781 10.1962 14.1934 11.1269 14.3677L11.1217 14.3794H12.8779L12.8727 14.3677C13.8034 14.1934 14.5081 13.3781 14.5081 12.3969C15.6164 12.3969 16.5148 11.4984 16.5148 10.3901H16.4479C17.5561 10.3901 18.5215 9.49166 18.5215 8.38349H14.0378Z"
        fill="#FFDA44"
      />
      <path
        d="M11.104 14.1724L9.84033 17.0253C10.5071 17.2964 11.2358 17.447 12 17.447C12.7641 17.447 13.4928 17.2964 14.1595 17.0253L12.8959 14.1724H11.104Z"
        fill="#FFDA44"
      />
      <path
        d="M9.39111 9.3855V12.896C9.39111 14.8928 11.9998 15.5047 11.9998 15.5047C11.9998 15.5047 14.6085 14.8928 14.6085 12.896V9.3855H9.39111Z"
        fill="#F0F0F0"
      />
      <path
        d="M2.90975 12.0845L4.32065 16.0306L5.71686 12.0845H6.78243L4.74683 17.3018H3.89441L1.84424 12.0845H2.90975Z"
        fill="#338AF3"
      />
      <path
        d="M19.3042 17.3018V12.0845H20.3182V17.3018H19.3042Z"
        fill="#338AF3"
      />
      <path
        d="M10.4346 10.5195V14.7736C10.7932 15.0376 11.1791 15.2191 11.4781 15.3354V10.5195H10.4346Z"
        fill="#D80027"
      />
      <path
        d="M13.5645 10.5195V14.7736C13.2058 15.0376 12.82 15.2191 12.521 15.3354V10.5195H13.5645Z"
        fill="#D80027"
      />
      <path
        d="M14.6085 9.3855H9.39111V11.0409H14.6085V9.3855Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187452">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default VI;
