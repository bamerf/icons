import type { FC } from 'react';
import type {
  BaseProps,
  CountryProps,
  BrowserProps,
  SocialProps,
  MessengerProps,
} from './types';
import * as BaseIcons from './base';
import * as CountryIcons from './country';
import * as BrowserIcons from './browser';
import * as SocialIcons from './social';
import * as MessengerIcons from './messenger';

export const BaseIcon: FC<BaseProps> = ({ name, size, color }) => {
  const Component = BaseIcons[name];
  return <Component size={size} color={color} />;
};

export const CountryIcon: FC<CountryProps> = ({ name, size }) => {
  const Component = CountryIcons[name];
  return <Component size={size} />;
};

export const BrowserIcon: FC<BrowserProps> = ({ name, size }) => {
  const Component = BrowserIcons[name];
  return <Component size={size} />;
};

export const SocialIcon: FC<SocialProps> = ({ name, size }) => {
  const Component = SocialIcons[name];
  return <Component size={size} />;
};

export const MessengerIcon: FC<MessengerProps> = ({ name, size }) => {
  const Component = MessengerIcons[name];
  return <Component size={size} />;
};
