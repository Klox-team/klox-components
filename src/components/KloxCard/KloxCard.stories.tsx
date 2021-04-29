import React from "react";

import { KloxCard, KloxCardProps } from "./KloxCard";

export default {
  title: "Components/Klox Card",
  component: KloxCard,
  argTypes: {},
};

const Template = (args: KloxCardProps) => {
  return <KloxCard {...args} />;
};

export const Default = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};
