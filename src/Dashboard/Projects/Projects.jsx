import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './Projects.styles';
import Modal from '@material-ui/core/Modal';
import ProjectTable from './ProjectTable';
import CustomFab from '../../CustomUI/CustomFab';
import ProjectForm from './ProjectForm';

const Projects = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div>
      <ProjectForm setOpen={handleClose} />;
    </div>
  );

  return (
    <div>
      <div>
        <h1>Project table</h1>
      </div>
      <ProjectTable />

      <CustomFab className={classes.addBtn} variant="extended" color="primary" onClick={handleOpen}>
        <AddIcon />
        Add Project
      </CustomFab>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <ProjectForm open={open} setOpen={handleClose} />
        </div>
        {/* {body} */}
      </Modal>
    </div>
  );
};

export default Projects;
