import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    position: "absolute",
    maxWidth: 1000,
    // height: 560,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
  },
  closeBtn: {
    position: "fixed",
    top: "20px",
    right: "20px",
    color: "white",
  },
  input: {
    display: "none",
  },
}));
