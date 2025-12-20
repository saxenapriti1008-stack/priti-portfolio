function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>CONTACT ME</h2>

      <p>
        I'm excited to hear from you! Please take a moment to contact me through
        the contact form below.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name..." required />
        <input type="email" placeholder="Your Email..." required />
        <input type="text" placeholder="Subject..." />
        <textarea
          placeholder="Leave your message here..."
          rows="5"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
