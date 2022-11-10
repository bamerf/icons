import React from 'react';
import type { FC } from 'react';
import type { BaseIconProps, CountryIconProps } from './types';
import * as BaseIcons from './base';
import * as CountryIcons from './country';

export const BaseIcon: FC<BaseIconProps> = ({ name, size, color }) => {
  const Component = BaseIcons[name];
  return <Component size={size} color={color} />;
};

export const CountryIcon: FC<CountryIconProps> = ({ name, size }) => {
  const Component = CountryIcons[name];
  return <Component size={size} />;
};
