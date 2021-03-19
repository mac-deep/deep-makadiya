import React from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import useStyles from './InfoExperience.styles';
import { Typography } from '@material-ui/core';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

const InfoCard = ({ date, jobTitle, companyName, description }) => {
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.opp} />
      <TimelineSeparator>
        <TimelineDot color="primary">
          <BusinessCenterIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="body1" color="primary" gutterBottom>
            {date}
          </Typography>
          <Typography variant="h5">{jobTitle}</Typography>
          <Typography variant="body2" gutterBottom>
            <i>{companyName}</i>
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default InfoCard;
