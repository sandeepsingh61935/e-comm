import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    // "space-around" | "space-between" | "space-evenly" | "stretch"
    justifyContent: "space-evenly",
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
    display: "flex",
    alignItems: "center",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
