import React from 'react';
import Title from '../../Components/Title/Title';
import './Contact.scss';
import ContactForm from '../../Components/ContactForm/ContactForm';
import ContactTiles from '../../Components/ContactTiles/ContactTiles';
import { Container, Paper } from '@material-ui/core';

const ContactPage = () => {
  return (
    <Paper className="contact">
      <Container maxWidth="lg">
        <Title head="Get In Touch" subHead="Contact" />
        <ContactTiles />
        <ContactForm />
      </Container>
    </Paper>
  );
};

export default ContactPage;
