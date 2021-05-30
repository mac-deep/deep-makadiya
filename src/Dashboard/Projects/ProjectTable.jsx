import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CircularProgress, IconButton } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

import useStyles from './ProjectTable.styles';

import { db } from '../../Firebase/firebase';

const ProjectTable = () => {
  const classes = useStyles();
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
  console.log(projects);

  const handleEdit = () => {
    console.log('clicked for edit');
  };

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div>
      <TableContainer className={classes.table}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Visibility</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  <img style={{ objectFit: 'contain', height: 50 }} src={item.thumbnail} alt="thumbnail" />
                </TableCell>

                <TableCell>{item.category}</TableCell>
                <TableCell>
                  <a href={`https://${item.link}/`}>
                    <OpenInNewIcon />
                  </a>
                </TableCell>
                <TableCell>
                  <IconButton onClick={handleEdit}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton>{item.visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}</IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProjectTable;
