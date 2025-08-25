import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};


const illustration = {
  animated: true
};

const greeting = {
  username: "Kailashsinh",
  title: "Hi all, I'm Kailashsinh Rajput",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building WebSites and web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Kailashsinh/",
  linkedin: "https://www.linkedin.com/",
  gmail: "kailashsinhrajput25@gmail.com",
  gitlab: "https://gitlab.com/kailashsinhrajput25/",
  instagram: "https://www.instagram.com/kailashsingh_banna_2609?igsh=MmdjaHZ2eGc2anNj",
  medium: "https://medium.com/@kailashsinhrajput25",
  stackoverflow: "https://stackoverflow.com/users/31252710/kailashsinh-rajput",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Amezon web services (AWS)"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "GLS University",
      logo: require("./assets/images/gls.jpg"),
      subHeader: "Master of Computer Applications",
      duration: "July 2026 - April 2028",
      desc: "",
      descBullets: [
        "As soon as I graduate bachelors, I'll mention my progress."
      ]
    },
    {
      schoolName: "GLS University",
      logo: require("./assets/images/GLS_University_logo.png"),
      subHeader: "Bachelor of Computer Applications",
      duration: "June 2023 - April 2026",
      desc: "Ranked in the top 10% of both the program and the university's exams; completing courses in web development, networking, computer fundamentals, and operating systems.",
      descBullets: ["Semester-1: 8 CGPA | semester-2: 8.2 CGPA",
                    "Semester-3: 9 CGPA | Semester-4: 8.7 CGPA",
                    "Semester-5: -Soon- | Semester-6: -Soon-"]
    }
  ]
};



const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "backend ER.-intern",
      company: "Google-Summer Of Code",
      companylogo: require("./assets/images/google.png"),
      date: "November 2024",
      desc: "solved backend challenges",
      descBullets: [
        "Optimizing database queries and improving API performance Submitted in LibreHealth",
        "Submmited fixed code of server-side bugs in OpenMRS",
        "Submited robust backend modules for efficient signal processing workflows in GNU Radio"
      ]
    },
    {
      role: "Front-End Developer-Freelancer",
      company: "Freelance-sansole EDU.",
      companylogo: require("./assets/images/in round shape sansole education's logo in purple theme.jpg"),
      date: "june-2025",
      desc: "I developed a responsive coaching website for Sansole Education, featuring course details, enrollment forms, and resource management. The platform is designed to provide an easy-to-navigate interface for students and admins to manage classes efficiently."
    }
  ]
};


const openSource = {
  showGithubProfile: "true",
  display: true 
};

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/softFind.jpg"),
      projectName: "Software-Finder",
      projectDesc: "A web-site for Find/Download any OS and also with Application Download Feature",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://software-finder-flax.vercel.app/"
        },
        {
          name: "GiTHub Source Code",
          url: "https://github.com/Kailashsinh/software-finder"
        }
      ]
    },
    {
      image: require("./assets/images/cohort.jpg"),
      projectName: "Cohort - Web for Coaching center",
      projectDesc: "coaching website for Sansole Education, featuring course details, enrollment forms, and resource management. The platform is designed to provide an easy-to-navigate interface for students and admins to manage classes efficiently",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://coaching-web-by-kailashsinh.vercel.app/"
        },
        {
          name:"GiTHub Source Code",
          url:"https://github.com/Kailashsinh/coachingWeb"
        }
      ]
    }, {
      image: require("./assets/images/netflix.jpg"),
      projectName: "Netflix clone",
      projectDesc: "A clone page for Front-end tech. to show clone UI/Ux of netflix of Desktop",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflix-homepage-gold.vercel.app/"
        },
        {
          name:"GiTHub Source Code",
          url:"https://github.com/Kailashsinh/netflix-homepage"
        }
      ]
    }
  ],
  display: true
};


const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Summer Of Code",
      subtitle:
        "Google summer of code participation in three project's task for backend bugs.",
      image: require("./assets/images/GOSC.png"),
      imageAlt: "Google Summer Of Code Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ttoREgZ_5PhAptZ2YKq-5qrbLMd8pJS7/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1V0yxXcP0OpilrlyP45AoX7eAwN9nZRnF/view?usp=sharing"
        },
      ]
    },
    {
      title: "Devfolio Techathon 2024",
      subtitle:
        "Developed a web-site name [ software downloader ] for operating software of MaC/Windows/Linux at First Year of Graduation(UG)",
      image: require("./assets/images/dev.png"),
      imageAlt: "Devfolio Logo",
      footerLink: [
        {
          name: "View Submmited project",
          url: "https://devfolio.co/projects/software-downloder-c8ad"
        }
      ]
    },

    {
      title: "Centre for Development of Advanced Computing",
      subtitle: "Completed a professional diploma from CDAC (2021-2022) covering computer fundamentals, operating systems, office automation, multimedia, and practical computer skills.",
      image: require("./assets/images/cdac.jpg"),
      imageAlt: "CDAC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kxr5fKSyJJbUBwwqCx3FrlKJ6tAB5li1/view?usp=sharing"
        }
      ]
    }
  ],
  display: true 
};


const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "",
      title: "How i become the developer?",
      description:
        "That story started in 9th std, when I was a dumb student and teachers said I didn’t even have a chance to pass the exams."
    },
    {
      url: "",
      title: "How i become the developer? PART-2",
      description:
        "And these lines are hitting hard...I prepared for the exams, but I didn’t get the marks I expected."
    },
    {
      url: "",
      title: "How i become the developer? PART-3",
      description:
        "The same thing happened in 11th and 12th. I feel like giving up, but there’s one person who motivates and supports me."
    },
    {
      url: "",
      title: "How i become the developer? PART-4",
      description:
        "That person believes in me more than anyone else, and because of them, I’m now a scholar and a good developer—but…..."
    },
      {
      url: "",
      title: "How i become the developer? PART-5",
      description:
        "But unfortunately, I lost that one person, and from then on, no matter what happened in life, I kept coding and bettering myself."
    },
    {
      url: "",
      title: "Moral of the story",
      description:
        "Never give up until you achieve your goal. Then keep going until you become the best version of yourself."
    }    
  ],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9712360092",
  email_address: "kailashsinhrajput25@gmail.com"
};


const twitterDetails = {
  userName: "twitter",
  display: false 
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

