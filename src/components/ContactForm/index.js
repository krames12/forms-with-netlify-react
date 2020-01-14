import React, {useState} from 'react'


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
        setMessage('');
      })
      .catch(error => alert(error));
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="max-w-sm p-4 mx-auto"
    >
      <label className="form-label block my-4 text-left">
        Name
        <input
          name="name"
          className="form-input block border border-gray-600 p-2 my-4 w-full"
          type="text"
          defaultValue={name}
          placeholder="Name"
          onChange={event => setName(event.target.value)}
          data-testid="input-element"
          required
        />
      </label>
      <label className="form-label block my-4 text-left">
        Email
        <input
          name="email"
          className="form-input block border border-gray-600 p-2 my-4 w-full"
          type="email"
          defaultValue={email}
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
          data-testid="input-element"
          required
        />
      </label>
      <label className="form-label block my-4 text-left">
        Message
        <textarea
          name="message"
          className="form-input block border border-gray-600 p-2 my-4 w-full"
          placeholder="Message"
          onChange={event => setMessage(event.target.value)}
          defaultValue={message}
          data-testid="input-element"
        />
      </label>
      <button type="submit" className="block bg-transparent hover:bg-blue-500 py-2 px-4 border border-blue-500 text-blue-500 hover:text-white w-6/12 my-4 mx-auto text-center">Contact Us</button>
    </form>
  )
}

export default ContactForm;
