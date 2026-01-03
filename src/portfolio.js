
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import portfolioData from "./data/portfolio.json";

// Import images/assets
import siemensLogo from "./assets/images/siemensLogo.png";
import csElectricLogo from "./assets/images/C&SElectricLogo.png";
import iHubLogo from "./assets/images/iHubDivyaLogo.png";
import projectPlaceholder from "./assets/images/projectPlaceholder.png";
import certification from "./assets/images/certification.png";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: portfolioData.personal_information.name,
  title: `Hi all, I'm ${portfolioData.personal_information.name}`,
  subTitle: emoji(
    "A dedicated Electrical Engineer and Technical Sales Professional ⚡ with expertise in high-voltage systems, industrial automation, and bid management. Passionate about sustainable energy solutions and engineering excellence."
  ),
  resumeLink: "", // Not provided in JSON
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: portfolioData.personal_information.email,
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // To show email at least
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "ENGINEERING SOLUTIONS | TECHNICAL SALES | SUBSATION AUTOMATION",
  skills: [
    emoji(
      "⚡ Manage high-voltage substation tenders and ensure technical compliance"
    ),
    emoji("⚡ Design and simulate automation systems using PLC and SCADA"),
    emoji(
      "⚡ Optimize bid strategies and coordinate cross-functional teams for major projects"
    ),
    emoji("⚡ Implement sustainable energy solutions including piezoelectric harvesting")
  ],

  softwareSkills: [
    {
      skillName: "PLC Programming",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "High Voltage",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "AutoCAD",
      fontAwesomeClassname: "fas fa-drafting-compass"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "HTML/CSS",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Project Management",
      fontAwesomeClassname: "fas fa-tasks"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: portfolioData.education.map(edu => ({
    schoolName: edu.institution,
    logo: projectPlaceholder, // Placeholder logo
    subHeader: edu.degree,
    duration: `${edu.start_date} - ${edu.end_date}`,
    desc: `Grade: ${edu.final_grade}`,
    descBullets: [edu.field]
  }))
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Technical Sales & Tendering",
      progressPercentage: "90%"
    },
    {
      Stack: "PLC & Industrial Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "High-Voltage Systems",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: portfolioData.work_experience.map(exp => {
    let logo = projectPlaceholder;
    if (exp.organization.includes("Siemens")) logo = siemensLogo;
    else if (exp.organization.includes("C&S")) logo = csElectricLogo;
    else if (exp.organization.includes("iHub")) logo = iHubLogo;

    return {
      role: exp.role,
      company: exp.organization,
      companylogo: logo,
      date: `${exp.start_date} - ${exp.end_date}`,
      desc: exp.location,
      descBullets: exp.responsibilities
    };
  })
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "ENGINEERING PROJECTS AND INNOVATIONS",
  projects: portfolioData.projects.map(proj => ({
    image: projectPlaceholder,
    projectName: proj.name,
    projectDesc: proj.description[0],
    footerLink: []
  })),
  display: true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Honors, Awards, and Professional Certifications",
  achievementsCards: portfolioData.honours_and_awards.map(award => ({
    title: award.title,
    subtitle: award.description || `Organization: ${award.organization}`,
    image: certification, // Placeholder
    imageAlt: award.title,
    footerLink: []
  })),
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or professional opportunity? My Inbox is open for all.",
  number: portfolioData.personal_information.phone,
  email_address: portfolioData.personal_information.email
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true; // Changed to true as he might be open for opportunities or just to show status

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
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
