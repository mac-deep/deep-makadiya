import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import SchoolIcon from '@material-ui/icons/School';
import useStyles from './InfoEducation.styles';
import { Typography } from '@material-ui/core';

const InfoCard = ({ date, courseTitle, institutionName, description }) => {
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="body1" color="primary" gutterBottom>
            {date}
          </Typography>
          <Typography variant="h5">{courseTitle}</Typography>
          <Typography variant="body2" gutterBottom>
            <i>{institutionName}</i>
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default InfoCard;
