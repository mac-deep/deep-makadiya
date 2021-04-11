import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import ProjectFullView from '../ProjectFullView/ProjectFullView';
import useStyles from './ProjectCard.styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectCard = ({ project }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root} onClick={handleOpen}>
        {/* <CardActionArea> */}
        <CardMedia className={classes.media} image={project.thumbnail} alt="thumbnail" title={project.title} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {project.title}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <ProjectFullView project={project} handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default ProjectCard;
