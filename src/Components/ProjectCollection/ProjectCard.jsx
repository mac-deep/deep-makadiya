import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Thumbnail from '../../Assets/code.jpg';
import ProjectFullView from '../ProjectFullView/ProjectFullView';
import makeStyles from './ProjectCard.styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectCard() {
  const classes = makeStyles();
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
        <CardActionArea>
          <CardMedia className={classes.media} image={Thumbnail} alt="thumbnail" title="Click to view project" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Project Title
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <ProjectFullView handleClose={handleClose} />
      </Dialog>
    </>
  );
}
