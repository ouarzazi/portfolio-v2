import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import d3jsCsvVis from "/demo_d3js.png";
import sudoku from "/sudoku.png";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import sololearn from "/sololearn.png"
import cdiscount from "/cdiscount.png"
import crm from "/crm.png"
import acwapower from "/acwapower.png"



export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Certifications",
    hash: "#certifications"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Education",
    hash: "#education"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;

export const certificationsData = [
  {
    title: "Intermediate Python",
    description:
      "Intermediate Python on sololearn",
    date: "March 2023",
    link: "https://drive.google.com/file/d/1_c86W_elfsZiz5CMyKTU1TFYE96p7wfs/view?usp=sharing",
    icon: sololearn
  }
] as const;

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohamed-a-506648169/",
    icon: FaLinkedin
  },
  {
    name: "GitHub",
    url: "https://github.com/ouarzazi",
    icon: FaGithub
  },
  {
    name: "Email",
    url: "mailto:mohamedaittakniouine@outlook.com",
    icon: IoMail
  },
  {
    name: "Medium",
    url: "https://medium.com/@mohamedaittakniouine",
    icon: FaMedium
  }
] as const;

export const experiencesData = [
  {
    Company: "Cdiscount",
    title: "Data Scientist/Engineer-Intern",
    location: "Bordeaux, France",
    description:`

- Development of a customer research guide using Snowflake, Datahub, and Luigi.
- Using Python and SQL for queries on Snowflake, as well as LLM and our product ranking model via an LTR approach.
- Performing statistical tests and working on natural language processing (NLP) with Python APIs for LLM.
- Integration and deployment of the project with Docker, CI/CD, and Kubernetes, ensuring version control with Git.

**Skills:** Python, Pandas, SQL, Streamlit, Snowflake, Git, Kubernetes, NLP, Luigi, Datahub, JIRA, Azure.
`,
    icon: React.createElement(CgWorkAlt),
    date: "JAN. 2024 - JUN. 2024",
    logo: cdiscount 
  },
  {
    Company: "Centre de Recerca Matematica",
    title: "Data Scientist-Intern",
    location: "Barcelone, Espagne",
    description:
      `
- Proficiency in the DeepLabCut machine learning tool for animal behavior analysis.
- Application of machine learning skills to accurately predict rats' perceptual decisions.
- Development of an RNN model to predict rats' choices at the end of the task.

**Skills:** DeepLearning, Anomaly Detection, Git, TensorFlow, Python, Pandas, NumPy, PyTorch.
`,
    icon: React.createElement(CgWorkAlt),
    date: "MAY 2023 - AUG. 2023",
    logo: crm
  },
  {
    Company: "AcwaPOWER",
    title: "Data Scientist/Engineer-Intern",
    location: "Ouarzazate, Maroc",
    description:
      `
- Study of the different computer components of the solar station.
- Data analysis for improving the energy efficiency of the NOOR III solar station.
- Modeling and statistical analysis work to optimize station operations.

**Skills:** Machine Learning, Git, Github, Python, Pandas, NumPy.
`,
    icon: React.createElement(CgWorkAlt),
    date: "JUL. 2022 - AUG. 2022",
    logo: acwapower 
  }

] as const;

export const projectsData = [
  {
    title: "UDP & TCP Chat",
    description: `This project is a Network Communication using UDP and TCP protocols. It includes both server and client implementations for both UDP and TCP, along with a multi-threaded TCP server.`,
    tags: ["UDP", "TCP","JAVA"],
    icons: ["logos:java"],
    imageUrl: d3jsCsvVis,
    githubLink: "https://github.com/ouarzazi/JAVA_UDP_TCP_Chat"
  },

  {
    title: "Sudoku Solver",
    description: `This Python project provides a Sudoku solver that utilizes a recursive backtracking algorithm. The program is designed to take a partially filled Sudoku grid as input and return the solved puzzle.`,
    tags: ["PYTHON", "STREAMLIT"],
    icons: ["logos:python","logos:streamlit"],
    imageUrl: sudoku,
    githubLink: "https://github.com/ouarzazi/sudoku_solver"
  },
  
] as const;
