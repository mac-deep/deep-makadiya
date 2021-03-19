import { Grid } from '@material-ui/core';
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectCollection = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProjectCard />
      </Grid>
    </Grid>
  );
};

export default ProjectCollection;
