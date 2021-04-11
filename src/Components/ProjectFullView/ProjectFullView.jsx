import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Carousel from 'react-material-ui-carousel';
import Chip from '@material-ui/core/Chip';

import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { HoverButton } from '../SocialLinks/SocialLinks.styles';
import { CustomFab } from '../../Pages/HomePage/HomePage.styles';
import useStyles from './ProjectFullView.styles';

const Details = ({ project }) => {
  const classes = useStyles();
  return (
    <div className={classes.details_container}>
      <Typography variant="h4" color="primary">
        {project.title}
      </Typography>
      <Typography variant="caption" color="textSecondary" gutterBottom>
        Category: {project.category}
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Typography variant="h5" gutterBottom color="textprimary">
            Project Description :
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {project.description}
          </Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Project Info :
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="body1">
            <span className={classes.whiteText}>Date: </span>
            {project.date}
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="body1" component="div">
            <span className={classes.whiteText}>Tools: </span>
            <span className={classes.chips}>
              {project.tools.map((tool, index) => (
                <Chip size="small" color="secondary" label={tool} key={index} />
              ))}
            </span>
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="body1">
            <span className={classes.whiteText}>Demo:</span>{' '}
            <a href={`https://${project.link}/`} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
};

const ProjectFullView = ({ project, handleClose }) => {
  const classes = useStyles();
  const [details, setDetails] = React.useState(false);

  const openDetails = () => setDetails(!details);

  return (
    <div className={classes.paper}>
      <Container>
        <Grid container>
          <Collapse in={details}>
            <Details project={project} />
          </Collapse>
        </Grid>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <CustomFab variant="extended" onClick={() => openDetails()}>
              Project details&nbsp;
              {details ? <RemoveIcon color="primary" /> : <AddIcon color="primary" />}
            </CustomFab>
          </Grid>
          <Grid item>
            <HoverButton onClick={handleClose} disableFocusRipple>
              <CloseIcon />
            </HoverButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Carousel NextIcon={<NavigateNextIcon />} PrevIcon={<NavigateBeforeIcon />}>
            {project.screenshots.map((screenshot, index) => (
              <div className={classes.imgBox} key={index}>
                <img src={screenshot} alt="img" className={classes.image} />
              </div>
            ))}
          </Carousel>
        </Grid>
      </Container>
    </div>
  );
};

export default ProjectFullView;
