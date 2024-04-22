import React from "react";
import SectionHeading from "../components/section-heading";
import { projectsData } from "../lib/data";
import Project from "../components/project";
import { useActiveSection } from "../signals/active-section-signal";
export default function Projects() {
  const ref = useActiveSection("Projects");
  return (
    <section id="projects" className="scroll-mt-28 mb-28"
      ref={ref}
    >
      <SectionHeading><span className="text-5xl">My projects</span></SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
