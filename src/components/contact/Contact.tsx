import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // 👇 TypeScript-typed reference to the form element
  const form = useRef<HTMLFormElement>(null);

  // 👇 Toast notification function
  const notify = (message: string) => {
    toast(message);
  };

  // 👇 Email sending function
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_0hpc3us',       // Your EmailJS service ID
        'template_tw1nhuk',      // Your EmailJS template ID
        form.current,            // The form reference
        'ns7zrfII77b1xyiSS'      // Your public key (user ID)
      )
      .then(
        () => {
          notify("✅ Message sent successfully!");
        },
        (error) => {
          console.error("❌ Email error:", error.text);
          notify("❌ Failed to send message.");
        }
      );

    e.currentTarget.reset(); // Clear the form
  };

  return (
    <>
      <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>Afolabipeter49@gmail.com</h5>
              <a href="mailto:afolabipeter49@gmail.com" target="_blank" rel="noreferrer">
                Send a Message
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <a
                href="https://api.whatsapp.com/send?phone=2348169271036&text=📞%20Hello%20Peter,%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20impressed!%20I%20have%20a%20project%20idea%20that%20might%20suit%20your%20skills.%0A%0A🙏%20Hope%20to%20hear%20from%20you%20soon."
                target="_blank"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </article>
          </div>

          {/* 👇 Contact Form */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" cols={30} rows={7} placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send A Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
