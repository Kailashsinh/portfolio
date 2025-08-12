/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kailashsinh",
  title: "Hi all, I'm Kailashsinh Rajput",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building WebSites and web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kailashsinh/",
  linkedin: "https://www.linkedin.com/",
  gmail: "kailashsinhrajput25@gmail.com",
  gitlab: "https://gitlab.com/kailashsinhrajput25/",
  instagram: "https://www.instagram.com/kailashsingh_banna_2609?igsh=MmdjaHZ2eGc2anNj",
  medium: "https://medium.com/@kailashsinhrajput25",
  stackoverflow: "https://stackoverflow.com/users/31252710/kailashsinh-rajput",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

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

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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
                    "Semester-4: -Soon- | Semester-6: -Soon-"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "backend ER.-intern",
      company: "Google-Summer Of Code",
      companylogo: require("./assets/images/google.png"),
      date: "November 2024",
      desc: "solved backend challenges",
      descBullets: [
        "Optimizing database queries and improving API performance in LibreHealth",
        "fixed server-side bugs in OpenMRS",
        "Developed robust backend modules for efficient signal processing workflows in GNU Radio"
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

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
        //  you can add extra buttons here.
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
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

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
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1V0yxXcP0OpilrlyP45AoX7eAwN9nZRnF/view?usp=drive_link"
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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "How i become the developer?",
      description:
        "that story start from 9th std when i was dum student, teachers said there is not even chance to passout boards for me,and this lines hitting hard...and i prepared for exams"
    },
    {
      url: "",
      title: "How i become the developer? PART-2",
      description:
        "but i did't get that level marks much i expact also same condition in 11th & 12th i feel i should give up but here One special person who motivate me and support me also."
    },
    {
      url: "",
      title: "How i become the developer? PART-3",
      description:
        "that person belive in me more than my parents, therefore now i'm a scholar student and also good developer but.........."
    },
    {
      url: "",
      title: "How i become the developer? PART-4",
      description:
        "but unfortunately i lose that One Person and i never get back in life !! Story end thanks to that one person"
    }    
  ],
  display: true // Set false to hide this section, defaults to true .
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9712360092",
  email_address: "kailashsinhrajput25@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
