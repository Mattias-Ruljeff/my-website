const Contact = () => {
  const template = `
  <div id="nav-contact"></div>
    <section id="contact">
      <div id="contact-info">
        <h1>Contact details</h1>
        <br>
        <a href="mailto:info@mattiasruljeff.se">info@mattiasruljeff.se</a>
        <br>
        <a href="tel:+46730200735">0730 200 735</a>
      </div>

      <div id="form-container">
        <h2>Get in touch</h2>
        <form action="https://formspree.io/f/xeqpwggq" method="POST">
          <input type="text" name="name" placeholder="Full name" required>
          <input type="email" name="_replyto" placeholder="Your email" required>
          <textarea name="message" placeholder="Message" cols="30" rows="10" ></textarea>
          <input type="submit" value="Send">
        </form>
      </div>

     
      </div>

    </section>
  `;
  return template;
};

export default Contact;
