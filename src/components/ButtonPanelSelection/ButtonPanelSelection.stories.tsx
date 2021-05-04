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
  selection: ["With label selection", "With label 2"],
  selected: ["With label 2"],
};

export const ShortText = Template.bind({});
ShortText.args = {
  label: "Short text",
  selection: ["-18", "Tout", "18-25"],
  selected: ["Tout", "18-25"],
};

export const LongText = Template.bind({});
LongText.args = {
  label: "Long text",
  selection: ["THIS IS A LONG TEXT", "THIS IS AN EVEN LONGER LONG TEXT"],
  selected: ["THIS IS AN EVEN LONGER LONG TEXT"],
};
