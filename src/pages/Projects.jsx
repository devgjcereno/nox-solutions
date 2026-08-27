import { useState } from "react";
import ProjectCards from "../components/ProjectCards.jsx";
import ebuksanPic from "../assets/e-buksan.svg";
import nursensePic from "../assets/nursense.png";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("WEB");

  const projectsData = {
    WEB: [
      {
        title: "E-BUKSAN",
        description:
          "A gamified learning platform for high school students. Watch lesson videos, take quizzes, and earn points to upgrade a virtual pet.",
        image: ebuksanPic,
      },
    ],
    APP: [
      {
        title: "NurSense",
        description:
          "An app for nursing students to take quizzes, review answers, and strengthen knowledge across nursing topics. Built for exam prep and daily practice.",
        image: nursensePic,
      },
      {
        title: "Arithmetic Intelligence",
        description:
          "A specialized computational workstation built for high-speed mathematical modeling and data tasks.",
      },
    ],
    BUILDS: [],
  };

  return (
    <section
      id="projects"
      className="min-h-196.25 py-20 px-8 md:px-24 flex flex-col justify-center bg-[#FAFAFA] text-black"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Centered Section Heading */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-center font-mono">
          Projects we've Build
        </h2>

        {/* Centered Filter Pills */}
        <div className="flex gap-1 bg-[#121212] text-white p-1.5 rounded-full mb-16 shadow-md">
          {["WEB", "APP", "BUILDS"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-black shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Three-Column Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {projectsData[activeTab].map((project, index) => (
            <ProjectCards
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
