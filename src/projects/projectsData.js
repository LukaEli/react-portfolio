import projectOne from "../assets/project-11.png";
import projectTwo from "../assets/project-22.png";
import projectThree from "../assets/project-33.png";
import projectFour from "../assets/Youtube.png";

const projects = {
  1: {
    title: "Youtube Clone",
    image: projectFour,
    description: (
      <>
        <p>
          YouTube clone built using React, designed to replicate the core
          functionalities of the popular video-sharing platform. It features a
          responsive user interface, dynamic video browsing, and playback
          capabilities. The application utilizes React's component-based
          architecture to manage state efficiently, ensuring smooth video
          loading and seamless user experience. Key features include a custom
          video player and video recommendations. This project demonstrates the
          power of React in building scalable and interactive web applications.
        </p>
      </>
    ),
    github: "https://github.com/LukaEli/Youtube-Clone",
    demo: "https://test1532.netlify.app/",
  },
  2: {
    title: "News API",
    image: projectOne,
    description: (
      <>
        <p>
          Applied learning to build a fully-tested back-end development project.
          The purpose of the Node API was to allow users to manipulate data,
          including articles, topics, user accounts, and user comments on a
          fictitious news website.
        </p>
      </>
    ),
    github: "https://github.com/CloneTrooper66/Project",
    demo: "https://project-i8u3.onrender.com/api",
  },
  3: {
    title: "NC NEWS",
    image: projectTwo,
    description: (
      <>
        <p>
          Successfully built on my API with my front-end development project.
          This application allows users to filter through a database of articles
          and allows visitors to vote and comment on articles.
        </p>
      </>
    ),
    github: "https://github.com/CloneTrooper66/nc_news",
    demo: "https://brilliant-d6ad17.netlify.app/",
  },
  4: {
    title: "Limoney",
    image: projectThree,
    description: (
      <>
        <p>
          Teamed up to plan and develop a full-stack application aimed at
          teaching essential skills such as budgeting and money management. This
          educational game app is designed to engage young entrepreneurs in a
          fun and interactive way.
        </p>
      </>
    ),
    github: "https://github.com/joao-ponte/limoney",
    demo: "https://github.com/joao-ponte/limoney",
  },
};

export default projects;
