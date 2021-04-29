import React from "react";

import { KloxCard, KloxCardProps } from "./KloxCard";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

export default {
  title: "Components/Klox Card",
  component: KloxCard,
  argTypes: {},
};

const Template = (args: KloxCardProps) => {
  return <KloxCard {...args} />;
};

export const Default = Template.bind({});

export const topElementRedBackground = Template.bind({});
topElementRedBackground.args = {
  topColor: "red",
};

export const botElementRedBackground = Template.bind({});
botElementRedBackground.args = {
  botColor: "red",
};

export const CheckedCard = Template.bind({});
CheckedCard.args = {
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
};
