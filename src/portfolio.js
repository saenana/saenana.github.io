/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Senna Na",
  title: "Hello, I'm Senna",
  subTitle: emoji(
    "Welcome to my portfolio showcasing some of my robotics, machine learning, mechatronics, and mechanical engineering projects."
  ),
  resumeLink: require("./assets/files/NaSenna_Resume.pdf"), // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/saenana/",
  github: "https://github.com/saenana",
  gmail: "sn2943@columbia.edu",
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
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mechatronics Design Engineer",
      company: "ASML",
      companylogo: require("./assets/images/icon-asml.png"),
      date: "Jan 2020 – Present",
      desc: " "
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      role: "Hydraulics and Landing Gear Intern",
      company: "Honda Aircraft Company",
      companylogo: require("./assets/images/icon-honda.png"),
      date: "May 2018 – Aug 2018",
      desc: " "
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: " ",
  projects: [
    {
      image: require("./assets/images/sfm.png"),
      projectName: "SfM: 3D Reconstruction from 2D Images",
      projectDesc:
        "Exploring the Structure from Motion (SfM) pipeline for the 2024 Image Matching Challenge",
      footerLink: [
        {
          name: "4-page report",
          url: require("./assets/files/sfm-report.pdf")
        },
        {
          name: "Competition link (Kaggle)",
          url: "https://www.kaggle.com/competitions/image-matching-challenge-2024/overview"
        }
      ]
    },
    {
      image: require("./assets/images/evolving-robots.png"),
      projectName: "Evolutionary Algorithms",
      projectDesc:
        "Using an evolutionary algorithms to optimize robot speed throughout epochs in C++, using the Titan package",
      footerLink: [
        {
          name: "10-sec demo",
          url: "https://youtu.be/yHAm-wvp20A"
        }
      ]
    },
    {
      image: require("./assets/images/catbot.png"),
      projectName: "Catbot",
      projectDesc:
        "Designed, 3D-printed, assembled electronics, and developed software for a quadruped walking robot.",
      footerLink: [
        {
          name: "5-min journey video",
          url: "https://youtu.be/nrEPlOXd7_k"
        }
      ]
    },
    {
      image: require("./assets/images/rr.png"),
      projectName: "Shell Eco-Marathon",
      projectDesc:
        "Designed, manufactured, and competed with a high-efficiency electric vehicle with a team of ~25 members.",
      footerLink: [
        {
          name: "Cornell Electric Vehicles website",
          url: "https://cev.engineering.cornell.edu/#/competition"
        }
      ]
    },
    {
      image: require("./assets/images/gen-design.png"),
      projectName: "Generatively Designed Brake Pedal",
      projectDesc:
        "Designed and metal printed (DMLS) a lightweight brake pedal for the high efficiency electric vehicle",
      footerLink: [
        {
          name: "5-page report",
          url: require("./assets/files/gen-design-report.pdf")
        }
      ]
    },
    {
      image: require("./assets/images/robotlearning-img.png"),
      projectName: "Triple Pendulum: Neural Net vs MPC",
      projectDesc:
        "Compared the performance of a classical neural network vs from model predictive control for solving the double pendulum problem.",
      footerLink: [
        {
          name: "18-page learnings slide deck",
          url: require("./assets/files/robotlearning-ppt.pdf")
        }
      ]
    },
    {
      image: require("./assets/images/amr.png"),
      projectName: "SLAM with Waypoint Navigation",
      projectDesc:
        "Programmed an iRobot Roomba to perform SLAM and navigate a maze to hit as many waypoints in the shortest possible route",
      footerLink: [
        {
          name: "4-page report",
          url: require("./assets/files/amr-report.pdf")
        }
      ]
    },
    {
      image: require("./assets/images/rr-steering-proto.png"),
      projectName: "Steering System Prototype",
      projectDesc:
        "Designed the parameters for a steering system by calculating optimal steering ratios in MATLAB, and manufactured a prototype for testing"
    },
    {
      image: require("./assets/images/comp-stops.png"),
      projectName: "Composite Stops for Bipedal Robot",
      projectDesc:
        "Designed and manufactured composite stops via 3D-printed molds and two-part foam to use as a mechanical knee buffer for a bidepal robot",
      footerLink: [
        {
          name: "10-page report",
          url: require("./assets/files/comp-stops-report.pdf")
        }
      ]
    },
    {
      image: require("./assets/images/carbon-fiber.png"),
      projectName: "Carbon Fiber Imaging",
      projectDesc:
        "Prepped a sample of carbon fiber nanotube via hydraulic press mounting and performed CT scan and miscroscope analysis"
    },

    {
      image: require("./assets/images/motor-dyno.png"),
      projectName: "Motor Dynamometer",
      projectDesc:
        "Designed the CAD for a strain-gauge motor dynamometer to identify the torque vs rotational velocity curve for the motor"
    },
    {
      image: require("./assets/images/mechatronics.png"),
      projectName: "Cube Collecting Robot",
      projectDesc:
        "Designed and built a 2-wheel robot, including an H-bridge circuit for PWM motor control, to collect more cubes than the opponent"
    },
    {
      image: require("./assets/images/veggie-chopper2.png"),
      projectName: "Acrylic Laser-cut Vegetable Chopper",
      projectDesc:
        "Designed and manufactured an acrylic vegetable chopper using a cam-gear system in 3-week project timeline"
    },
    {
      image: require("./assets/images/outreach.png"),
      projectName: "Outreach",
      projectDesc:
        "Encouraging STEM participation in local high schools by demoing engineering tests and applications",
      footerLink: [
        {
          name: "News article",
          url: "https://www.ctinsider.com/news/thehour/article/Norwalk-robotics-team-gets-inside-look-of-15084347.php"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Other Work",
  subtitle: " ",

  achievementsCards: [
    {
      title: "Outreach",
      subtitle:
        "Encouraging STEM participation in local high schools by demoing engineering tests and applications",
      image: require("./assets/images/outreach.png"),
      footerLink: [
        {
          name: "News article",
          url: "https://www.ctinsider.com/news/thehour/article/Norwalk-robotics-team-gets-inside-look-of-15084347.php"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Columbia University",
      logo: require("./assets/images/columbia-logo.png"),
      subHeader:
        "Master of Science in Mechanical Engineering (Robotics and Controls)",
      duration: "2021 - 2025",
      desc: "Attending while working full-time"
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "Cornell University",
      logo: require("./assets/images/cornell-logo.png"),
      subHeader: "Bachelor of Science in Mechanical Engineering",
      duration: "2016 - 2019",
      desc: "Summa cum laude. Accelerated studies and graduated in 6 semesters."
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Information",
  subtitle: "",
  number: "(607) 280-4691",
  email_address: "sn2943@columbia.edu"
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
  techStack,
  bigProjects,
  achievementSection,
  educationInfo,
  workExperiences,
  openSource,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
