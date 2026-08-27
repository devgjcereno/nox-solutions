import { useState } from "react";
import ProjectCards from "../components/ProjectCards.jsx";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("WEB");

  const projectsData = {
    WEB: [
      {
        title: "E-BUKSAN",
        description:
          "A gamified learning platform for high school students. Watch lesson videos, take quizzes, and earn points to upgrade a virtual pet.",
      },
      {
        title: "Portfolio Dashboard",
        description:
          "Interactive analytics dashboard built with modern web technologies for tracking user metrics.",
      },
      {
        title: "ShopNox",
        description:
          "A full-featured online e-commerce platform with a seamless shopping cart experience.",
      },
    ],
    APP: [
      {
        title: "NurSense",
        description:
          "An app for nursing students to take quizzes, review answers, and strengthen knowledge across nursing topics. Built for exam prep and daily practice.",
      },
      {
        title: "TaskFlow Mobile",
        description:
          "Mobile productivity app designed for tracking daily tasks and setting high priority reminders.",
      },
      {
        title: "FitPulse",
        description:
          "Real-time health and workout tracking application designed for active mobile users.",
      },
    ],
    BUILDS: [
      {
        title: "Arithmetic Intelligence",
        description:
          "A specialized computational workstation built for high-speed mathematical modeling and data tasks.",
      },
      {
        title: "Liquid Rig V1",
        description:
          "High-performance liquid-cooled custom PC built for 3D rendering, video editing, and gaming.",
      },
      {
        title: "Nox Server Node",
        description:
          "Compact, quiet server build configured for local network file management and virtualization.",
      },
    ],
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
