import { Typography } from "@material-ui/core";
import React from "react";

import { style } from "./ButtonPanelSelection.style";

export interface ButtonPanelSelectionProps {
  /**
   * Panel label
   */
  label?: string;
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
  onClick: (option: string) => void;
}

/**
 * Klox button panel selection
 */

export const ButtonPanelSelection = (props: ButtonPanelSelectionProps) => {
  const classes = style(props);

  const { label, selected, selection, onClick } = props;

  return (
    <div className={classes.panelContainer}>
      {label && <div className={classes.panelTitle}>{label}</div>}
      <div className={classes.selectionContainer}>
        {selection.map((option, index) => {
          return (
            <div
              key={option + index}
              onClick={() => onClick(option)}
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
  selection: [
    "Default Component",
    "Default Component 1",
    "Default Component 2",
  ],
  selected: ["Default Component 2"],
  onClick: (e) => {
    console.log(e);
  },
};
