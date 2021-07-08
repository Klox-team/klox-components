import React from "react";

import { KloxCheckBox, KloxCheckBoxProps } from "./KloxCheckBox";

export default {
  title: "Components/Klox Check Box",
  component: KloxCheckBox,
  argTypes: {},
};

const Template = (args: KloxCheckBoxProps) => {
  return <KloxCheckBox {...args} />;
};

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
