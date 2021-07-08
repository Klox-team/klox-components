import React from "react";

import { Card } from "@material-ui/core";

import { style } from "./KloxCheckCard.style";
import { KloxIcon } from "../KloxIcon/KloxIcon";
import { KloxCheckBox } from "../KloxCheckBox/KloxCheckBox";

export interface KloxCheckCardProps {
  /**
   * Is check box checked ?
   */
  checked: boolean;
  /**
   * Optionnal card icon
   */
  icon?: React.Component;
  /**
   * Card icon color
   */
  iconColor?: string;
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

export const KloxCheckCard = (props: KloxCheckCardProps) => {
  const { label, checked, icon, iconColor, onChange } = props;

  const classes = style(props);

  return (
    <Card className={classes.card} raised>
      <div className={classes.checkBoxContainer}>
        <KloxCheckBox checked={checked} onChange={onChange} />
      </div>
      <div className={classes.iconContainer}>
        {icon && (
          <KloxIcon
            icon={icon}
            color={iconColor}
            style={{ position: "absolute", bottom: "-60%", marginLeft: "16px" }}
          />
        )}
      </div>
      <div className={classes.label}>{label}</div>
    </Card>
  );
};

KloxCheckCard.defaultProps = {
  label: "Default",
  checked: false,
  topColor: "#FFFF",
  botColor: "#FFFF",
  color: "#07003B",
};
