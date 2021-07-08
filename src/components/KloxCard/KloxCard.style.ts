import { makeStyles } from "@material-ui/core/styles";
import { KloxCardProps } from "./KloxCard";
import { globalClasses } from "../../classes/globalClasses";

const cardStyles = {
  selected: {
    ...globalClasses.circularBorderGradient(),
  },
  default: {},
};

export const style = makeStyles(() => {
  return {
    card: (props: KloxCardProps) => {
      const selected = props.selected ? "selected" : "default";
      const height = props.height ? props.height : "155px";
      const width = props.width ? props.width : "174px";
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height,
        width,
        margin: "1rem",
        padding: "0.3rem",
        cursor: "pointer",
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
