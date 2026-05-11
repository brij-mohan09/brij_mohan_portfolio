const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container container">
        <div className="contact-card">
          <div className="contact-header">
            <h1>Contact Card</h1>
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
              <a className="value" href="tel:+917545099366">+91 75450 99366</a>
            </div>

            <div className="contact-item">
              <span className="label">WhatsApp:</span>
              <a className="value" href="https://wa.me/917545099366" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>

            <div className="contact-item">
              <span className="label">Address:</span>
              <span className="value">Near PMS School, Manpur Bairia, PO - Bairia, PS- Gopalpur, Patna - 800007 </span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-header">
            <h1>Contact Form</h1>
            <p>You can reach me through the following channels.</p>
          </div>
          <form className="form">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" placeholder="Enter your email-id" required />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="tel" name="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea name="message" rows="5" placeholder="Write your message..." required ></textarea>
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;