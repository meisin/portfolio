import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  appLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltEnable
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
		
          </div>
          <div className="mt-5">
            <a href={appLink} target="_blank"><h3 className="text-[24px] font-bold text-white">{name}</h3></a>
            <a href={appLink} target="_blank"><p className="text-secondary mt-2 text-[14px]">{description}</p></a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}			
          </div>
		  <div className="mt-4 flex flex-wrap gap-2">
			<p className="text-[13px]"> Source Code: </p>
			<a href={sourceCodeLink} target="_blank"><img src={github} alt='github link' className="w-6 h-6 rounded-full object-cover "/></a>
          </div>
		  
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
		  <br />
		  <p>These are proof-of-concepts projects and some are made up of several AI components such as <b>Object Character Recognition(OCR)</b>, 
		  <b>Speech Synthesis (TTS)</b>, <b>Machine Translation</b>, <b>Automatic Speech Recognition (STT)</b>, and Generative AI such as <b>LLM-based Retrieval Augmented Generation (RAG). </b></p>
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
