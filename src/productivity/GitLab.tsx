import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const GitLab = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0083 29.665L21.5283 12.6763H10.4883L16.0083 29.665Z"
      fill="#E24329"
    />
    <path
      d="M16.0091 29.665L10.4891 12.6763H2.75293L16.0091 29.665Z"
      fill="#FC6D26"
    />
    <path
      d="M2.752 12.6763L1.07457 17.839C0.921574 18.3098 1.08915 18.8257 1.48972 19.1167L16.0081 29.665L2.752 12.6763Z"
      fill="#FCA326"
    />
    <path
      d="M2.75293 12.6763H10.4891L7.16436 2.44419C6.99336 1.91762 6.2485 1.91776 6.0775 2.44419L2.75293 12.6763Z"
      fill="#E24329"
    />
    <path
      d="M16.0098 29.665L21.5298 12.6763H29.2659L16.0098 29.665Z"
      fill="#FC6D26"
    />
    <path
      d="M29.2659 12.6763L30.9433 17.839C31.0963 18.3098 30.9288 18.8257 30.5282 19.1167L16.0098 29.665L29.2659 12.6763Z"
      fill="#FCA326"
    />
    <path
      d="M29.2654 12.6763H21.5293L24.854 2.44419C25.025 1.91762 25.7699 1.91776 25.9409 2.44419L29.2654 12.6763Z"
      fill="#E24329"
    />
  </svg>
));

export default GitLab;
