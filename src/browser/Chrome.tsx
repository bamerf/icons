import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Chrome = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0005 2.00382C16.0005 2.00382 24.2527 1.63483 28.6278 9.8999H15.2983C15.2983 9.8999 12.7828 9.81911 10.634 12.8599C10.0167 14.1363 9.3532 15.451 10.0978 18.042C9.02517 16.2313 4.40332 8.21234 4.40332 8.21234C4.40332 8.21234 7.66332 2.33057 16.0004 2.00382H16.0005Z"
      fill="#EF3F36"
    />
    <path
      d="M28.1994 22.9856C28.1994 22.9856 24.3915 30.2935 15.0244 29.9321C16.1818 27.9369 21.691 18.4302 21.691 18.4302C21.691 18.4302 23.022 16.3005 21.4518 12.9253C20.6531 11.7528 19.8391 10.5265 17.2157 9.87287C19.3261 9.85377 28.6045 9.87287 28.6045 9.87287C28.6045 9.87287 32.0805 15.6278 28.1994 22.9856Z"
      fill="#FCD900"
    />
    <path
      d="M3.85931 23.0434C3.85931 23.0434 -0.588992 16.1045 4.41095 8.20074C5.56452 10.1959 11.0737 19.7027 11.0737 19.7027C11.0737 19.7027 12.262 21.9171 15.9772 22.2475C17.3932 22.1438 18.8669 22.0554 20.7497 20.1217C19.7117 21.9517 15.0551 29.9476 15.0551 29.9476C15.0551 29.9476 8.31134 30.0707 3.8592 23.0434H3.85931Z"
      fill="#61BC5B"
    />
    <path
      d="M15.0205 30.0013L16.8955 22.2053C16.8955 22.2053 18.9557 22.0437 20.6842 20.1563C19.6115 22.0362 15.0205 30.0013 15.0205 30.0013V30.0013Z"
      fill="#5AB055"
    />
    <path
      d="M9.71973 16.089C9.71973 12.6523 12.5168 9.86523 15.9658 9.86523C19.4148 9.86523 22.2119 12.6523 22.2119 16.089C22.2119 19.5257 19.4148 22.3127 15.9658 22.3127C12.5168 22.3089 9.71973 19.5257 9.71973 16.089V16.089Z"
      fill="white"
    />
    <path
      d="M10.7656 16.0891C10.7656 13.229 13.0921 10.907 15.9663 10.907C18.8366 10.907 21.1669 13.2252 21.1669 16.0891C21.1669 18.9492 18.8406 21.2712 15.9663 21.2712C13.0959 21.2712 10.7656 18.9492 10.7656 16.0891V16.0891Z"
      fill="url(#paint0_linear_4430_189345)"
    />
    <path
      d="M28.6007 9.87685L20.8808 12.1334C20.8808 12.1334 19.7157 10.4303 17.2119 9.87685C19.384 9.86528 28.6007 9.87685 28.6007 9.87685V9.87685Z"
      fill="#EACA05"
    />
    <path
      d="M9.94735 17.7577C8.86313 15.8855 4.40332 8.21234 4.40332 8.21234L10.1209 13.848C10.1209 13.848 9.53441 15.0513 9.75441 16.7735L9.94724 17.7577H9.94735Z"
      fill="#DF3A32"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4430_189345"
        x1="15.9661"
        y1="10.9802"
        x2="15.9661"
        y2="20.9592"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#86BBE5" />
        <stop offset="1" stopColor="#1072BA" />
      </linearGradient>
    </defs>
  </svg>
));

export default Chrome;