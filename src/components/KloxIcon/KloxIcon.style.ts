import { makeStyles } from "@material-ui/core/styles";
import { KloxIconProps } from "./KloxIcon";

const commonLinearGradient = `linear-gradient(90deg, #27D6BD 0%, #35C7C5 26.56%, #46B4CE 51.04%, #4BAFD1 72.92%, #698EE2 90.62%, #896AF4 100%)`;
const circularBorderLinearGradient = `linear-gradient(white, white), ${commonLinearGradient}`;

const roundedStyle = {
  true: {
    borderRadius: "50%",
    boxShadow: "0px 4px 4px 0px #00000040",
  },
  false: {},
};

export const iconStyle = makeStyles(() => {
  return {
    iconButton: (props: KloxIconProps) => {
      const rounded = props.rounded ? "true" : "false";
      return {
        width: "41px",
        height: "41px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: props.color,
        backgroundColor: props.backgroundColor,
        ...props.style,
        ...roundedStyle[rounded],
      };
    },
  };
});
