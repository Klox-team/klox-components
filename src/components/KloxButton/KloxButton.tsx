import React from "react";
import "./KloxButton.style";

import { Button as MaterialButton, Typography } from "@material-ui/core";

import { style } from "./KloxButton.style";

export interface KloxButtonProps {
  /**
   * Is this button filled ?
   */
  filled: boolean;
  /**
   * Is this button disabled ?
   */
  disabled: boolean;
  /**
   * Button content
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick: () => void;
}

/**
 * Klox contained button
 */

export const KloxButton = (props: KloxButtonProps) => {
  const { disabled, label, onClick } = props;

  const classes = style({
    disabled: props.disabled ? "disabled" : "false",
    filled: props.filled && !props.disabled ? "filled" : "false",
  });

  return (
    <MaterialButton
      onClick={onClick}
      disabled={disabled}
      className={classes.container}
    >
      <Typography className={classes.buttonLabel}>{label}</Typography>
    </MaterialButton>
  );
};

KloxButton.defaultProps = {
  label: "Default",
};
