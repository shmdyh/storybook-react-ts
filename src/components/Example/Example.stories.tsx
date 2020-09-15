import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from "@storybook/addon-actions";
import { Example, ExampleProps } from './Example';

export default {
  title: 'Test/ExButton',
  component: Example,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ExampleProps> = (args) => <Example {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "あああ",
  flag: true,
  action: action("ポッチットな")
};
