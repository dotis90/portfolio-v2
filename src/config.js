const heroInfo = {
  firstName: "Daniel",
  lastName: "Otis",
  devDesc: "| Programmer | Web Developer | Game Designer | Writer | Teacher ",
  icons: [
    {
      id: 0,
      image: "fa-github",
      url: "https://github.com/dotis90",
      style: "socialicons",
    },
    {
      id: 1,
      image: "fa-facebook",
      url: "https://www.facebook.com/dan.otis.10420",
      style: "socialicons",
    },
    {
      id: 2,
      image: "fa-google",
      url: "mailto:dotis90@gmail.com",
      style: "socialicons",
    },
    {
      id: 3,
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/daniel-otis-542043113/",
      style: "socialicons",
    },
    {
      id: 4,
      image: "fa-twitter",
      url: "https://www.twitter.com/Dotis90/",
      style: "socialicons",
    },
  ],
};

const skills = [
  {
    title: "Full Stack Development",
    image: "skillImage.svg",
    descriptions: [
      "✔️ Build highly attractive user interfaces for mobile and web applications",
      "✔️ Design fast and powerful back-end applications and web servers",
      "✔️ Consistently up to date with the newest and best tools for development",
      "✔️ Experience with cloud platforms-- AWS Cloud Practitioner Certified",
    ],
    softwareSkills: [
      {
        skillName: "HTML5",
        fontAwesomeClassname: "simple-icons:html5",
        style: {
          color: "#E34F26",
        },
      },
      {
        skillName: "CSS3",
        fontAwesomeClassname: "fa-css3",
        style: {
          color: "#1572B6",
        },
      },
      {
        skillName: "Sass",
        fontAwesomeClassname: "simple-icons:sass",
        style: {
          color: "#CC6699",
        },
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "simple-icons:javascript",
        style: {
          backgroundColor: "#000000",
          color: "#F7DF1E",
        },
      },
      {
        skillName: "ReactJS",
        fontAwesomeClassname: "simple-icons:react",
        style: {
          color: "#61DAFB",
        },
      },
      {
        skillName: "NodeJS",
        fontAwesomeClassname: "simple-icons:node-dot-js",
        style: {
          color: "#339933",
        },
      },
      {
        skillName: "NPM",
        fontAwesomeClassname: "simple-icons:npm",
        style: {
          color: "#CB3837",
        },
      },
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "simple-icons:mongodb",
        style: {
          color: "#47A248",
        },
      },
      {
        skillName: "Gatsby",
        fontAwesomeClassname: "simple-icons:gatsby",
        style: {
          color: "#663399",
        },
      },
      {
        skillName: "AWS",
        fontAwesomeClassname: "simple-icons:amazonaws",
        style: {
          color: "#FF9900",
        },
      },
    ],
  },
];

export { heroInfo, skills };
