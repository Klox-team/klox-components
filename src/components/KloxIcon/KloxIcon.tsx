import React from "react";

import {} from "@material-ui/core";

import { iconStyle } from "./KloxIcon.style";
import { CSSProperties } from "@material-ui/styles";

export interface KloxIconProps {
  /**
   * Is this icon wrapped with rounded div, default true
   */
  rounded: boolean;
  /**
   * Icon icon
   */
  icon: React.Component;
  /**
   * Icon color, default none
   */
  color: string;
  /**
   * Background color, default white
   */
  backgroundColor: string;
  /**
   * Style injection
   */
  style?: CSSProperties;
}

/**
 * Klox icon
 */

export const KloxIcon = (props: KloxIconProps) => {
  const { icon } = props;

  const classes = iconStyle(props);

  return <div className={classes.iconButton}>{icon}</div>;
};

KloxIcon.defaultProps = {
  label: "Default",
  rounded: true,
  backgroundColor: "#FFFF",
  color: "none",
};
