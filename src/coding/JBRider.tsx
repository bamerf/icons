import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JBRider = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_189500)">
      <path
        d="M31.9995 12.4512L28.9783 10.8571L9.56571 0L1.74902 8.19246L9.88251 18.7739L27.6736 20.2958L31.9995 12.4512Z"
        fill="url(#paint0_linear_4430_189500)"
      />
      <path
        d="M23.0507 7.37461L20.2384 0.506042L12.637 7.98673L5.37988 22.9458L22.5881 32L32.0002 26.5051L23.0507 7.37461Z"
        fill="url(#paint1_linear_4430_189500)"
      />
      <path
        d="M9.56617 0L0 6.44343L3.55611 28.4215L12.7305 31.9493L24.5851 22.3191L9.56617 0Z"
        fill="url(#paint2_linear_4430_189500)"
      />
      <path
        d="M6.08105 6.03107H26.0189V25.9689H6.08105V6.03107Z"
        fill="black"
      />
      <path
        d="M7.87598 8.623H11.714C12.1568 8.59684 12.6004 8.65821 13.0195 8.80361C13.4386 8.949 13.8249 9.17557 14.1564 9.47035C14.6266 9.98683 14.8769 10.6663 14.8542 11.3644C14.876 11.9325 14.7128 12.4923 14.3893 12.9597C14.0657 13.427 13.5992 13.7768 13.0598 13.9563L15.1034 16.947H12.9601L11.1657 14.2554H9.72021V16.947H7.87598V8.623ZM11.5645 12.6604C12.4617 12.6604 12.9601 12.1619 12.9601 11.4641C12.9601 10.6666 12.4118 10.2679 11.5146 10.2679H9.67037V12.6604H11.5645V12.6604Z"
        fill="white"
      />
      <path
        d="M16.499 8.62305H19.7887C22.4305 8.62305 24.2249 10.4174 24.2249 12.81C24.2249 15.1526 22.4305 16.9969 19.7887 16.9969H16.499V8.62305ZM18.3433 10.2679V15.3022H19.7887C20.1238 15.3232 20.4595 15.2736 20.7741 15.1564C21.0887 15.0393 21.3752 14.8573 21.6149 14.6223C21.8546 14.3873 22.0423 14.1045 22.1656 13.7923C22.2889 13.48 22.3452 13.1454 22.3308 12.81C22.3504 12.471 22.2982 12.1317 22.1774 11.8144C22.0566 11.4971 21.87 11.2089 21.6299 10.9688C21.3898 10.7287 21.1016 10.5422 20.7843 10.4214C20.467 10.3006 20.1277 10.2483 19.7887 10.2679H18.3433Z"
        fill="white"
      />
      <path d="M7.875 22.2303H15.3516V23.4765H7.875V22.2303Z" fill="white" />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_4430_189500"
        x1="32.1029"
        y1="19.877"
        x2="-2.3456"
        y2="3.72937"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C90F5E" />
        <stop offset="0.221" stopColor="#C90F5E" />
        <stop offset="0.236" stopColor="#C90F5E" />
        <stop offset="0.356" stopColor="#CA135C" />
        <stop offset="0.466" stopColor="#CE1E57" />
        <stop offset="0.574" stopColor="#D4314E" />
        <stop offset="0.678" stopColor="#DC4B41" />
        <stop offset="0.782" stopColor="#E66D31" />
        <stop offset="0.883" stopColor="#F3961D" />
        <stop offset="0.942" stopColor="#FCB20F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4430_189500"
        x1="11.2729"
        y1="4.2441"
        x2="21.0507"
        y2="31.2439"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.042" stopColor="#077CFB" />
        <stop offset="0.445" stopColor="#C90F5E" />
        <stop offset="0.958" stopColor="#077CFB" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_4430_189500"
        x1="7.95246"
        y1="3.62697"
        x2="15.1744"
        y2="29.2933"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.277" stopColor="#C90F5E" />
        <stop offset="0.974" stopColor="#FCB20F" />
      </linearGradient>
      <clipPath id="clip0_4430_189500">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default JBRider;
