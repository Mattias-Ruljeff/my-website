const Hero = () => {
  const template = `
    <section id="hero">
      <div id="hero-box">
        <h1>I´m a</h1>
        <h1>fullstack developer</h1>
      </div>
      <a href="#contact">Contact me</a>

      <div id="hero-img">
        <img src="../public/img/computer.png" alt="" />
      </div>
      <div id="cv-link"></div>
    </section>
  `;

  return template;
};

export default Hero;
