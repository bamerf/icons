import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as SocialIconNames from '.';

import SocialIcon from './SocialIcon';

export default {
  title: 'Bamerf/SocialIcon',
  component: SocialIcon,
} as ComponentMeta<typeof SocialIcon>;

const SocialTemplate: ComponentStory<typeof SocialIcon> = (args) => (
  <SocialIcon {...args} />
);

export const SocialIcons = SocialTemplate.bind({});
SocialIcons.args = {
  name: 'ASKfm',
  size: 64,
};

SocialIcons.argTypes = {
  name: {
    options: Object.keys(SocialIconNames),
    control: { type: 'select' },
  },
};
