
import { useRef } from "react";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    console.log("Contact Form Data:", formData);

    // Reset form
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <section className="contact-section">
      <div className="contact-container container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>
            Have a project in mind or just want to say hello?
            Fill out the form below.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-group">
            <input type="text" ref={nameRef} required />
            <label>Name</label>
          </div>

          <div className="contact-group">
            <input type="email" ref={emailRef} required />
            <label>Email</label>
          </div>

          <div className="contact-group">
            <input type="tel" ref={phoneRef} required />
            <label>Contact Number</label>
          </div>

          <div className="contact-group">
            <textarea rows="5" ref={messageRef} required />
            <label>Message</label>
          </div>

          <button className="contact-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;