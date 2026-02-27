const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container container">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>You can reach me through the following channels.</p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <span className="label">Name:</span>
            <span className="value">Brij Mohan</span>
          </div>

          <div className="contact-item">
            <span className="label">Email:</span>
            <a className="value" href="mailto:your.email@example.com">brijmohan9297@gmail.com</a>
          </div>

          <div className="contact-item">
            <span className="label">Phone:</span>
            <a className="value" href="tel:+1234567890">+91 75450 99366</a>
          </div>

          <div className="contact-item">
            <span className="label">WhatsApp:</span>
            <a className="value" href="https://wa.me/917545099366" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>

          <div className="contact-item">
            <span className="label">Address:</span>
            <span className="value">Skanda PG, 10th Cross Road, Kumaraswamy Layout, Bangalore, Karnataka, Pin- 560111</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;