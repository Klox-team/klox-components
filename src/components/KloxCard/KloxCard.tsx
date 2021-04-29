import React from "react";

import { Card, Checkbox, Icon } from "@material-ui/core";

import { style } from "./KloxCard.style";
import { KloxIcon } from "../KloxIcon/KloxIcon";
import { KloxCheckBox } from "../KloxCheckBox/KloxCheckBox";

export interface KloxCardProps {
  /**
   * Is check box checked ?
   */
  checked: boolean;
  /**
   * Card icon
   */
  icon: React.Component;
  /**
   * Card icon color
   */
  iconColor: string;
  /**
   * Card label
   */
  label: string;
  /**
   *  Color applied to background of top side element
   */
  topColor: string;
  /**
   *  Color applied to background of bot side element
   */
  botColor: string;
  /**
   * Color applied to label text
   */
  color: string;
  /**
   * Optional click handler
   */
  onChange?: () => void;
}

/**
 * Klox contained button
 */

export const KloxCard = (props: KloxCardProps) => {
  const { label, checked, icon, iconColor, onChange } = props;

  const classes = style(props);

  return (
    <Card className={classes.card} raised>
      <div className={classes.checkBoxContainer}>
        <KloxCheckBox checked={checked} onChange={onChange} />
      </div>
      <div className={classes.iconContainer}>
        <KloxIcon
          icon={icon}
          color={iconColor}
          style={{ position: "absolute", bottom: "-60%", marginLeft: "16px" }}
        />
      </div>
      <div className={classes.label}>{label}</div>
    </Card>
  );
};

KloxCard.defaultProps = {
  label: "Default",
  checked: false,
  topColor: "#27D6BC1A",
  botColor: "#FFFF",
  color: "#07003B",
};
