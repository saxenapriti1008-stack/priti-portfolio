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
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="sidebar-social">
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="https://github.com" target="_blank">GitHub</a>
      </div>
    </aside>
  );
}

export default Sidebar;
