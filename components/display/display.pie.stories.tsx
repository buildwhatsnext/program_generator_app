import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ProgrammedSpaceDisplay, PieProps } from './display.pie';

export default {
  title: 'PGAPP/Pie',
  component: ProgrammedSpaceDisplay,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as Meta;

const Template: Story<PieProps> = (args) => <ProgrammedSpaceDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'red'
};
