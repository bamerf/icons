import type * as BaseIcons from './base';
import type * as CountryIcons from './country';
import type * as BrowserIcons from './browser';
import type * as SocialIcons from './social';
import type * as MessengerIcons from './messenger';

export type BaseIconsNames = keyof typeof BaseIcons;
export type CountryIconNames = keyof typeof CountryIcons;
export type BrowserIconNames = keyof typeof BrowserIcons;
export type SocialIconNames = keyof typeof SocialIcons;
export type MessengerIconNames = keyof typeof MessengerIcons;

export interface CommonProps {
  size?: number;
}

export interface BaseIconProps extends CommonProps {
  color?: string;
}

export interface BaseProps extends BaseIconProps {
  name: BaseIconsNames;
}

export interface CountryProps extends CommonProps {
  name: CountryIconNames;
}

export interface BrowserProps extends CommonProps {
  name: BrowserIconNames;
}

export interface SocialProps extends CommonProps {
  name: SocialIconNames;
}

export interface MessengerProps extends CommonProps {
  name: MessengerIconNames;
}
