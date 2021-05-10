import { Typography } from "@material-ui/core";
import React from "react";
import { JsxElement } from "typescript";

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
   * Optionnal array of icons related to panel options
   */
  icons: Array<React.Component>;
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

  const { label, selected, selection, icons, onClick } = props;

  return (
    <div className={classes.panelContainer}>
      {label && <div className={classes.panelTitle}>{label}</div>}
      <div className={classes.selectionContainer}>
        {selection.map((option, index) => {
          const Icon = icons && icons[index] ? icons[index] : <></>;
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
              {icons && icons[index] && (
                <div className={classes.iconContainer}>{icons[index]}</div>
              )}
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
