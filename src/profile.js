//website animations
const animation = {
    animate: true,
    duration: 750,
    once: false,
  };
  const header = {
    name: "Kashish Verma",
  };
  const background = {
    type: "Snow",
  };
  //about
  const section2title = "About Me";
  const about = {
    paragraph:
      "Hello! I’m Kashish Verma, a dedicated Computer Science and Engineering student at the National Institute of Technology, Patna, one of India’s premier technical institutions. With a passion for cutting-edge technology and a commitment to excellence, I am enthusiastic about leveraging my software engineering skills to contribute meaningfully to innovative projects. Throughout my academic journey, I have built a solid foundation in a diverse array of programming languages, tools, and technologies. My coursework and hands-on projects have equipped me with the knowledge and experience to tackle complex challenges and drive impactful solutions. I am eager to bring my skills to new opportunities and contribute to the success of forward-thinking organizations. I am committed to continuous learning and growth, aiming to become a valuable asset in the tech industry. Feel free to explore my portfolio to see some of the exciting projects I've worked on and connect with me to discuss potential collaborations or opportunities.",
  };
  // skill
  const skillsBar = [
    {
      name: "HTML5",
      faClass: "fab fa-html5",
    },
    {
      name: "CSS3",
      faClass: "fab fa-css3",
    },
    {
      name: "Javascript",
      faClass: "fab fa-js",
    },
    {
      name: "ReactJs",
      faClass: "fab fa-react",
    },
    {
      name: "Node",
      faClass: "fab fa-node",
    },
    {
      name: "Python",
      faClass: "fab fa-python",
    },
    {
      name: "Java",
      faClass: "fab fa-java",
    },
    {
      name: "Express.js",
      faClass: "fas fa-server",
    },
    {
      name: "Database",
      faClass: "fas fa-database",
    },
    {
        name: "Next.js",
        faClass: "fab fa-diagram", 
      },
      {
        name: "GitHub",
        faClass: "fab fa-github",
      },
      {
        name: "Bootstrap",
        faClass: "fab fa-bootstrap",
      },
      {
        name: "Figma",
        faClass: "fab fa-figma",
      },
      {
        name: "Power BI",
        faClass: "fas fa-chart-bar", 
      },
      {
        name: "C++",
        faClass: "fas fa-code", 
      },
      {
        name: "Data Structres nd Algorithm",
        faClass: "fas fa-cubes", 
      },
  ];

  // projects
  const section3Title = "Past Projects";
  const projects = [
    {
      id: "project1",
      name: "SmartPing",
      skills: ["ReactJS, NodeJS, MongoDB, Gemini AI, Weather API, Express, HTML, CSS, JS"],
      url: "https://github.com/Kash04ish/SmartPing",
    },
    {
      id: "project2",
      name: "Earlyvision",
      skills: ["TensorFlow, Keras, ReactJS, NodeJS, Flask, NumPy, Pandas , MongoDB, HTML, CSS, JS"],
      url: "https://github.com/Kash04ish/earlyvision",
    },
    {
      id: "project3",
      name: "Web Scraping",
      skills: ["Python, BeautifulSoup, requests, NumPy, Pandas"],
      url: "https://github.com/Kash04ish/PRODIGY_SD_05",
    },
    {
      id: "project4",
      name: "Delphi-clone",
      skills: [" React, Vite, JavaScript, CSS, HTML, Gemini API, HTML, CSS, JS"],
      url: "https://github.com/Kash04ish/delphi-clone",
    },
    {
      id: "project5",
      name: "Collaboration in GDSC",
      skills: ["HTML, CSS, JS, React"],
      url: "https://github.com/Kash04ish/CampGround",
    },
    {
      id: "project6",
      name: "Contact Management System",
      skills: ["Python, tkinter"],
      url: "https://github.com/Kash04ish/PRODIGY_SD_03",
    },
  ];
  //experience 
  const section4Title = "Experience";
  const experience = [
    {
      id: "misc1",
      name: "StarStrucks Tech (Kubair) - SDE Backend",
      url: "https://github.com/StarStrucks-Tech/Rinnegan",
      description: `
      Responsibilities:
                - Currently developing and implementing Golang Protocol Buffers to streamline data serialization.
                - Ensuring efficient data communication across different services.
                - Writing and maintaining clean, reusable, and well-documented code.`,
    },
    {
      id: "misc2",
      name: "Prodigy Infotech (SDE Intern)",
      url: "https://www.linkedin.com/posts/kashish-verma-307308257_prodigyinfotech-activity-7212839856949932032-DJ8g?utm_source=share&utm_medium=member_desktop",
      description: `
                Skills Gained:
                - Acquired practical experience in software development and programming.
                - Enhanced skills in data extraction and manipulation through web scraping.
                - Developed problem-solving abilities by addressing real-world challenges.
                - Improved proficiency in using Python for creating and optimizing software applications.
            `,
    },
    {
      id: "misc3",
      name: "GDSC Nit Patna (Web Team)",
      url: "https://github.com/Kash04ish/gdsc_assign1",
      description: `
        Achievements:
        -Ensured project milestones were met through effective teamwork and contribution to both frontend and backend development tasks.
        -Enhanced teamwork and collaboration skills, resulting in successful project completion and a positive impact on the college's resource management system.`,
    },
  ];
  // Contact 
  const section5Title = "Get in Touch";
  const contact = {
    pitch:
      "I’d love to hear from you! Whether you have questions about my work, want to discuss a potential collaboration, or just want to connect, feel free to reach out. Looking forward to connecting!",
    copyright: "Kashish Verma",
    contactUrl: "https://formspree.io/f/mnnavaaw",
  };
  // social media links
  const social = {
    github: "https://github.com/Kash04ish",
    // instagram: "https://instagram.com",
    linkedin: "https://linkedin.com/in/kashish-verma-307308257/",
    resume: "https://drive.google.com/file/d/1wGsxhAIUfBaG-fj7LiZtvTtksQi2cX8y/view?usp=drivesdk",
  };

  export {
    animation,
    header,
    background,
    about,
    skillsBar,
    projects,
    experience,
    contact,
    social,
    section2title,
    section3Title,
    section4Title,
    section5Title,
  };
  