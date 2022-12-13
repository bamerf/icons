import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const IO = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4430_187462)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M21.9999 13.4357C20.9999 13.4357 20.9999 12.5214 19.9998 12.5214C18.9999 12.5214 18.9999 13.4357 17.9999 13.4357C17 13.4357 16.9999 12.5214 16 12.5214C15 12.5214 15 13.4357 14 13.4357C13 13.4357 12.9999 12.5214 11.9998 12.5214C10.9998 12.5214 10.9998 13.4357 9.99991 13.4357C9.00006 13.4357 9.00006 12.5214 8.00008 12.5214C7 12.5214 7 13.4357 5.99992 13.4357C4.99984 13.4357 4.99984 12.5214 3.99977 12.5214C2.99992 12.5214 2.99992 13.4357 1.99994 13.4357C1.00534 13.4357 0.999578 12.5314 0.015625 12.5218C0.0433281 13.0706 0.108859 13.6096 0.207953 14.1366C1.00502 14.2536 1.07481 15.0357 2.00003 15.0357C3.00002 15.0357 3.00002 14.1214 3.99986 14.1214C4.99994 14.1214 4.99994 15.0357 6.00002 15.0357C7.00009 15.0357 7.00009 14.1214 8.00017 14.1214C9.00016 14.1214 9.00016 15.0357 10 15.0357C11 15.0357 11 14.1214 11.9999 14.1214C13 14.1214 13 15.0357 14.0001 15.0357C15.0002 15.0357 15.0002 14.1214 16.0001 14.1214C17.0001 14.1214 17.0001 15.0357 18 15.0357C19 15.0357 19 14.1214 19.9999 14.1214C21 14.1214 21 15.0357 22 15.0357C22.9252 15.0357 22.995 14.2537 23.7921 14.1366C23.8913 13.6095 23.9567 13.0707 23.9845 12.5218C23.0004 12.5315 22.9945 13.4357 21.9999 13.4357Z"
        fill="#0052B4"
      />
      <path
        d="M19.9998 15.6514C18.9998 15.6514 18.9998 16.5657 17.9999 16.5657C16.9999 16.5657 16.9999 15.6514 15.9999 15.6514C15 15.6514 15 16.5657 13.9999 16.5657C12.9998 16.5657 12.9998 15.6514 11.9998 15.6514C10.9998 15.6514 10.9998 16.5657 9.99985 16.5657C9 16.5657 9 15.6514 8.00002 15.6514C6.99994 15.6514 6.99994 16.5657 5.99986 16.5657C4.99978 16.5657 4.99978 15.6514 3.99971 15.6514C2.99986 15.6514 2.99986 16.5657 1.99988 16.5657C1.26324 16.5657 1.06875 16.0699 0.617676 15.8087C0.890863 16.6252 1.24969 17.4023 1.68305 18.13C1.77689 18.1527 1.88124 18.1657 1.99983 18.1657C2.99982 18.1657 2.99982 17.2515 3.99966 17.2515C4.99974 17.2515 4.99974 18.1657 5.99982 18.1657C6.99989 18.1657 6.99989 17.2515 7.99997 17.2515C8.99996 17.2515 8.99996 18.1657 9.9998 18.1657C10.9998 18.1657 10.9998 17.2515 11.9997 17.2515C12.9998 17.2515 12.9998 18.1657 13.9999 18.1657C15 18.1657 15 17.2515 15.9999 17.2515C16.9999 17.2515 16.9999 18.1657 17.9998 18.1657C18.9998 18.1657 18.9998 17.2515 19.9997 17.2515C20.9998 17.2515 20.9998 18.1657 21.9998 18.1657C22.1184 18.1657 22.2229 18.1527 22.3168 18.13C22.7502 17.4023 23.109 16.6252 23.3821 15.8087C22.931 16.0699 22.7365 16.5658 21.9998 16.5658C20.9999 16.5657 20.9999 15.6514 19.9998 15.6514Z"
        fill="#0052B4"
      />
      <path
        d="M23.7211 9.4194C22.9902 9.57113 22.897 10.3059 22.0002 10.3059C21.0002 10.3059 21.0002 9.3916 20.0002 9.3916C19.0002 9.3916 19.0002 10.3059 18.0002 10.3059C17.0003 10.3059 17.0003 9.3916 16.0003 9.3916C15.0003 9.3916 15.0003 10.3059 14.0003 10.3059C13.0003 10.3059 13.0002 9.3916 12.0001 9.3916C11.4598 9.3916 11.2114 9.65851 10.9395 9.90394V11.5039C11.2114 11.2585 11.4598 10.9917 12.0001 10.9917C13.0002 10.9917 13.0002 11.9059 14.0003 11.9059C15.0004 11.9059 15.0004 10.9917 16.0003 10.9917C17.0003 10.9917 17.0003 11.9059 18.0002 11.9059C19.0002 11.9059 19.0002 10.9917 20.0002 10.9917C21.0002 10.9917 21.0002 11.9059 22.0002 11.9059C22.9254 11.9059 22.9952 11.124 23.7923 11.0069C23.8434 11.0069 23.9005 11.0063 23.959 11.0056C23.9147 10.466 23.8345 9.93647 23.7211 9.4194Z"
        fill="#0052B4"
      />
      <path
        d="M22.8445 6.85721C22.6373 7.03126 22.3978 7.17582 22.0002 7.17582C21.0002 7.17582 21.0002 6.26147 20.0002 6.26147C19.0002 6.26147 19.0002 7.17582 18.0002 7.17582C17.0003 7.17582 17.0003 6.26147 16.0003 6.26147C15.0003 6.26147 15.0003 7.17582 14.0003 7.17582C13.0003 7.17582 13.0002 6.26147 12.0001 6.26147C11.4598 6.26147 11.2114 6.52838 10.9395 6.77382V8.3738C11.2114 8.12841 11.4598 7.86155 12.0001 7.86155C13.0002 7.86155 13.0002 8.7758 14.0003 8.7758C15.0003 8.7758 15.0003 7.86155 16.0003 7.86155C17.0003 7.86155 17.0003 8.7758 18.0002 8.7758C19.0001 8.7758 19.0001 7.86155 20.0001 7.86155C21.0002 7.86155 21.0002 8.7758 22.0001 8.7758C22.7097 8.7758 22.9164 8.31619 23.3335 8.04891C23.1914 7.64124 23.0281 7.24351 22.8445 6.85721Z"
        fill="#0052B4"
      />
      <path
        d="M20.0851 3.13256C20.0574 3.13106 20.0291 3.13013 19.9997 3.13013C18.9997 3.13013 18.9997 4.04447 17.9998 4.04447C16.9998 4.04447 16.9998 3.13013 15.9999 3.13013C14.9999 3.13013 14.9999 4.04447 13.9998 4.04447C12.9997 4.04447 12.9997 3.13013 11.9997 3.13013C11.4593 3.13013 11.2109 3.39703 10.939 3.64247V5.24246C11.2109 4.99707 11.4593 4.73021 11.9997 4.73021C12.9997 4.73021 12.9997 5.64446 13.9998 5.64446C14.9999 5.64446 14.9999 4.73021 15.9998 4.73021C16.9998 4.73021 16.9998 5.64446 17.9997 5.64446C18.9997 5.64446 18.9997 4.73021 19.9997 4.73021C20.9997 4.73021 20.9997 5.64446 21.9997 5.64446C22.0613 5.64446 22.1188 5.6408 22.1733 5.63429C21.5924 4.70785 20.8891 3.86611 20.0851 3.13256Z"
        fill="#0052B4"
      />
      <path
        d="M15.0673 0.396188C14.7928 0.643125 14.5448 0.914344 14.0001 0.914344C13.0001 0.914344 13.0001 9.375e-05 12 0H11.9998C11.4827 4.6875e-05 11.2331 0.244594 10.9741 0.480797V2.08083C11.233 1.84463 11.4828 1.60003 12 1.60003C13.0001 1.60003 13.0001 2.51428 14.0002 2.51428C15.0002 2.51428 15.0002 1.60003 16.0002 1.60003C17.0002 1.60003 17.0002 2.51428 18.0001 2.51428C18.4197 2.51428 18.6631 2.35322 18.8783 2.16637C17.7376 1.36692 16.4514 0.761016 15.0673 0.396188Z"
        fill="#0052B4"
      />
      <path
        d="M14.0003 22.8272C13.0002 22.8272 13.0002 21.9129 12.0001 21.9129C11.0002 21.9129 11.0002 22.8272 10.0002 22.8272C9.00037 22.8272 9.00037 21.9129 8.00038 21.9129C7.2344 21.9129 7.05473 22.4489 6.56348 22.7C7.91817 23.3897 9.42131 23.8294 11.0122 23.9591C11.2583 23.7343 11.5082 23.5129 12.0001 23.5129C12.4922 23.5129 12.7421 23.7343 12.9882 23.9591C14.5792 23.8295 16.0824 23.3898 17.4372 22.7001C16.9458 22.449 16.7662 21.9128 16.0003 21.9128C15.0004 21.9129 15.0004 22.8272 14.0003 22.8272Z"
        fill="#0052B4"
      />
      <path
        d="M18.0003 19.6975C17.0003 19.6975 17.0003 18.7832 16.0003 18.7832C15.0004 18.7832 15.0004 19.6975 14.0003 19.6975C13.0002 19.6975 13.0003 18.7832 12.0002 18.7832C11.0002 18.7832 11.0002 19.6975 10.0003 19.6975C9.00041 19.6975 9.00041 18.7832 8.00042 18.7832C7.00034 18.7832 7.00034 19.6975 6.00027 19.6975C5.00019 19.6975 5.00019 18.7832 4.00011 18.7832C3.281 18.7832 3.07906 19.2562 2.65039 19.5217C2.91908 19.8554 3.20473 20.1748 3.50703 20.4776C3.64245 20.4197 3.80136 20.3832 4.00006 20.3832C5.00014 20.3832 5.00014 21.2975 6.00022 21.2975C7.0003 21.2975 7.0003 20.3832 8.00038 20.3832C9.00036 20.3832 9.00036 21.2975 10.0002 21.2975C11.0002 21.2975 11.0002 20.3832 12.0001 20.3832C13.0002 20.3832 13.0002 21.2975 14.0003 21.2975C15.0004 21.2975 15.0004 20.3832 16.0003 20.3832C17.0002 20.3832 17.0003 21.2975 18.0002 21.2975C19.0002 21.2975 19.0002 20.3832 20.0001 20.3832C20.1991 20.3832 20.358 20.4197 20.4935 20.4777C20.7958 20.1748 21.0815 19.8554 21.3502 19.5218C20.9215 19.2563 20.7195 18.7832 20.0002 18.7832C19.0002 18.7832 19.0002 19.6975 18.0003 19.6975Z"
        fill="#0052B4"
      />
      <path
        d="M11.9673 11.9991H11.9995C11.9995 11.9883 11.9995 11.9778 11.9995 11.9669C11.9887 11.9777 11.978 11.9884 11.9673 11.9991Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.9996 6.26147V9.78707L7.82568 5.73975L11.9996 6.26147Z"
        fill="#0052B4"
      />
      <path
        d="M6.26053 12.0005H9.786L6.26049 7.30481L5.73877 10.957L6.26053 12.0005Z"
        fill="#0052B4"
      />
      <path
        d="M12 6.26086C12 4.14937 12 2.76586 12 0H11.998C5.3715 0.001125 0 5.37323 0 12H6.2609V8.47448L9.78637 12H11.9679C11.9786 11.9893 11.9893 11.9786 12 11.9679C12 11.1594 12 10.4381 12 9.78647L8.47443 6.26086H12Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.07124 1.56421C4.19441 2.63291 2.63413 4.19319 1.56543 6.07002V11.999H4.69588V4.69476V4.69466H12.0002C12.0002 3.70733 12.0002 2.76674 12.0002 1.56421H6.07124Z"
        fill="#D80027"
      />
      <path
        d="M11.9999 10.5234L7.73637 6.26001H6.26074V6.2601L11.9998 11.9991H11.9999C11.9999 11.9991 11.9999 10.9816 11.9999 10.5234Z"
        fill="#D80027"
      />
      <path
        d="M15.6519 6.26099H20.3475L17.9997 8.60882L15.6519 6.26099Z"
        fill="#6DA544"
      />
      <path d="M18.522 8.08643H17.4785V10.956H18.522V8.08643Z" fill="#A2001D" />
      <path
        d="M18.521 15.6519H17.4775V18.5214H18.521V15.6519Z"
        fill="#A2001D"
      />
      <path
        d="M21.1305 14.0874C21.1305 13.2229 20.4297 12.5222 19.5653 12.5222C19.1643 12.5222 18.7988 12.6731 18.5218 12.921V12.0004H19.0435V10.9569H18.5218V10.4352H17.4783V10.9569H16.9566V12.0004H17.4783V12.921C17.2013 12.6731 16.8358 12.5222 16.4348 12.5222C15.5704 12.5222 14.8696 13.2229 14.8696 14.0874C14.8696 14.5508 15.0712 14.9671 15.3913 15.2537V16.1743H20.6087V15.2537C20.9289 14.9671 21.1305 14.5508 21.1305 14.0874Z"
        fill="#FFDA44"
      />
      <path
        d="M19.5647 13.5649C19.4001 13.5649 19.2849 13.6372 19.2172 13.6978L18.5212 14.3208H17.4778L16.7818 13.6978C16.7141 13.6372 16.5989 13.5649 16.4343 13.5649C16.1466 13.5649 15.9126 13.799 15.9126 14.0867C15.9126 14.2893 16.0219 14.4173 16.087 14.4757L16.4344 14.7867V15.1301H19.5648V14.7867L19.9122 14.4757C19.9773 14.4174 20.0866 14.2893 20.0866 14.0867C20.0865 13.799 19.8524 13.5649 19.5647 13.5649Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187462">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default IO;
