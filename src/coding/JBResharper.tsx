import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JBResharper = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4430_189501)">
        <path
          d="M22.7656 6.94861L16.457 16.7772L26.697 32L31.9999 10.56L22.7656 6.94861Z"
          fill="url(#paint0_linear_4430_189501)"
        />
        <path
          d="M23.3604 7.17714L22.4004 0L8.59473 15.36L12.6176 19.3371L9.50901 32H26.6976L23.3604 7.17714Z"
          fill="url(#paint1_linear_4430_189501)"
        />
        <path
          d="M22.4 0H5.30286L0 21.5314H25.4171L22.4 0Z"
          fill="url(#paint2_linear_4430_189501)"
        />
        <path
          d="M25.2796 21.5314L23.3596 7.17714L22.3996 0L19.0625 10.5143L25.2796 21.5314Z"
          fill="url(#paint3_linear_4430_189501)"
        />
        <path
          d="M25.8721 25.8815L6.1235 25.9324L6.07255 6.18385L25.8211 6.1329L25.8721 25.8815Z"
          fill="black"
        />
        <path
          d="M8.04395 22.2267L15.4496 22.2076L15.4528 23.4418L8.04713 23.461L8.04395 22.2267Z"
          fill="white"
        />
        <path
          d="M7.95489 8.73145H11.7035C12.7549 8.73145 13.532 9.00573 14.0806 9.5543C14.5378 10.0114 14.7663 10.6514 14.7663 11.4286V11.4743C14.7663 12.16 14.6292 12.6629 14.2635 13.0743C13.9435 13.4857 13.532 13.8057 12.9835 13.9886L14.9949 16.9143H12.892L11.2006 14.4H9.69204V16.9143H7.90918L7.95489 8.73145ZM11.5663 12.7086C12.0235 12.7086 12.3435 12.6172 12.572 12.3886C12.8006 12.16 12.9378 11.8857 12.9378 11.5657V11.52C12.9378 11.1086 12.8006 10.8343 12.572 10.6514C12.3435 10.4686 11.9778 10.3772 11.5206 10.3772H9.73775V12.7086H11.5663Z"
          fill="white"
        />
        <path
          d="M16.4574 15.1772H15.5889V13.6686H16.7317L17.006 11.9314H15.9546V10.4229H17.2346L17.5089 8.73145H19.0632L18.7889 10.4229H20.4803L20.7546 8.73145H22.3089L22.0346 10.4229H22.9032V11.9314H21.7603L21.486 13.6686H22.5374V15.1772H21.2574L20.9374 16.9143H19.3832L19.7032 15.1772H18.0117L17.6917 16.9143H16.1374L16.4574 15.1772ZM19.9774 13.6686L20.2517 11.9314H18.5603L18.286 13.6686H19.9774Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4430_189501"
          x1="10.489"
          y1="34.6455"
          x2="34.1882"
          y2="9.43638"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.016" stopColor="#B35BA3" />
          <stop offset="0.404" stopColor="#C41E57" />
          <stop offset="0.468" stopColor="#C41E57" />
          <stop offset="0.65" stopColor="#EB8523" />
          <stop offset="0.952" stopColor="#FEBD11" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4430_189501"
          x1="8.10055"
          y1="33.5049"
          x2="31.7975"
          y2="8.29806"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.016" stopColor="#B35BA3" />
          <stop offset="0.404" stopColor="#C41E57" />
          <stop offset="0.468" stopColor="#C41E57" />
          <stop offset="0.704" stopColor="#EB8523" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4430_189501"
          x1="0.835658"
          y1="24.4242"
          x2="22.32"
          y2="4.2176"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.016" stopColor="#B35BA3" />
          <stop offset="0.661" stopColor="#C41E57" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4430_189501"
          x1="22.8083"
          y1="-5.2832"
          x2="22.3352"
          y2="10.9874"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.5" stopColor="#C41E57" />
          <stop offset="0.667" stopColor="#D13F48" />
          <stop offset="0.795" stopColor="#D94F39" />
          <stop offset="0.866" stopColor="#DD5433" />
        </linearGradient>
        <clipPath id="clip0_4430_189501">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default JBResharper;
