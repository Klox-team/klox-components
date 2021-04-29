import React from "react";

import { Card } from "@material-ui/core";

import { style } from "./KloxCard.style";

export interface KloxCardProps {
  /**
   * Is this card selected ?
   */
  selected: boolean;
  /**
   * Card label
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Klox contained button
 */

export const KloxCard = (props: KloxCardProps) => {
  const { label, onClick } = props;

  const classes = style(props);

  return (
    <Card raised onClick={onClick} className={classes.card}>
      <p className={classes.label}>{label}</p>
    </Card>
  );
};

KloxCard.defaultProps = {
  label: "Default",
  selected: false,
};
