import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:muskanalirizvi1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section page-enter">
      <div className="container contact-inner">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          Have a question or want to work together? Fill out the form below and it'll
          open up your email client with the message ready to send.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-solid">
            Send Message
          </button>
        </form>

        <div className="contact-social">
          <a href="https://github.com/muskanalirizvi" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muskanalirizvi/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:muskanalirizvi1@gmail.com">muskanalirizvi1@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
