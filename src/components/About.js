const About = () => {
  const template = `
    <section id="about">
      <div id="about-card">
        <div id="profile-pic">
          <img src="../public/img/mattias_ruljeff-profil.jpg" alt="Profile picture">
        </div>
        <div id="about-text-container">
          <div id="about-text-top">
            <div id="about-experience">
            <h2>2</h2>
            <p>Years of experience</P>
            </div>
            <div id="about-age">
              <h2>32</h2>
              <p>Years old</P>
            </div>
          </div>
          <p>Lives south of Kalmar in Sweden with my family. Have always loved technology, and programming is my new passion.</p>
        </div>
      </div>

    </section>   
  `;
  return template;
};

export default About;
