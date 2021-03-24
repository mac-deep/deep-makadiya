import React from 'react';
import Title from '../../Components/Title/Title';
import ContactForm from '../../Components/ContactForm/ContactForm';
import ContactTiles from '../../Components/ContactTiles/ContactTiles';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fullView: {
    backgroundColor: theme.palette.background.default,
  },
}));

const ContactPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.fullView}>
      <Container maxWidth="lg">
        <Title head="Get In Touch" subHead="Contact" />
        <ContactTiles />
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactPage;
