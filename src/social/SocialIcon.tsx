import type { FC } from 'react';
import { SocialProps } from '@/types';
import * as SocialIcons from '.';

const SocialIcon: FC<SocialProps> = ({ name, size }) => {
  const Component = SocialIcons[name];
  return <Component size={size} />;
};

export default SocialIcon;
