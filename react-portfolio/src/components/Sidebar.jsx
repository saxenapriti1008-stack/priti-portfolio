import profilePic from "../assets/Profilepic.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={profilePic} alt="Priti Saxena" className="sidebar-photo" />

      <h2>Priti Saxena</h2>
      <p className="sidebar-title">Front End Developer</p>

      <ul className="sidebar-nav">
        <li><a href="#welcome">Welcome</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
         <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* SOCIAL ICONS  */}

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/priti-saxena-29699439/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/saxenapriti1008-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          GitHub
        </a>
       </div>
       </aside>
  );
}

export default Sidebar;
