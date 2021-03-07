import { makeStyles } from "@material-ui/core/styles";

// const theme = createMuiTheme({

// });

export default makeStyles((theme) => ({
  paper: {
    // height: "300px",
  },
  content: {
    padding: "40px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    marginBottom: "40px",
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  margins: {
    marginBottom: "20px",
  },
}));
