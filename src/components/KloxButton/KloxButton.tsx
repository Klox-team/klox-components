import React from "react";

import { Button, Typography } from "@material-ui/core";

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
   * Optional width css property value in px
   */
  width?: string;
  /**
   * Optional height css property value in px
   */
  height?: string;
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
    width: props.width ? props.width : "92px",
    height: props.height ? props.height : "42px",
  });

  return (
    <Button onClick={onClick} disabled={disabled} className={classes.container}>
      <Typography className={classes.buttonLabel}>{label}</Typography>
    </Button>
  );
};

KloxButton.defaultProps = {
  label: "Default",
};
