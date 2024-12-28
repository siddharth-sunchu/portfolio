import React, { useRef, useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Mail, Linkedin, Twitter, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (submitStatus === 'success') {
      timeoutId = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000); // 5 seconds
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [submitStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_5znbydg',
        'template_oru88cn',
        form.current,
        '0rytkHCAHV5GlZU6V'
      );
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section className="bg-black text-white py-20 px-8 min-h-screen flex items-center" id="connect">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-center mb-12 text-[#cdff00]">Let's Connect</h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Left Column */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4 text-[#cdff00]">Get in Touch</h3>
            <p className="text-base leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="bg-[rgba(205,255,0,0.05)] p-6 rounded-lg mb-8">
              <h4 className="text-2xl font-bold mb-2 text-[#cdff00]">Schedule a Meeting</h4>
              <p className="mb-4">Book a 30-minute slot that works best for you.</p>
              <a 
                href="https://calendly.com/shalupatil15/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#cdff00] text-black px-6 py-3 rounded-md font-bold transition-all hover:bg-[#a8ff00] hover:-translate-y-0.5"
              >
                <Calendar size={20} />
                Schedule Meeting
              </a>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <a 
                href="mailto:shalupatil15@gmail.com" 
                className="flex items-center gap-4 text-white hover:text-[#cdff00] hover:bg-[rgba(205,255,0,0.05)] p-2 rounded-md transition-all hover:translate-x-1"
              >
                <Mail size={20} />
                <span>shalupatil15@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/shalmalipatil/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-white hover:text-[#cdff00] hover:bg-[rgba(205,255,0,0.05)] p-2 rounded-md transition-all hover:translate-x-1"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href="https://twitter.com/ShalmaliPatil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-white hover:text-[#cdff00] hover:bg-[rgba(205,255,0,0.05)] p-2 rounded-md transition-all hover:translate-x-1"
              >
                <Twitter size={20} />
                <span>@ShalmaliPatil</span>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1">
            <form 
              ref={form} 
              onSubmit={handleSubmit} 
              className="bg-[rgba(255,255,255,0.05)] p-8 rounded-lg"
            >
              <div className="relative mb-8">
                <input 
                  type="text" 
                  name="user_name" 
                  id="name" 
                  placeholder="Your Full Name" 
                  required 
                  className="w-full bg-transparent border-b-2 border-[#cdff00] px-0 py-2 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                />
                <label 
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#cdff00] peer-focus:text-sm"
                >
                  Your Name
                </label>
              </div>

              <div className="relative mb-8">
                <input 
                  type="email" 
                  name="user_email" 
                  id="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full bg-transparent border-b-2 border-[#cdff00] px-0 py-2 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                />
                <label 
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#cdff00] peer-focus:text-sm"
                >
                  Your Email
                </label>
              </div>

              <div className="relative mb-8">
                <textarea 
                  name="message" 
                  id="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required
                  className="w-full bg-transparent border-b-2 border-[#cdff00] px-0 py-2 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#cdff00] peer-focus:text-sm"
                >
                  Your Message
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#cdff00] text-black py-4 px-8 rounded-md font-bold transition-all hover:bg-[#a8ff00] disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 rounded-md bg-[rgba(205,255,0,0.1)] text-[#cdff00] text-center">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 rounded-md bg-[rgba(255,0,0,0.1)] text-red-400 text-center">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;