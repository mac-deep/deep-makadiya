import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    margin: "30px 0",
  },
}));
