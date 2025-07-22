import laptop1 from "../assets/projects/laptop1.jpg";
import expense from "../assets/projects/expense.png";
import { getExperienceYears } from "../utils/experienceYears";

export const HERO_CONTENT = {
  description: `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With ${getExperienceYears()}+ years of hands-on experience, I have industrial knowledge of technologies such as React,js, Node,js, MongoDB, GraphQL, REST API etc to build scalable full stack apllications. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`,
  resumeLinkText: "Download Resume",
  resumeLink: "../assets/My_Resume.pdf",
  cvText: "Online CV",
};

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated full stack developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow, and I am proficient in solving data structures and algorithms, which I enjoy as part of my problem-solving toolkit.",
  ],
};

export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#technologies", label: "Technologies" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Senior Solution Engineer",
    company: "IBS Software.",
    description: `Developed and maintained internal developer applications, enhancing system stability by 25% through bug fixes and support. Led UI design for client dashboards to improve user experience and collaborated on new SSO authentication integration. Migrated legacy systems to GitHub Actions, reducing deployment time by 20%.`,
    technologies: [
      "Typescript",
      "React.js",
      "Apollo GraphQL",
      "MongoDB",
      "Jest",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Expense GQL",
    image: expense,
    url: "https://github.com/rav3-S/expense-gql",
    description:
      "A full-stack expense management web application using GraphQL APIs, resulting in optimized data fetching and enhanced user experience. Integrated data visualization using charts to present real-time financial insights for users",
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "GraphQL"],
  },
  {
    title: "Portfolio Website",
    image: laptop1,
    url: "https://github.com/rav3-S/portfolio",
    description:
      "This portfolio site right here. Built with React and framer motion for showcasing my ablities. Features responsive design with animations for a smooth and modern user experience.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer Motion"],
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "ravishankar.ma34@gmail.com",
  socialLinks: [
    // {
    //   platform: "Twitter",
    //   url: "https://twitter.com/yourprofile",
    //   ariaLabel: "Follow me on Twitter",
    //   icon: "RiTwitterXFill",
    // },
    {
      platform: "GitHub",
      url: "https://github.com/rav3-S",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ma-ravishankar/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} M A Ravishankar. All rights reserved.`,
};
