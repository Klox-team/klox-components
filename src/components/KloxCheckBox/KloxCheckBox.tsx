import React from "react";

import { IconButton } from "@material-ui/core";
import { style } from "./KloxCheckBox.style";
import CheckIcon from "@material-ui/icons/Check";

export interface KloxCheckBoxProps {
  /**
   * Is this check box checked ?
   */
  checked: boolean;
  /**
   * Optional change handler
   */
  onChange?: () => void;
}

/**
 * Klox check box
 */

export const KloxCheckBox = (props: KloxCheckBoxProps) => {
  const { checked, onChange } = props;

  const classes = style(props);

  return (
    <IconButton>
      <div onClick={onChange} className={classes.checkBox}>
        {checked && <CheckIcon />}
      </div>
    </IconButton>
  );
};

KloxCheckBox.defaultProps = {
  checked: false,
};
