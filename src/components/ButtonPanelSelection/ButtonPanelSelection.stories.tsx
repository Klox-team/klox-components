import React from "react";

import {
  ButtonPanelSelection,
  ButtonPanelSelectionProps,
} from "./ButtonPanelSelection";

export default {
  title: "Components/Button Panel Selection",
  component: ButtonPanelSelection,
  argTypes: {},
};

const Template = (args: ButtonPanelSelectionProps) => {
  return <ButtonPanelSelection {...args} />;
};

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "With label",
  selection: ["With label selection", "With label 2 longer text button title"],
  selected: ["With label 2 longer text button title"],
};
