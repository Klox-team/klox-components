import React from "react";

import { KloxIcon, KloxIconProps } from "./KloxIcon";
import FacebookIcon from "@material-ui/icons/Facebook";

export default {
  title: "Components/Klox Icon",
  component: KloxIcon,
  argTypes: {},
};

const Template = (args: KloxIconProps) => {
  return <KloxIcon {...args} />;
};

export const Default = Template.bind({});

export const RedBackground = Template.bind({});
RedBackground.args = {
  backgroundColor: "red",
};

export const UnroundedFacebookIcon = Template.bind({});
UnroundedFacebookIcon.args = {
  rounded: false,
  icon: <FacebookIcon />,
};

export const RoundedBlueFacebookIcon = Template.bind({});
RoundedBlueFacebookIcon.args = {
  icon: <FacebookIcon />,
  color: "blue",
};
