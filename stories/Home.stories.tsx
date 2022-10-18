import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from '../pages/index';
import '../styles/globals.css';

export default {
  title: "pages/Home",
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const PageOne = Template.bind({});


