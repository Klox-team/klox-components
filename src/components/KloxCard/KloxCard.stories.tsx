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

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: (
    <div>
      <div style={{ marginTop: "1rem", backgroundColor: "red" }}>
        Children 1
      </div>
      <div style={{ marginTop: "1rem", backgroundColor: "green" }}>
        Children 2
      </div>
      <div style={{ marginTop: "1rem", backgroundColor: "blue" }}>
        Children 3
      </div>
    </div>
  ),
};
