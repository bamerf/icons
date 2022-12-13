import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Microsoft = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4430_187548)">
        <path
          d="M1.19072 6.78274C0.427875 8.36037 0 10.1302 0 12.0001C0 13.87 0.427875 15.6399 1.19072 17.2175L12 18.261L22.8093 17.2175C23.5721 15.6399 24 13.87 24 12.0001C24 10.1302 23.5721 8.36037 22.8093 6.78274L12 5.73926L1.19072 6.78274Z"
          fill="black"
        />
        <path
          d="M1.19141 17.2168C3.13231 21.2307 7.24273 23.9994 12.0003 23.9994C16.7577 23.9994 20.8682 21.2307 22.8091 17.2168H1.19141Z"
          fill="#496E2D"
        />
        <path
          d="M1.19141 6.78299H22.8091C20.8682 2.76904 16.7577 0.000366211 12.0003 0.000366211C7.24273 0.000366211 3.13231 2.76904 1.19141 6.78299Z"
          fill="#D80027"
        />
        <path
          d="M14.7934 9.80481L15.778 11.1616L17.3725 10.6446L16.3864 12.0002L17.3708 13.357L15.7769 12.838L14.7908 14.1936L14.7918 12.5173L13.1978 11.9983L14.7923 11.4812L14.7934 9.80481Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.1067 15.3904C10.2337 15.3904 8.71534 13.8721 8.71534 11.9991C8.71534 10.1262 10.2337 8.60782 12.1067 8.60782C12.6906 8.60782 13.2401 8.75548 13.7199 9.01545C12.9672 8.27946 11.938 7.8252 10.8023 7.8252C8.49709 7.8252 6.62842 9.69391 6.62842 11.9991C6.62842 14.3043 8.49714 16.173 10.8023 16.173C11.9381 16.173 12.9673 15.7187 13.7199 14.9827C13.2401 15.2428 12.6907 15.3904 12.1067 15.3904Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187548">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
