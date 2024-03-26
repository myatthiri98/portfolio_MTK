import React from "react";
import ProjectItem from "./ProjectItem";
import weatherImg from "../assets/weather.jpg";
import ecommerceImg from "../assets/ecommerce.jpg";
import gameImg from "../assets/game.jpg";
import bookingImg from "../assets/booking.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1140px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Explore a selection of my projects that showcase my skills and
        creativity. From weather applications to ecommerce platforms and fun
        games, each project represents a unique challenge and accomplishment.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={weatherImg} title="Weather App" />
        <ProjectItem img={ecommerceImg} title="Ecommerce Platform" />
        <ProjectItem img={gameImg} title="Tic Tac Toe" />
        <ProjectItem img={bookingImg} title="Booking System" />
      </div>
    </div>
  );
};

export default Projects;
