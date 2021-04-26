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
