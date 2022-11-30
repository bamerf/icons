import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  BaseIcon,
  CountryIcon,
  BrowserIcon,
  SocialIcon,
  MessengerIcon,
} from './Icon';
import * as BaseIconsNames from './base';
import * as CountryIconNames from './country';
import * as BrowserIconNames from './browser';
import * as SocialIconNames from './social';
import * as MessengerIconNames from './messenger';

export default {
  title: 'Bamerf/Icon',
  component: BaseIcon,
} as ComponentMeta<typeof BaseIcon>;

const BaseTemplate: ComponentStory<typeof BaseIcon> = (args) => (
  <BaseIcon {...args} />
);

export const BaseIcons = BaseTemplate.bind({});
BaseIcons.args = {
  name: 'Activity',
  size: 64,
  color: 'black',
};

BaseIcons.argTypes = {
  name: {
    options: Object.keys(BaseIconsNames),
    control: { type: 'select' },
  },
};

const CountryTemplate: ComponentStory<typeof CountryIcon> = (args) => (
  <CountryIcon {...args} />
);

export const CountryIcons = CountryTemplate.bind({});
CountryIcons.args = {
  name: 'AF',
  size: 64,
};

CountryIcons.argTypes = {
  name: {
    options: Object.keys(CountryIconNames),
    control: { type: 'select' },
  },
};

const BrowserTemplate: ComponentStory<typeof BrowserIcon> = (args) => (
  <BrowserIcon {...args} />
);

export const BrowserIcons = BrowserTemplate.bind({});
BrowserIcons.args = {
  name: 'FireFox',
  size: 64,
};

BrowserIcons.argTypes = {
  name: {
    options: Object.keys(BrowserIconNames),
    control: { type: 'select' },
  },
};

const SocialTemplate: ComponentStory<typeof SocialIcon> = (args) => (
  <SocialIcon {...args} />
);

export const SocialIcons = SocialTemplate.bind({});
SocialIcons.args = {
  name: 'Facebook',
  size: 64,
};

SocialIcons.argTypes = {
  name: {
    options: Object.keys(SocialIconNames),
    control: { type: 'select' },
  },
};

const MessengerTemplate: ComponentStory<typeof MessengerIcon> = (args) => (
  <MessengerIcon {...args} />
);

export const MessengerIcons = MessengerTemplate.bind({});
MessengerIcons.args = {
  name: 'Telegram',
  size: 64,
};

MessengerIcons.argTypes = {
  name: {
    options: Object.keys(MessengerIconNames),
    control: { type: 'select' },
  },
};
