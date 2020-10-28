import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SimplePage, IPage } from './page';

export default {
  title: 'PGAPP/Page',
  component: SimplePage,
  argtypes: {

  }
} as Meta;

const Template: Story<IPage> = (args) => <SimplePage {...args} />;

export const Default = Template.bind({});
Default.args = {

}