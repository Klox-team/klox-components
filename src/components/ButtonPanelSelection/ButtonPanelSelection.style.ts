import { makeStyles } from "@material-ui/core/styles";
import { globalClasses } from "../../classes/globalClasses";

export const style = makeStyles(() => {
  return {
    panelContainer: {
      display: "flex",
      flexDirection: "column",
    },
    panelTitle: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "18px",
      lineHeight: "27px",
      color: "#07003B",
      marginBottom: "8px",
    },
    selectionContainer: {
      display: "flex",
      flexWrap: "wrap",
    },
    selected: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "89px",
      height: "33px",
      borderRadius: "8px",
      margin: "0.5rem",
      ...globalClasses.circularBorderGradient("2px"),
    },
    selection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "95px",
      height: "37px",
      borderRadius: "8px",
      boxShadow: "0px 4px 4px 0px #00000040",
      margin: "0.5rem",
    },
    optionName: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: "13px",
      lineHeight: "19px",
      color: "#392A4C",
    },
  };
});
