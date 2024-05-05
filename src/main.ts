import "./style.css";
import lightroomLogo from "./icons/lightroom.svg";
import photoshopLogo from "./icons/photoshop.svg";
import premiereproLogo from "./icons/premierepro.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="darumadrop">
      <h1>James Doe</h1>
      <h2>Student, Photographer, Aviation Geek</h2>
    </div>

    <div class="instrument-sans extra-space">
      <div id="about">
        <a href="#about">
          <h2 class="header">About Me</h2>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div id="skills" class="space-up">
        <a href="#skills">
          <h2 class="header">My Skills</h2>
        </a>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <div class="icons-stack">
          <img src="${lightroomLogo}" alt="Adobe Lightroom" />
          <img src="${photoshopLogo}" alt="Adobe Photoshop" />
          <img src="${premiereproLogo}" alt="Adobe Premiere Pro" />
        </div>
      </div>
      <div id="showcase" class="space-up">
        <a href="#showcase">
          <h2 class="header">My Photo Collections 📸</h2>
        </a>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
        </p>
        <div class="photo-stacks">
          <img src="/photos/library.jpg" alt="Library" />
          <img src="/photos/stairs.jpg" alt="Stairs" />
        </div>
      </div>
      <div id="contact" class="space-up">
        <a href="#contact">
          <h2 class="header">Contact Me</h2>
        </a>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
          dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </div>
`;
