import React, {useState} from 'react'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className="contact-form">
      <label className="form-label">
        Name
        <input
          className="form-input"
          type="text"
          defaultValue={name}
          placeholder="Name"
          onChange={event => setName(event.target.value)}
          required
        />
      </label>
      <label className="form-label">
        Email
        <input
          className="form-input"
          type="email"
          defaultValue={email}
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
          required
        />
      </label>
      <label className="form-label">
        Message
        <textarea
          className="form-input"
          placeholder="Message"
          onChange={event => setMessage(event.target.value)}
          defaultValue={message}
        />
      </label>
      <button type="submit">Contact Us</button>
    </form>
  )
}

export default ContactForm;
