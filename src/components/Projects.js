const Projects = () => {
  const template = `
  <div id="nav-projects"></div>
    <section id="projects">
    
        <h1>Projects</h1>
    
        <a id="prevButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </a>

        <a id="nextButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </a>
        
        <div class="carousel-slide">

          <div class="carousel-card">
            <a href="https://github.com/Mattias-Ruljeff/All-unsigned" target="_blank">
              <img src="../public/img/project-img/all-unsigned.jpg" alt="">
            </a>
            <div id="carousel-card-info">
              <h1>All-unsigned</h1>
              <div id="carousel-card-technologies">
                <img src="../public/img/icons/react.png" alt="">
                <img src="../public/img/icons/nodejs.png" alt="">
                <img src="../public/img/icons/mysql.png" alt="">
                <p>Express</p>
              </div>
              <h3>School project</h3>
            </div>
          </div>

          <div class="carousel-card">
            <a href="https://github.com/Mattias-Ruljeff/Personal-web-desktop" target="_blank">
            <img src="../public/img/project-img/pwd.jpg" alt="">
            </a>
            <div id="carousel-card-info">
              <h1>Personal web desktop</h1>
              <div id="carousel-card-technologies">
                <img src="../public/img/icons/javascript.png" alt="">
                <img src="../public/img/icons/webpack.png" alt="">
              </div>
              <h3>School project</h3>
            </div>
          </div>

          <div class="carousel-card">
            <a href="https://github.com/Mattias-Ruljeff/Boat-Club" target="_blank">
            <img src="../public/img/project-img/code.jpg" alt="Code on screen">
            </a>
            <div id="carousel-card-info">
              <h1>Boat Club - console application</h1>
              <div id="carousel-card-technologies">
                <img src="../public/img/icons/c-sharp.png" alt="">
            </div>
              <h3>School project</h3>
            </div>
          </div>

          <div class="carousel-card">
            <a href="https://github.com/Mattias-Ruljeff/car-ads" target="_blank">
            <img src="../public/img/project-img/code.jpg" alt="Code on screen">
            </a>
            <div id="carousel-card-info">
              <h1>Car Ads</h1>
              <div id="carousel-card-technologies">
                <img src="../public/img/icons/php.png" alt="">
            </div>
              <h3>School project</h3>
            </div>
          </div>

          <div class="carousel-card">
            <a href="https://github.com/Mattias-Ruljeff/Black-jack" target="_blank">
            <img src="../public/img/project-img/code.jpg" alt="Code on screen">
            </a>
            <div id="carousel-card-info">
              <h1>A game of blackjack - console application</h1>
              <div id="carousel-card-technologies">
                <img src="../public/img/icons/c-sharp.png" alt="">
            </div>
              <h3>School project</h3>
            </div>
          </div>
          
          <div class="carousel-card">
            <a href="https://github.com/Mattias-Ruljeff/Hangman" target="_blank">
            <img src="../public/img/project-img/code.jpg" alt="Code on screen">
            </a>
            <div id="carousel-card-info">
              <h1>A game of hangman - console application</h1>
              <div id="carousel-card-technologies">
                <img src="../public/img/icons/javascript.png" alt="">
            </div>
              <h3>School project</h3>
            </div>
          </div>

    </section>
    `;

  return template;
};

export default Projects;
