import React from 'react';
import ProjectCollection from '../../Components/ProjectCollection/ProjectCollection';
import Title from '../../Components/Title/Title';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fullView: {
    backgroundColor: theme.palette.background.default,
  },
}));

const PortfolioPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.fullView}>
      <Container maxWidth="lg">
        <Title head="Latest Work" subHead="Portfolio" />
        <ProjectCollection />
      </Container>
    </div>
  );
};

export default PortfolioPage;
