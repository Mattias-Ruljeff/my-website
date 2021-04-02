const CV = () => {
  const template = `
    <div id="nav-cv"></div>
    <section id="cv">
      <div id="cv-text">
        <h2>CV</h2>
        <h3>Programming</h3>
        <div id="programming">
          <div id="frontend">
            <h4>Frontend</h4>
            <p>Javascript</p>
            <p>React</p>
            <p>Flutter</p>
            <p>SPA</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Sass</p>
          </div>
          <div id="backend">
            <h4>Backend</h4>
            <p>NodeJS</p>
            <p>Express</p>
            <p>C#</p>
            <p>PHP</p>
            <p>MongoDB</p>
            <p>Firebase</p>
            <p>Docker</p>
            <p>Webpack</p>
            <p>API</p>
            <p>RESTful API</p>
          </div>
        </div>
      

        <div id="cv-icons">
        <img src="../public/img/icons/javascript.png" alt="javascript icon">
        <img src="../public/img/icons/firebase.png" alt="firebase icon">
        <img src="../public/img/icons/nodejs.png" alt="nodejs icon">
        <img src="../public/img/icons/webpack.png" alt="webpack icon">
        <img src="../public/img/icons/html5.jpg" alt="html5 icon">
        <img src="../public/img/icons/react.png" alt="react icon">
        <img src="../public/img/icons/css3.jpg" alt="css3 icon">
        <img src="../public/img/icons/flutter.png" alt="flutter icon">

        </div>
      </div>
      
      <div id="cv-image">
        <img src="../public/img/code-img.jpg" alt="code on screen">
        <img src="../public/img/motherboard-img.jpg" alt="motherboard">
      </div>
    </section>
  `;
  return template;
};

export default CV;
