import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Go = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.1177 14.0445C17.7408 14.1499 17.3586 14.2568 16.9162 14.3771C16.7001 14.4383 16.6509 14.4521 16.4498 14.2077C16.2086 13.9197 16.0317 13.7333 15.6939 13.5639C14.6807 13.0387 13.6996 13.1912 12.7829 13.818C11.6893 14.5635 11.1264 15.6647 11.1425 17.037C11.1585 18.3923 12.0431 19.5105 13.3137 19.6969C14.4073 19.8494 15.324 19.4427 16.0477 18.5787C16.1924 18.3924 16.3212 18.1889 16.482 17.9519H13.378C13.0402 17.9519 12.9598 17.7316 13.0724 17.4436C13.2815 16.9184 13.6675 16.0374 13.8926 15.5969C13.9409 15.4953 14.0535 15.3258 14.2947 15.3258H19.4702C19.7027 14.5498 20.0799 13.8166 20.5831 13.1228C21.7572 11.4964 23.1725 10.6493 25.0863 10.2935C26.7268 9.98855 28.2707 10.158 29.6699 11.1575C30.9405 12.0724 31.7285 13.3092 31.9376 14.9356C32.211 17.2228 31.5838 19.0864 30.0881 20.6789C29.0266 21.8141 27.7239 22.5256 26.2282 22.8475C25.9429 22.9032 25.6576 22.9296 25.3768 22.9556C25.2303 22.9691 25.085 22.9826 24.9416 23C23.478 22.9661 22.1432 22.5256 21.0173 21.5091C20.2256 20.7882 19.6803 19.9022 19.4092 18.8707C19.2211 19.2709 18.9962 19.6542 18.7336 20.0188C17.5756 21.6283 16.0638 22.6278 14.15 22.8989C12.5738 23.1192 11.1103 22.7973 9.82366 21.7807C8.63353 20.832 7.95805 19.5783 7.78114 18.0196C7.57206 16.1729 8.08671 14.5126 9.14818 13.0556C10.2901 11.48 11.8019 10.4804 13.6514 10.1247C15.1632 9.83664 16.6106 10.023 17.9134 10.9548C18.7657 11.5478 19.3769 12.361 19.779 13.3436C19.8755 13.4961 19.8111 13.5808 19.6181 13.6316C19.0545 13.7824 18.5903 13.9123 18.1177 14.0445ZM28.7581 15.9742C28.7613 16.0311 28.7646 16.0911 28.7693 16.1554C28.6889 17.6124 27.9973 18.6967 26.7268 19.3914C25.8744 19.8488 24.9898 19.8996 24.1053 19.493C22.9473 18.9509 22.3361 17.6124 22.6256 16.291C22.9795 14.6984 23.9444 13.6988 25.4401 13.3431C26.968 12.9703 28.4316 13.9191 28.7211 15.5963C28.7438 15.7163 28.7505 15.8362 28.7581 15.9742Z"
      fill="#00ACD7"
    />
    <path
      d="M2.44461 13.852C2.41244 13.9028 2.42852 13.9367 2.49285 13.9367L7.2826 13.9536C7.33085 13.9536 7.41126 13.9028 7.44343 13.852L7.71684 13.4115C7.749 13.3606 7.73292 13.3098 7.66859 13.3098H2.95926C2.89493 13.3098 2.81451 13.3437 2.78235 13.3945L2.44461 13.852Z"
      fill="#00ACD7"
    />
    <path
      d="M0.0160829 15.4105C-0.0160829 15.4614 7.45058e-09 15.4953 0.0643316 15.4953L6.63928 15.4783C6.70361 15.4783 6.76794 15.4444 6.78402 15.3767L6.91269 14.9701C6.92877 14.9192 6.8966 14.8684 6.83227 14.8684H0.530735C0.466404 14.8684 0.385989 14.9023 0.353823 14.9531L0.0160829 15.4105Z"
      fill="#00ACD7"
    />
    <path
      d="M3.90813 16.9523C3.87596 17.0032 3.89204 17.054 3.95638 17.054L6.43019 17.0709C6.47843 17.0709 6.54277 17.0201 6.54277 16.9523L6.57493 16.5457C6.57493 16.478 6.54277 16.4271 6.47843 16.4271H4.29412C4.22978 16.4271 4.16545 16.478 4.13329 16.5288L3.90813 16.9523Z"
      fill="#00ACD7"
    />
  </svg>
));

export default Go;
