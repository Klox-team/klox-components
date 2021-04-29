import React from "react";

import { KloxCheckCard, KloxCheckCardProps } from "./KloxCheckCard";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

export default {
  title: "Components/Klox Check Card",
  component: KloxCheckCard,
  argTypes: {},
};

const Template = (args: KloxCheckCardProps) => {
  return <KloxCheckCard {...args} />;
};

export const Default = Template.bind({});

export const TopElementBackground = Template.bind({});
TopElementBackground.args = {
  topColor: "red",
};

export const BotElementBackground = Template.bind({});
BotElementBackground.args = {
  botColor: "red",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked",
  checked: true,
};

export const CheckedTwitterIconCard = Template.bind({});
CheckedTwitterIconCard.args = {
  label: "Twitter",
  icon: <TwitterIcon />,
  checked: true,
};

export const FacebookBlueIconCard = Template.bind({});
FacebookBlueIconCard.args = {
  label: "Facebook / Instagram",
  icon: <FacebookIcon />,
  iconColor: "blue",
  topColor: "blue",
};
