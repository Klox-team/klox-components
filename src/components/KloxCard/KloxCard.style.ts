import { makeStyles } from "@material-ui/core/styles";
import { KloxCardProps } from "./KloxCard";

export const style = makeStyles(() => {
  return {
    card: {
      width: "194px",
      height: "152px",
      display: "flex",
      flexDirection: "column",
      borderRadius: "8px",
      margin: "0.5rem",
    },
    checkBoxContainer: (props: KloxCardProps) => {
      return {
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "flex-end",
        background: props.topColor,
      };
    },
    checkBox: {
      marginRight: "8px",
      marginTop: "8px",
    },
    iconContainer: (props: KloxCardProps) => {
      return {
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: "flex-start",
        background: props.topColor,
        position: "relative",
      };
    },
    label: (props: KloxCardProps) => {
      return {
        width: "100%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: props.botColor,
        fontFamily: "Poppins",
        fontWeight: 700,
        fontStyle: "normal",
        fontSize: "13px",
        lineHeight: "19px",
        color: props.color,
      };
    },
  };
});
