import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { db } from '../../Firebase/firebase';
import CustomTextArea from '../../CustomUI/CustomTextArea';
import CustomTextField from '../../CustomUI/CustomTextField';
import CustomFab from '../../CustomUI/CustomFab';

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
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} alignItems="center">
        <Grid item container xs={12} md={6} direction="column">
          <Grid item xs={12}>
            <CustomTextField
              fullWidth
              required
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              fullWidth
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              fullWidth
              required
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
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
