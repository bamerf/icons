import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseIcon, CountryIcon } from './Icon';
import * as BaseIconsNames from './base';
import * as CountryIconNames from './country';

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
};

CountryIcons.argTypes = {
  name: {
    options: Object.keys(CountryIconNames),
    control: { type: 'select' },
  },
};
