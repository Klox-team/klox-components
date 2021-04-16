import React from "react";
import { Button as MaterialButton } from "@material-ui/core";

interface Props {
  /**
   * Material ui default colors theme for button
   */
  color: "primary" | "secondary" | "inherit" | "default";
  /**
   * Is this button disabled ?
   */
  disabled: boolean;
  /**
   * How large should the button be?
   */
  size: "small" | "medium" | "large";
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

export const ButtonTypescript = (props: Props) => {
  const { color, disabled, size, label, onClick } = props;

  return (
    <MaterialButton
      variant="contained"
      color={color}
      disabled={disabled}
      size={size}
      onClick={() => onClick}
      {...props}
    >
      {label}
    </MaterialButton>
  );
};

ButtonTypescript.defaultProps = {
  color: "primary",
  disabled: false,
  size: "medium",
  onClick: undefined,
};
