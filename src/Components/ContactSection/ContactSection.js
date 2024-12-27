import React from 'react';
import { Mail, Linkedin, Twitter, GitHub } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="contact-details">
              <a href="mailto:shalupatil15@gmail.com" className="contact-link">
                <Mail size={20} />
                <span>shalupatil15@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/shalmalipatil/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://twitter.com/ShalmaliPatil" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Twitter size={20} />
                <span>@ShalmaliPatil</span>
              </a>
              {/* <a href="https://github.com/ShalmaliPatil" target="_blank" rel="noopener noreferrer" className="contact-link">
                <GitHub size={20} />
                <span>GitHub Profile</span>
              </a> */}
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" placeholder="Your Name" required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Your Email" required />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
