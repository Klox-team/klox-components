import { makeStyles } from "@material-ui/core/styles";
import { KloxCardProps } from "./KloxCard";
import { globalClasses } from "../../classes/globalClasses";

const cardStyles = {
  selected: {
    ...globalClasses.circularBorderGradient,
  },
  default: {},
};

export const style = makeStyles(() => {
  return {
    card: (props: KloxCardProps) => {
      const selected = props.selected ? "selected" : "default";
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "155px",
        width: "174px",
        margin: "1rem",
        padding: "0.3rem",
        ...cardStyles[selected],
      };
    },
    label: {
      color: "#07003B",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "24px",
    },
  };
});
