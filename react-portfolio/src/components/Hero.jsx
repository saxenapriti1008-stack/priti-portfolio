import profilePic from "../assets/Profile.jpg";

function Hero() {
  return (
    <section className="hero" >
     <div className="hero-text">

      <h1>Priti Saxena</h1>
      <h2>Frontend Developer</h2>

      <p>A passionate Frontend Developer creating responsive, interactive web experiences.I am having 8+ years of experience in digital marketing, reaecrh analysis and UX thinking. Building responsive and user-friendly web applications with React,
       JavaScript, and modern UI practices.  I build responsive and user-friendly web applications using
          HTML, CSS, JavaScript, and React.
       </p>
       </div>

       <div className="hero-image">
       <img src={profilePic} alt="Priti Saxena Profile"/>
       </div>
   </section>
   
  );

}

export default Hero;
