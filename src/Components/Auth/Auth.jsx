import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import useStyles from "./Auth.styles";
import { Avatar, Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const Auth = () => {
  const classes = useStyles();

  return (
    <>
      <h1>Welcome back, Deep</h1>
      <Container component="div" maxWidth="xs">
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.content}>
            <Avatar className={classes.avatar} />
            <TextField
              className={classes.margins}
              fullWidth
              variant="outlined"
              label="Password"
            />
            <Grid container spacing={1} className={classes.margins}>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined" fullWidth>
                  cancel
                </Button>
              </Grid>
            </Grid>
            <Link to="/">Back to website</Link>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default Auth;
