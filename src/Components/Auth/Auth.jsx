import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import useStyles from './Auth.styles';
import { Avatar, Box, Button, CssBaseline, Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CustomTextField from '../../CustomUI/CustomTextField';
import CustomFab from '../../CustomUI/CustomFab';
import CustomButton from '../../CustomUI/CustomButton';

const Auth = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Container component="div" maxWidth="xs">
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.content}>
            <Avatar className={classes.avatar} />
            <CustomTextField
              placeholder="Passcode"
              className={classes.margins}
              fullWidth
              variant="outlined"
              label="Password"
            />
            <Grid container spacing={1} className={classes.margins} justify="center">
              <Grid item xs={6}>
                <CustomButton fullWidth>cancel</CustomButton>
              </Grid>
              <Grid item xs={6}>
                <CustomButton variant="contained" fullWidth>
                  Submit
                </CustomButton>
              </Grid>
            </Grid>
            <Link to="/">Back to website</Link>
          </div>
        </Paper>
      </Container>
    </Box>
  );
};

export default Auth;
