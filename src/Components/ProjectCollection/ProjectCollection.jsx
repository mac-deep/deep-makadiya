import React from 'react';
import { CircularProgress, Container, Grid } from '@material-ui/core';

import ProjectCard from './ProjectCard';
import { db } from '../../Firebase/firebase';

const ProjectCollection = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    db.collection('projects')
      .get()
      .then((snapshot) => {
        const projects = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          projects.push(data);
        });
        setProjects(projects);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Grid container spacing={3}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectCollection;
