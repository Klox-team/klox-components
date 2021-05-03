import { Typography } from "@material-ui/core";
import React from "react";

import { style } from "./ButtonPanelSelection.style";

export interface ButtonPanelSelectionProps {
  /**
   * Panel title
   */
  title: string;
  /**
   * Panel selection
   */
  selection: Array<string>;
  /**
   * Panel selected option
   */
  selected: Array<string>;
  /**
   * Optionnal onClick handler
   */
  onClick: (e: React.MouseEvent) => void;
}

/**
 * Klox button panel selection
 */

export const ButtonPanelSelection = (props: ButtonPanelSelectionProps) => {
  const classes = style(props);

  const { title, selected, selection, onClick } = props;

  return (
    <div className={classes.panelContainer}>
      <div className={classes.panelTitle}>{title}</div>
      <div className={classes.selectionContainer}>
        {selection.map((option, index) => {
          return (
            <div
              key={option + index}
              onClick={onClick}
              className={
                selected.find((s) => s === option)
                  ? classes.selected
                  : classes.selection
              }
            >
              <p className={classes.optionName}>{option}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ButtonPanelSelection.defaultProps = {
  title: "Default",
  selection: ["Default", "Default 1", "Default 2"],
  selected: ["Default 2"],
  onClick: (e) => {
    console.log(e);
  },
};
