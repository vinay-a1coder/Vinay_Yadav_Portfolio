import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
// import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e3jeghj', 'template_fpgmb0v', form.current, 'UjQEa0xW5dt2bMWAn')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMailOutline className='contact_option-icon' />
            <h4>Email</h4>
            <h5>vinay.a1.coder@gmail.com</h5>
            <a href="mailto:vinay.a1.coder@gmail.com" target='_blank'>Send a mail</a>
          </article>

          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon' />
            <h4>Linkedin</h4>
            <h5>Vinay Yadav</h5>
            <a href="https://www.linkedin.com/messaging/thread/2-NjhiYTI2NjgtNzlkZS00NzIwLWJkMmQtNzMyMDQ4MDc0YjkyXzAxMw==/" target='_blank'>Send a message</a>
          </article>

          {/* <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 8053503459</h5>
            <a href="https://api.whatsapp.com/send?phone=8053503459" target='_blank'>Send a message</a>
          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name='email' placeholder='Your Email'  required/>
          <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact