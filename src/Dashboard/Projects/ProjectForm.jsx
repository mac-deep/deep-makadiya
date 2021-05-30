import {
  Button,
  Chip,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  LinearProgress,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import CustomTextArea from '../../CustomUI/CustomTextArea';
import CustomTextField from '../../CustomUI/CustomTextField';
import useStyles from './ProjectForm.styles';
import CancelIcon from '@material-ui/icons/Cancel';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import CustomButton from '../../CustomUI/CustomButton';
import Switch from '@material-ui/core/Switch';

import { db } from '../../Firebase/firebase';

const tool = [
  'ReactJS',
  'HTML',
  'CSS',
  'JavaScript',
  'Styled-Component',
  'Firebase',
  'MongoDB',
  'TypeScript',
  'ExpressJS',
  'NodeJS',
];
const ProjectForm = ({ setOpen, open }) => {
  const classes = useStyles();
  const [projectData, setProjectData] = React.useState({
    title: '',
    category: 'web-app',
    description: '',
    date: '',
    tools: [],
    link: '',
    thumbnail: '',
    slideshow: '',
    visibility: false,
  });
  console.log(setOpen, open);
  //  const handleClose = () => {

  //  }
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('projects')
      .add({
        title: projectData.title,
        category: projectData.category,
        description: projectData.description,
        date: projectData.date,
        tools: projectData.tools,
        link: projectData.link,
        visibility: projectData.visibility,
      })
      .then(() => {
        alert('project submitted');
        console.log(projectData);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClear();
    setOpen();
  };
  const handleClear = () => {
    setProjectData({
      title: '',
      category: 'web-app',
      description: '',
      date: '',
      tools: [],
      link: '',
      thumbnail: '',
      slideshow: '',
      visibility: false,
    });
  };
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <CancelIcon onClick={setOpen} className={classes.closeBtn} />
        <h1>This will be a project form</h1>
        <Grid container spacing={2}>
          <Grid item container sm={4} spacing={2}>
            <Grid item sm={10}>
              <CustomTextField
                fullWidth
                autoFocus
                variant="outlined"
                placeholder="Title"
                name="title"
                value={projectData.title}
                onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
              />
            </Grid>
            <Grid item sm={10}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={projectData.category}
                  onChange={(e) => setProjectData({ ...projectData, category: e.target.value })}
                  label="Category"
                >
                  <MenuItem value="web-app">WebApp</MenuItem>
                  <MenuItem value="mobile-app">Mobile App</MenuItem>
                  <MenuItem value="e-commerce">E-commerce</MenuItem>
                  <MenuItem value="graphics">Graphics Desigining</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={10}>
              <CustomTextArea
                fullWidth
                variant="outlined"
                placeholder="Description"
                multiline
                name="description"
                value={projectData.description}
                onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                rows={4}
              />
            </Grid>
          </Grid>
          <Grid item container sm={4} spacing={1}>
            <Grid item sm={10}>
              <CustomTextField
                fullWidth
                variant="outlined"
                // focused
                label="Date"
                value={projectData.date}
                onChange={(e) => setProjectData({ ...projectData, date: e.target.value })}
                type="date"
              />
            </Grid>
            <Grid item sm={10}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Tools</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-mutiple-chip-label"
                  id="demo-mutiple-chip"
                  multiple
                  value={projectData.tools}
                  onChange={(e) => setProjectData({ ...projectData, tools: e.target.value })}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip size="small" key={value} label={value} className={classes.chip} />
                      ))}
                    </div>
                  )}
                >
                  {tool.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={10}>
              <CustomTextField
                fullWidth
                variant="outlined"
                value={projectData.link}
                onChange={(e) => setProjectData({ ...projectData, link: e.target.value })}
                placeholder="Live Link"
              />
            </Grid>
            <Grid item sm={10}>
              Visibility
              <Switch
                color="primary"
                checked={projectData.visibility}
                onChange={(e) => setProjectData({ ...projectData, visibility: !projectData.visibility })}
              />
            </Grid>
          </Grid>
          <Grid item container sm={4} spacing={1}>
            <Grid item sm={12}>
              <Typography variant="h6">Thumbnail: </Typography>
              {/* <LinearProgress variant="determinate" value={progress} /> */}
              <input
                accept="image/*"
                id="thumbnail"
                onChange={(e) => setProjectData({ ...projectData, thumbnail: e.target.files[0] })}
                type="file"
                // className={classes.thumbnail}
              />
              <label htmlFor="thumbnail">
                <IconButton component="button">
                  <AddPhotoAlternateIcon fontSize="large" />
                </IconButton>
                {projectData.thumbnail && <span>{projectData.thumbnail.name}</span>}
              </label>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="h6">Slideshow:</Typography>
              <input
                accept="image/*"
                onChange={(e) => setProjectData({ ...projectData, slideshow: e.target.files })}
                id="slideshow"
                type="file"
                multiple
                // className={classes.input}
              />
              {/* <label htmlFor="slideshow">
                <IconButton component="span" color="secondary">
                  <PhotoLibraryIcon fontSize="large" />
                </IconButton>
              </label> */}
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item sm={9}>
              {' '}
            </Grid>
            <Grid item container sm={3} spacing={2}>
              <Grid item sm={6}>
                <CustomButton fullWidth variant="outlined" color="secondary" onClick={handleClear}>
                  Clear
                </CustomButton>
              </Grid>
              <Grid item sm={6}>
                <CustomButton fullWidth variant="contained" color="primary" onClick={handleSubmit}>
                  Publish
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProjectForm;
