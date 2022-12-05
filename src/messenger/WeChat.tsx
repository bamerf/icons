import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const WeChat = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0079 5.00121C6.54191 4.92086 2 8.83967 2 13.4615C2 16.1293 3.28609 18.4438 5.77559 20.143C5.77559 20.143 4.86319 23.0808 4.87616 23.1397C4.88914 23.1987 5.08772 23.3144 5.15683 23.2766C5.22593 23.2388 8.45508 21.3599 8.45508 21.3599C10.7693 22.135 12.1809 21.9443 12.4219 21.9117C12.4386 21.9095 12.4497 21.908 12.4551 21.9076C12.2081 21.2021 12.0462 20.1035 12.2305 19.068C13.1953 13.6488 18.8821 11.9631 21.9989 12.251C21.1382 8.33736 17.3998 5.08043 12.0079 5.00121ZM8.20869 9.44921C7.49165 9.44921 6.9105 10.0164 6.9105 10.7161C6.9105 11.4158 7.49165 11.983 8.20869 11.983C8.92572 11.983 9.50702 11.4158 9.50702 10.7161C9.50702 10.0164 8.92572 9.44921 8.20869 9.44921ZM16.0682 9.44921C15.3513 9.44921 14.7701 10.0164 14.7701 10.7161C14.7701 11.4158 15.3513 11.983 16.0682 11.983C16.7853 11.983 17.3666 11.4158 17.3666 10.7161C17.3666 10.0164 16.7854 9.44921 16.0682 9.44921Z"
      fill="#31CE6F"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M30 19.8925C30 15.9331 26.0754 12.9003 21.5224 12.9003C16.7016 12.9003 12.8566 16.0016 12.8566 19.9608C12.8566 23.9273 16.5138 27.2109 21.5279 27.2378C22.5372 27.2433 24.0403 26.9902 25.0539 26.5771C25.0539 26.5771 27.477 28.0105 27.6127 27.9999C27.7483 27.9893 27.8178 27.8845 27.8232 27.7946C27.8286 27.7047 27.0512 25.4673 27.0512 25.4673C29.1318 23.8776 30 22.1259 30 19.8925ZM18.3494 16.1855C17.715 16.1855 17.2008 16.6881 17.2008 17.3083C17.2008 17.9282 17.715 18.431 18.3494 18.431C18.9838 18.431 19.498 17.9284 19.498 17.3083C19.498 16.6881 18.9838 16.1855 18.3494 16.1855ZM24.4913 16.1855C23.8569 16.1855 23.3427 16.6881 23.3427 17.3083C23.3427 17.9282 23.8569 18.431 24.4913 18.431C25.1258 18.431 25.64 17.9284 25.64 17.3083C25.64 16.6881 25.1258 16.1855 24.4913 16.1855Z"
      fill="#31CE6F"
    />
  </svg>
));

export default WeChat;
