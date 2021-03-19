import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, IconButton, Typography } from '@material-ui/core';
import makeStyles from './MessageCard.styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const MessageCard = ({ name, subject, email, message }) => {
  const classes = makeStyles();
  return (
    <Card className={classes.card} elevation={3}>
      <CardHeader
        title={name}
        subheader={subject}
        action={
          <IconButton aria-label="settings">
            <StarBorderIcon />
          </IconButton>
        }
      >
        {/* <Typography variant="h5">{name}</Typography> */}
      </CardHeader>
      <CardContent>
        {/* <Typography variant="body1">{subject}</Typography> */}
        <Typography variant="body2">{message}</Typography>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
