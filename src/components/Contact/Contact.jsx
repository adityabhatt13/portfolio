import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

function Contact() {

    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_868s7ju', 'template_h68j6uf', formRef.current, 'Fs6N1GxVWPrqJ1pVf')
          .then((result) => {
              setError(true);
          }, (error) => {
            setSuccess(true);
          });
      };

  return (
    <div className='Contact'>
        <div className="textContainer">
            <h1>Let's Work together</h1>
            <div className="item">
                <h3>Mail</h3>
                <span>adityabhattsandeep@gmail.com</span>
            </div>
            <div className="item">
                <h3>Address</h3>
                <span>123 Panchkula Haryana</span>
            </div>
            <div className="item">
                <h3>Phone</h3>
                <span>+91 9876543210</span>
            </div>
        </div>
        <div className="formContainer">
            <form ref={formRef} onSubmit={sendEmail} action="">
                <input type="text" required placeholder='Name' name='name' />
                <input type="email" required placeholder='Email' name='email' />
                <textarea rows={8} placeholder='Message' name='email' />
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}
            </form>
        </div>
    </div>
  )
}

export default Contact
