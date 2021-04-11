import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStyles from './InfoEducation.styles';

const InfoCard = ({ date, courseTitle, institutionName, description }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.opp} />
      <TimelineSeparator>
        <TimelineDot color={'secondary'}>
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
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <i>{institutionName}</i>
          </Typography>
          <Typography variant={matches ? 'caption' : 'body1'} color="textSecondary">
            {description}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default InfoCard;
