import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about about-us">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>NURTURING TOMORROW'S LEADERS TODAY</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          sint esse expedita enim animi, iusto, sapiente maiores, quaerat
          pariatur magni nesciunt quam hic tempora ex a optio vero modi? Non
          dolore similique ea! Inventore amet fuga cupiditate ullam debitis,
          tempore nam quidem voluptatem, minus, dignissimos dolorem. Nisi unde
        </p>
        <p>
          fugit velit vitae ratione reiciendis commodi ex, voluptates, quasi
          soluta officia minima accusamus veritatis autem asperiores odio?
          Quidem, ipsa vitae enim natus quae sit tenetur nam quia dolor
          exercitationem dicta molestiae nostrum optio doloremque aspernatur
          unde modi omnis laborum maxime dolore quasi tempore voluptate. Tenetur
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
          voluptates recusandae et? Exercitationem, placeat obcaecati dicta
          necessitatibus reprehenderit ex nihil. Unde eligendi veniam, obcaecati
          rem ducimus rerum inventore magni
        </p>
      </div>
    </div>
  );
};

export default About;
