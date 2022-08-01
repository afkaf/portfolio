import bot from "./videos/bot.mp4";
import jobify from "./videos/jobify.mp4";

let resumeData = {
  imagebaseurl: "https://afkaf.github.io/",
  name: "Ryan Grissett",
  role: "Developer",
  socialLinks: [
    {
      name: "linkedin",
      url: "www.linkedin.com/in/ryan-grissett",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/afkaf",
      className: "fa fa-github",
    },
  ],
  aboutme:
    "I have a passion for solving complex problems. I am constantly updating my understanding of current technologies that could be useful throughout my professional life",
  address: "",
  website: "https://afkaf.github.io",
  education: [
      {
      UniversityName: "Coastal Alabama Community College, Brewton AL",
      specialization: "Associate in Science",
      MonthOfPassing: "Graduated",
      YearOfPassing: "2019",
    },
    {
      UniversityName: "University of South Alabama, Mobile AL",
      specialization: "Bachelor of Science in Computer Science",
      MonthOfPassing: "Graduated",
      YearOfPassing: "2021",
      Achievements: "GPA: 3.57"
    },
  ],
  work: [
     {
      CompanyName: "University of South Alabama",
      specialization: "Student Research Assistant",
      MonthOfLeaving: "December",
      YearOfLeaving: "2021",
      Achievements: ["Preprocessed data provided to me for use in training.","Created various types of neural networks utilizing tools such as PyTorch and TensorFlow.","Led a team on design of web applications using JavaScript and Python frameworks.","Implemented a solution for visualizing outputs on a correlated 3D model."],
    }
  ],
  skillsDescription: "Your skills here",
  skills: [
    {
      skillname: "Machine Learning",
    },
    {
      skillname: "Web Development",
    },
    {
      skillname: "Blockchain",
    },
  ],
  portfolio: [
    {
      name: "Face Swap Bot",
      description: "ML Discord Bot",
      src: bot,
    },
    /* {
      name: "Website",
      description: "Job Tracker",
      src: jobify,
    }, */
  ],
  certificates: [
    {
      name: "Harvard",
      imgurl: "../../images/CS50x.png",
      srcurl:
        "https://certificates.cs50.io/7827bf9a-ee2b-459b-8a31-6fa13dd722b0.pdf?size=letter",
      description: "Computer Science",
    },
  ],
  testimonials: [
    {
      description: "I know I'll make it",
      name: "Someone",
    },
    {
      description: "Just work smart",
      name: "Someone",
    },
  ],
};

export default resumeData;
