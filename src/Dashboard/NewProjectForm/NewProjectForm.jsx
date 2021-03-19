import React from 'react';
import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import useStyles from './NewProjectForm.styles';

const NewProjectForm = React.forwardRef(({ handleClose }, ref) => {
  const classes = useStyles();
  const [projectData, setProjectData] = React.useState({
    title: '',
    category: '',
    description: '',
    date: '',
    tools: [],
    link: '',
    thumbnail: '',
    slideshow: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectData({ [name]: value });
    console.log(projectData);
  };
  return (
    <div className={classes.root}>
      <IconButton onClick={handleClose} className={classes.closeBtn}>
        <CloseIcon />
      </IconButton>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography variant="h3">Fill the details for new project:</Typography>
          </Grid>
          <Grid item container sm={4} spacing={2}>
            <Grid item sm={10}>
              <TextField
                fullWidth
                autoFocus
                variant="outlined"
                label="Title"
                name="title"
                value={projectData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item sm={10}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Category</InputLabel>
                <Select name="category" value={projectData.category} onChange={handleChange} label="Category">
                  <MenuItem value="web-app">WebApp</MenuItem>
                  <MenuItem value="mobile-app">Mobile App</MenuItem>
                  <MenuItem value="e-commerce">E-commerce</MenuItem>
                  <MenuItem value="graphics">Graphics Desigining</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={10}>
              <TextField
                fullWidth
                variant="outlined"
                label="description"
                multiline
                name="description"
                value={projectData.description}
                rows={4}
              />
            </Grid>
          </Grid>
          <Grid item container sm={4} spacing={1}>
            <Grid item sm={10}>
              <TextField fullWidth variant="outlined" focused label="Date" type="date" />
            </Grid>
            <Grid item sm={10}>
              <TextField fullWidth variant="outlined" label="Date" />
            </Grid>
            <Grid item sm={10}>
              <TextField fullWidth variant="outlined" label="Live Link" />
            </Grid>
          </Grid>
          <Grid item container sm={4} spacing={1}>
            <Grid item sm={12}>
              <Typography variant="h6">Thumbnail:</Typography>
              <input accept="image/*" id="thumbnail" type="file" className={classes.input} />
              <label htmlFor="thumbnail">
                <IconButton component="span" color="secondary">
                  <AddPhotoAlternateIcon fontSize="large" />
                </IconButton>
              </label>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="h6">Slideshow:</Typography>
              <input accept="image/*" id="slideshow" type="file" multiple className={classes.input} />
              <label htmlFor="slideshow">
                <IconButton component="span" color="secondary">
                  <PhotoLibraryIcon fontSize="large" />
                </IconButton>
              </label>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item sm={9}>
              {' '}
            </Grid>
            <Grid item container sm={3} spacing={2}>
              <Grid item sm={6}>
                <Button fullWidth variant="outlined" color="secondary">
                  Clear
                </Button>
              </Grid>
              <Grid item sm={6}>
                <Button fullWidth variant="contained" color="primary">
                  Publish
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
});

export default NewProjectForm;
