import React from "react";

import { Button } from "@material-ui/core";

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
    <Button onClick={onClick} disabled={disabled} className={classes.container}>
      <p className={classes.buttonLabel}>{label}</p>
    </Button>
  );
};

KloxButton.defaultProps = {
  label: "Default",
};
