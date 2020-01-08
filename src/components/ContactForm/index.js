import React, { useState } from 'react'


const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    fetch('/', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message })
    })
      .then(() => {
        console.log("WE GOT EM");
        setName('');
        setEmail('');
        setMessage('Yup it works');
      })
      .catch(error => alert(error));
  }

  return (
    <form onSubmit={handleSubmit} >
      <label className="form-label">
        Name
        <input
          name="name"
          className="form-input"
          type="text"
          defaultValue={name}
          placeholder="Name"
          onChange={event => setName(event.target.value)}
          data-testid="input-element"
          required
        />
      </label>
      <label className="form-label">
        Email
        <input
          name="email"
          className="form-input"
          type="email"
          defaultValue={email}
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
          data-testid="input-element"
          required
        />
      </label>
      <label className="form-label">
        Message
        <textarea
          name="message"
          className="form-input"
          placeholder="Message"
          onChange={event => setMessage(event.target.value)}
          defaultValue={message}
          data-testid="input-element"
        />
      </label>
      <button type="submit">Contact Us</button>
    </form>
  )
}

export default ContactForm;
