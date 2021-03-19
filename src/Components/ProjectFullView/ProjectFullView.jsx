import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { HoverButton } from '../SocialLinks/SocialLinks.styles';
import useStyles from './ProjectFullView.styles';
import CloseIcon from '@material-ui/icons/Close';
import { CustomFab } from '../../Pages/HomePage/HomePage.styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Carousel from 'react-material-ui-carousel';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import I1 from '../../Assets/slideshows/1.PNG';
import I2 from '../../Assets/slideshows/2.PNG';
import I3 from '../../Assets/slideshows/3.PNG';
import I4 from '../../Assets/slideshows/4.PNG';
import I5 from '../../Assets/slideshows/5.PNG';

const Details = () => {
  const classes = useStyles();
  return (
    <div className={classes.details_container}>
      <Typography variant="h4">Project Title</Typography>
      <Typography variant="caption" gutterBottom>
        Category: web application
      </Typography>
      <Divider />
      <Grid container spacing={3}>
        <Grid item lg={8} xs={12}>
          <Typography variant="h5" gutterBottom>
            Project Description :
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, nisi voluptates debitis expedita id
            temporibus quae dolor, sequi maiores, in excepturi accusamus quasi maxime? Dolore fugiat accusantium esse
            error rem
          </Typography>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Typography variant="h5" gutterBottom>
            Project Info :
          </Typography>
          <Typography gutterBottom variant="body1">
            Date: 2020
          </Typography>
          <Typography gutterBottom variant="body1">
            Tools: html, css
          </Typography>
          <Typography gutterBottom variant="body1">
            Web: 2020
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
};

const ProjectFullView = ({ handleClose }) => {
  const classes = useStyles();
  const [details, setDetails] = React.useState(false);

  const openDetails = () => setDetails(!details);
  // useEffect(() => {
  // }, [details])

  return (
    <Paper className={classes.paper}>
      <Container>
        <Grid container>
          <Collapse in={details}>
            <Details />
          </Collapse>
        </Grid>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <CustomFab variant="extended" onClick={() => openDetails()}>
              Project details
              {details ? <RemoveIcon /> : <AddIcon />}
            </CustomFab>
          </Grid>
          <Grid item>
            <HoverButton onClick={handleClose} disableFocusRipple>
              <CloseIcon />
            </HoverButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Carousel
            NextIcon={<NavigateNextIcon />}
            PrevIcon={<NavigateBeforeIcon />}
            // navButtonsProps={{
            //   // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS

            // }}
          >
            <div className={classes.imgBox}>
              <img src={I1} alt="img" className={classes.image} />
            </div>
            <div className={classes.imgBox}>
              <img src={I2} alt="img" className={classes.image} />
            </div>
            <div className={classes.imgBox}>
              <img src={I3} alt="img" className={classes.image} />
            </div>
            <div className={classes.imgBox}>
              <img src={I4} alt="img" className={classes.image} />
            </div>
            <div className={classes.imgBox}>
              <img src={I5} alt="img" className={classes.image} />
            </div>
          </Carousel>
        </Grid>
      </Container>
    </Paper>
  );
};

export default ProjectFullView;
