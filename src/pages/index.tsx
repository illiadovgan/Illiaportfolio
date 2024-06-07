import type { NextPage } from "next";
import Project from "./components/Project";
import { SiGithub, SiGmail } from "react-icons/si";
import React from "react";

const Home: NextPage = () => {
  return (
      <main className="text-base mx-auto mt-8 max-w-4xl p-2 md:mt-12">
        <div>
          <h1 className="text-xl md:text-xl">
            hey, i&apos;m <span className="">illia</span>
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base">
            i&apos;m a odessa-based developer with a BS in computer science
            from uci. i&apos;m a big fan of all things full stack whether it be
            writing APIs in python or designing a responsive front
            end with react.js. i like movies, sushi, and the la rams.
          </p>

          <div className="mt-6 flex space-x-6 text-xl underline md:space-x-10 md:text-2xl">
            <a
              href="https://github.com/illiadovgan"
              target="_blank"
              className="hover:scale-110 transition ease-in-out duration-150"
            >
              <SiGithub></SiGithub>
            </a>
            <a
              href="mailto:dovganilla841@gmail.com"
              className="hover:scale-110 transition ease-in-out duration-150"
            >
              <SiGmail></SiGmail>
            </a>
          </div>
        </div>
       
      
        <h1 className="mt-14 mb-3 text-base md:mt-16 md:mb-4 md:text-lg">
          projects ~
        </h1>
        <div className="grid grid-cols-1 gap-2 mb-12 sm:gap-3 sm:grid-cols-2">
          <Project
            title="🍻 pdxshootings"
            description="Mapbox visualization of PPB reported shootings in Portland, OR"
            gh_url="https://github.com/illiadovgan/pdxshootings"
            proj_url="https://pdxshootings.vercel.app/"
          ></Project>
          <Project
            title="🔎 CarParkFinder"
            description="a simple web application aimed at creating a map-based tool for drivers in Singapore to find available parking lots easily."
            gh_url="https://github.com/illiadovgan/carparkfinder"
            proj_url="https://wheretopark.netlify.app/"
          ></Project>
          <Project
            title="🌐 Seven Omega"
            description="Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5"
            gh_url="https://github.com/illiadovgan/Youtube-clone"
            proj_url="https://youtube-clone-seven-omega.vercel.app/"
          ></Project>

        </div>
      
        
      </main>
  );
};

export default Home;
