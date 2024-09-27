import { Link } from "react-router-dom";

import Card from "../Card";
// import ComingSoon from "./ComingSoon";
import ExperienceCard from "./ExperienceCard";
import Heading from "./Heading";
import Numbers from "./Numbers";
import ProjectCard from "./ProjectCard";
import Tool from "./Tool";
import html from "../assets/images tools/html-5.png";
import css from "../assets/images tools/css-3.png";
import js from "../assets/images tools/js.png";
import react from "../assets/images tools/science.png";
import canva from "../assets/images tools/palette.webp";
import efruit from "../assets/images project/efruit.webp";
import buyMePizza from "../assets/images project/img-buymepizza.webp";
import scoreboard from "../assets/images project/scoreboard.png";
import tictactoe from "../assets/images project/Tictactoe.png";

function Section() {
  return (
    <div className="main">
      <Card />
      <div className="info">
        <Heading
          head1="FRONTEND"
          head2="DEVELOPER"
          p1=" Passionate about creating intuitive and engaging user
         experiences. Specialize in transforming ideas into beautifully
        crafted products."
        />
        <div className="numbers">
          <Numbers experience="+2" expDesc="YEARS OF EXPERIENCE" />
          <Numbers experience="+10" expDesc="PROJECTS COMPLETED" />
          <Numbers experience="+16" expDesc="YEARS OF EDUCATION " />
        </div>
        <div className="pattern-box">
          <Link to="/coming-soon">
            <div className="pattern">
              <i className="ri-stack-line top-i"></i>
              <p>DYNAMIC ANIMATION, MOTION DESIGN</p>
              <i className="ri-arrow-right-circle-line bottom-i"></i>
            </div>
          </Link>
          <Link to="/coming-soon">
            <div className="pattern1">
              <i className="text-black ri-brush-4-line top-i"></i>
              <p>FRAMER, FIGMA, WORDPRESS, REACTJS</p>
              <i className="ri-arrow-right-circle-line bottom-i"></i>
            </div>
          </Link>
        </div>

        <div className="experience" id="experience">
          <Heading
            className="font-[60px]"
            head1="4 MONTH "
            head2="EXPERIENCE"
          />
          <ExperienceCard
            Heading="IP Centric Nastp"
            Description="Gained valuable frontend development experience during my internship tenure. Contributed to  various projects."
            Date="Aug 2024 - Present"
          />
          <ExperienceCard
            Heading="Rifah Trust"
            Description=" Redesigned the website for a non-profit trust. I  collaborated with the team to organize data and create fresh content that aligns with the trust's mission. "
            Date="Feb 2024 - Mar 2024"
          />
        </div>
        {/* experience end */}
        <div className="Projects" id="projects">
          <Heading head1="RECENT " head2="PROJECTS" />
          <ProjectCard
            Heading="Fruit Website"
            Image={efruit}
            Description="A website showcasing different fruits, designed to be responsive on all devices."
            Link="https://biyasitedomainstartshere.on.drv.tw/www.efruit.com/Home/"
          />
          <ProjectCard
            Heading="Buy Me Pizza"
            Image={buyMePizza}
            Description="An interactive fun game. Send it to your friends and get pizza treat."
            Link="https://codingbiyu.github.io/Buymepizza/"
          />
          <ProjectCard
            Heading="Scoreboard"
            Image={scoreboard}
            Description="A score board designed to be responsive and visually appealing."
            Link="https://biyasitedomainstartshere.on.drv.tw/www.efruit.com/www.scoreboard.com/score.html"
          />
          <ProjectCard
            Heading="TicTacToe"
            Image={tictactoe}
            Description="A multiplayer game of Tic-Tac-Toe. Play when boredom strikes"
            Link="https://biyasitedomainstartshere.on.drv.tw/www.efruit.com/www.Tictactoe.com/tictac.html"
          />
        </div>
        <div className="tools" id="tools">
          <Heading head1="PREMIUM " head2="TOOLS" />
          <div className="allTools">
            <Tool Image={html} Heading="Html5 " Description="Website Tool" />
            <Tool Image={css} Heading="Css " Description="Website Tool" />
            <Tool Image={js} Heading="JavaScript " Description="Website Tool" />
            <Tool Image={react} Heading="React " Description="Website Tool" />
            <Tool Image={canva} Heading="Canva " Description="Website Tool" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
