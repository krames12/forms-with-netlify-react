import React, {useState, useEffect} from 'react'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form>
      <label>
        Name
        <input 
          type="text"
          value={name}
          placeholder="Name"
          onChange={event => setName(event.target.value)}
          required
        />
      </label>
      <label>
        Email
        <input 
          type="email"
          value={email}
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
          required
        />
      </label>
      <label>
        Message
        <textarea 
          placeholder="Message"
          onChange={event => setMessage(event.target.value)}
        >
          {message}
        </textarea>
      </label>
    </form>
  )
}

export default ContactForm;
