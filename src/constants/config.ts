type TSection = {
  p: string;
  h2: string;
  content?: string;
  content2?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
	publications: TSection;
	certification: TSection;
    works: TSection;
	tech: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "",
    fullName: "",
    email: "",
  },
  hero: {
    name: "Dr. Meisin Lee",
    p: ["AI Researcher & Engineer", "NLP, AI Speech, Machine Learning"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "About Me",
      h2: "Overview.",
      content: `I received my doctoral degree in from Monash University in 2022, with a focus in the finance and economics domain. 
	  My work in Action Lab Monash has expanded my expertise from purely text processing (NLP) to include other modality such as audio. Through the development of LLM-based applications for Action Lab, 
	  I am also up-to-date with the latest development in Generative AI development.`,
	  content2: `The key areas of expertise (and also interest) are summarized in the icons below:`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
	tech: {
      p: "What I know",
      h2: "Skills.",
	  content: `Technical Skills: `,
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
	publications: {
      p: "What I have written",
      h2: "Publications.",
	  content: `List of my publications.`,
    },
    works: {
      p: "My recent work",
      h2: "Personal Projects.",
      content: `Following AI applications showcase my skills and interests in implementing AI solutions to solve real-world problems.
	  Each project is briefly described with links to code repositories and live demos.`,	  
    },
	certification: {
      p: "Short Courses I have taken",
      h2: "Professional Certifications.",
	  content: ``,
    },
  },
};
