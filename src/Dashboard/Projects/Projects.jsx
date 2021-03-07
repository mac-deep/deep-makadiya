import { IconButton, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./Projects.styles";
import Modal from "@material-ui/core/Modal";
import NewProjectForm from "../NewProjectForm/NewProjectForm";

function ModalContent() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h1">Success!</Typography>
    </Paper>
  );
}

const Projects = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <h1>project table</h1>
      </div>
      <Fab
        className={classes.addBtn}
        color="primary"
        variant="extended"
        type="button"
        onClick={handleOpen}
      >
        <AddIcon /> Add Project
      </Fab>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <NewProjectForm handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default Projects;
