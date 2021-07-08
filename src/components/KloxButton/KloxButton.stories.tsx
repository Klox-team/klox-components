import React from "react";

import { KloxButton, KloxButtonProps } from "./KloxButton";

export default {
  title: "Components/Klox Button",
  component: KloxButton,
  argTypes: {},
};

const Template = (args: KloxButtonProps) => {
  return <KloxButton {...args} />;
};

export const Default = Template.bind({});

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
  label: "Filled",
};

export const NotFilled = Template.bind({});
NotFilled.args = {
  filled: false,
  label: "Not filled",
};

export const Disabled = Template.bind({});
Disabled.args = {
  filled: false,
  label: "Disabled",
  disabled: true,
};

export const WithWidth = Template.bind({});
WithWidth.args = {
  filled: false,
  label: "Custom width",
  width: "200px",
};

export const WithHeight = Template.bind({});
WithHeight.args = {
  filled: false,
  label: "Custom height",
  height: "100px",
};

export const CustomWitdthHeight = Template.bind({});
CustomWitdthHeight.args = {
  filled: false,
  label: "Custom width/height",
  width: "200px",
  height: "60px",
};
