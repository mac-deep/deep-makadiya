import React, { useState } from 'react';
import { db } from '../../Firebase/firebase';
import { Grid } from '@material-ui/core';
import { CustomTextField, CustomTextArea } from './ContactForm.styles';
import { CustomFab } from '../../Pages/HomePage/HomePage.styles';
import SendIcon from '@material-ui/icons/Send';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('messages')
      .add({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })
      .then(() => {
        alert('Message has been sent!');
      })
      .catch((error) => {
        alert(error.message);
      });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6} direction="column">
          <CustomTextField
            fullWidth
            required
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <CustomTextField
            fullWidth
            required
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <CustomTextField
            fullWidth
            required
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomTextArea
            multiline
            required
            rows={8}
            fullWidth
            type="text"
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </Grid>
        <Grid item container xs={12} justify="flex-end">
          <CustomFab variant="extended" type="submit">
            Send message &nbsp; <SendIcon color="primary" />
          </CustomFab>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
