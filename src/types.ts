import type * as BaseIcons from './base';
import type * as CountryIcons from './country';

export type BaseIconsNames = keyof typeof BaseIcons;
export type CountryIconNames = keyof typeof CountryIcons;

export interface CommonProps {
  size?: number;
  color?: string;
}

export interface CountryProps {
  size?: number;
}

export interface BaseIconProps extends CommonProps {
  name: BaseIconsNames;
}

export interface CountryIconProps extends CountryProps {
  name: CountryIconNames;
}
