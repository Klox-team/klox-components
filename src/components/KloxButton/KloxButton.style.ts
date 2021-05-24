import { makeStyles } from "@material-ui/core/styles";

const commonLinearGradient = `linear-gradient(90deg, #27D6BD 0%, #35C7C5 26.56%, #46B4CE 51.04%, #4BAFD1 72.92%, #698EE2 90.62%, #896AF4 100%)`;
const circularBorderLinearGradient = `linear-gradient(white, white), ${commonLinearGradient}`;

const stylesContainer = {
  filled: {
    backgroundImage: commonLinearGradient,
    background: commonLinearGradient,
    backgroundOrigin: "none",
    backgroundClip: "none",
    "-webkit-border-image": "none",
    border: "none",
  },
  disabled: {
    background: "#E0E0E0",
    backgroundImage: "none",
    border: "none",
  },
  false: {},
};

const styleButton = {
  disabled: {
    background: "none",
    color: "#A1A1A1",
    "-webkit-text-fill-color": "none",
  },
  filled: {
    "-webkit-text-fill-color": "none",
  },
  false: {},
};

export const style = makeStyles(() => {
  return {
    container: (props: {
      disabled: "disabled" | "false";
      filled: "filled" | "false";
      width: string;
      height: string;
    }) => {
      return {
        borderRadius: "8px",
        minWidth: "92px",
        minHeight: "42px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        background: "#ffff",
        // Trick for border with rounded linear gradient, disable background property if set
        border: "2px solid transparent",
        backgroundImage: circularBorderLinearGradient,
        "-moz-border-image": "-moz-linear-gradient",
        "-webkit-border-image": "-webkit-linear-gradient",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        // End of trick
        ...stylesContainer[props.filled],
        ...stylesContainer[props.disabled],
        width: props.width,
        height: props.height,
      };
    },
    buttonLabel: (props: {
      disabled: "disabled" | "false";
      filled: "filled" | "false";
      width: string;
      height: string;
    }) => {
      return {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "21px",
        background: commonLinearGradient,
        color: "white",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        ...styleButton[props.filled],
        ...styleButton[props.disabled],
      };
    },
  };
});
