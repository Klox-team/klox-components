import { makeStyles } from "@material-ui/core/styles";
import { KloxCheckBoxProps } from "./KloxCheckBox";

const commonLinearGradient = `linear-gradient(90deg, #27D6BD 0%, #35C7C5 26.56%, #46B4CE 51.04%, #4BAFD1 72.92%, #698EE2 90.62%, #896AF4 100%)`;

const checkBoxStyles = {
  checked: {
    width: "18px",
    height: "18px",
    background: commonLinearGradient,
    color: "white",
    border: "2px solid #FFFF",
  },
  default: {
    width: "12px",
    height: "12px",
    border: "3px solid #BEBCCB",
  },
};

export const style = makeStyles(() => {
  return {
    checkBox: (props: KloxCheckBoxProps) => {
      const checkBoxStyle = props.checked ? "checked" : "default";
      return {
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px",
        ...checkBoxStyles[checkBoxStyle],
      };
    },
  };
});
