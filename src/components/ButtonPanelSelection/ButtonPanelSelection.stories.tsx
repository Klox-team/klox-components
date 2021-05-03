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
