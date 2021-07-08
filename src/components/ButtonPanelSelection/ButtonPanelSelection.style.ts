import { makeStyles } from "@material-ui/core/styles";
import { globalClasses } from "../../classes/globalClasses";

export const style = makeStyles(() => {
  return {
    panelContainer: {
      display: "flex",
      flexDirection: "column",
      margin: "1rem 0 1rem 0",
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
      minWidth: "89px",
      height: "35px",
      borderRadius: "8px",
      margin: "0.5rem",
      textAlign: "center",
      ...globalClasses.circularBorderGradient("1px"),
      cursor: 'pointer'
    },
    selection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "95px",
      height: "37px",
      borderRadius: "8px",
      boxShadow: "0px 4px 4px 0px #00000040",
      margin: "0.5rem",
      textAlign: "center",
      cursor: 'pointer'
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      paddingLeft: "6px",
    },
    optionName: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: "13px",
      lineHeight: "19px",
      color: "#392A4C",
      textAlign: "center",
      padding: "0.5em",
    },
  };
});
