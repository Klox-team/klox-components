import React from "react";

import { ButtonTypescript } from "./ButtonTypescript";

export default {
  title: "Components/ButtonTypescript",
  component: ButtonTypescript,
  argTypes: {},
};

const Template = (args) => {
  return <ButtonTypescript {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Secondary",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Disabled",
};

export const CustomProps = Template.bind({});
CustomProps.args = {
  style: { backgroundColor: "green" },
  label: "Background color green",
};
