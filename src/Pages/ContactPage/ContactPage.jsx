import React, {useState} from "react";
import Title from "../../Components/Title/Title";
import "./Contact.scss";
import { db } from "../../Firebase/firebase";

const ContactPage = () => {

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: ""})

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    })
    .then(() => {
      alert("Message has been sent!")
    })
    .catch((error) => {
      alert(error.message)
    });

    setFormData({name: "", email: "", subject: "", message: ""})
  };
  return (
    <div className="contact">
      <Title head="Get in touch" subHead="contact" />
      
        <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="text" placeholder="subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
        <textarea type="text" placeholder="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
        <button type="submit" >Send message</button>
        </form>
      
    </div>
  );
};

export default ContactPage;
