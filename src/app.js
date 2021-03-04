import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import CV from "./components/CV.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

async function App() {
  const template = document.createElement("template");

  template.innerHTML = `
    <main class="content-wrapper">
      <div id="header-hero">
        ${Header()}
        ${Hero()}
      </div>
      <div id="content">
        ${CV()}
        ${Projects()}
        ${About()}
      </div>
      ${Contact()}
      ${Footer()}
  </main>
  `;
  // Return a new node from template
  return template.content.cloneNode(true);
}

export default App;
