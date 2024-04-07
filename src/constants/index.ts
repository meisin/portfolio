import type {
  TNavLink,
  TService,
  TExperience,
  TTestimonial,
  TProject,
  TCert,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  monash,
  graduation,
  shell,
  sjkc,
  iban,
  bible,
  speech,
  pmp,
  mlops,
  data_science,
  business_analytics,
  deep_learning,
  machine_learning,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work Exp",
  },
  {
    id: "publications",
    title: "Publications",
  },
    {
    id: "certification",
    title: "Certifications",
  },

];

const services: TService[] = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "AI in Financial Text",
    icon: mobile,
  },
  {
    title: "Speech AI",
    icon: backend,
  },
  {
    title: "Multimodal AI models",
    icon: creator,
  },
];

const certs: TCert[] = [
  {
    cert_name: "Project Management Professional (PMP)",
    image: pmp,
	issued: "PMI",
	date: "May 2014",
  },
  {
    cert_name: "ML Operations",
    image: mlops,
	issued: "DeepLearning.AI",
	date: "March 2024",
  },
  {
    cert_name: "Data Science",
    image: data_science,
	issued: "Johns Hopkins University",
	date: "April 2016",
  },
  {
    cert_name: "Business Analytics",
    image: business_analytics,
	issued: "Wharton UPenn",
	date: "August 2016",
  },
  {
    cert_name: "Deep Learning",
    image: deep_learning,
	issued: "DeepLearning.AI",
	date: "February 2018",
  },
  {
    cert_name: "Machine Learning",
    image: machine_learning,
	issued: "University of Washington",
	date: "March 2017",
  },
];

const experiences: TExperience[] = [
  {
    title: "AI Research Fellow",
    companyName: "Action Lab, Monash University",
    icon: monash,
    iconBg: "#383E56",
    date: "Aug 2023 - Jul 2024",
    points: [
      "Support Action Lab’s projects as a technical team lead, implementing AI application in Action Lab projects.",
	  "Designed solutions centered around Human-in-loop AI principle.",
      "Collaborate across multiple campuses and cross-faculty teams including PhD students and subject matter experts to create fit-for-purpose AI applications / solutions.",
    ],
  },
  {
    title: "PhD Candidate",
    companyName: "Monash University",
    icon: graduation,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Nov 2022",
    points: [
      "Doctor of Philosophy (PhD), Thesis: Crude Oil Forecasting via Events and Outlook Extraction from Commodity News",
	  "Worked as Tutor for Data Science Undegraduate course",
	  "recipient of Monash Merit Scholarhip"
    ],
  },
  {
    title: "Project Manager & var. roles",
    companyName: "Shell Malaysia",
    icon: shell,
    iconBg: "#383E56",
    date: " Sep 2008 - Mar 2017",
    points: [
      "Delivered Fuels Retail IT solution on time and on budget, eg: Total-to-Shell conversion project.",
      "Worked seamlessly not just within Shell but also external stakeholders, such as external IT suppliers as part of project delivery.",
	  "Supported Shell IT project delivery in various roles such as Project Manager, Business Analyst and IT Supplier Manager.",
    ],
  },
  {
    title: "Post-graduate Student",
    companyName: "Technische Universität Wien.",
    icon: graduation,
    iconBg: "#E6DEDD",
    date: "Sep 2006 - Mar 2008",
    points: [
      "MSc. in Comp Science (Computational Logic)",
	  "graudated with Summa Cum Laude",
	  "recipient of Erasmus Mundus Scholarship "
    ],
  },
  {
    title: "Undegraduation Student",
    companyName: "Multimedia University.",
    icon: graduation,
    iconBg: "#E6DEDD",
    date: "2000 - 2004",
    points: [
      "BSc. in IT (Information Systems Engineering)",
	  "First Class Honours (CGPA 3.95)",
	  "recipient of Alliance Bank Scholarhip"
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "SRJKC Resource Centre",
    description:
      "An AI tool for education. Web respository containing materials (audio book, translation and Pinyin annotation) based on SJKC Chinese textbook as learning aids.",
    tags: [
		  {
        name: "OCR",
        color: "red-text-gradient",
      },
      {
        name: "ASR",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Translation",
        color: "green-text-gradient",
      },
      {
        name: "Speech Synthesis",
        color: "pink-text-gradient",
      },
	  {
        name: "github-pages",
        color: "red-text-gradient",
      },
    ],
    image: sjkc,
    sourceCodeLink: "https://github.com/multilingual-malaysian/SRJKC_resources",
	appLink: "https://multilingual-malaysian.github.io/SRJKC_resources/",
  },
    {
    name: "Bahasa Iban Transcriber",
    description:
      "A simple gradio web application that enables users to transcribe spoken Iban through one of FOUR ways: upload audio, record using microphone, upload video or youtube video link.",
    tags: [
      {
        name: "ASR",
        color: "blue-text-gradient",
      },
      {
        name: "gradio",
        color: "green-text-gradient",
      },
    ],
    image: iban,
    sourceCodeLink: "https://github.com/meisin/iban._speech_tool",
	appLink: "https://huggingface.co/spaces/meisin123/iban_speech_tool",
  },
  {
    name: "Bible Chatbot",
    description:
      "A ChatBot that is able to answer Bible-related questions. It is an LLM app with Retrieval Augmented Generation (RAG) capabilities, it retrieves answers from a specified source of information (ie. Bible). ",
    tags: [
      {
        name: "RAG LLM app",
        color: "blue-text-gradient",
      },
      {
        name: "Llama-Index",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: bible,
    sourceCodeLink: "https://github.com/meisin/Bible_ChatBot",
	appLink: "https://biblechatbot.streamlit.app/",
  },
  {
    name: "Speech-to-speech Translation",
    description:
      "Coming soon. ",
    tags: [
      {
        name: "Machine Translation",
        color: "blue-text-gradient",
      },
      {
        name: "Llama-Index",
        color: "green-text-gradient",
      },
    ],
    image: speech,
    sourceCodeLink: "https://meisinlee-portfolio.netlify.app/",
	appLink: "https://meisinlee-portfolio.netlify.app/",
  },

];

export { services, experiences, testimonials, projects, certs };
