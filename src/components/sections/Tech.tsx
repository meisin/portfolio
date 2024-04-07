import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { streamlit } from "../../assets";
import { gradio } from "../../assets";
import { sagemaker } from "../../assets";
import { vertexai } from "../../assets";
import { langchain } from "../../assets";
import { llamaindex } from "../../assets";
import { huggingface} from "../../assets";
import { pinecone, 
		 chromadb,
		 neo4j} from "../../assets";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.tech} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >		<ol>
			<li>1. <b>Project Management</b> - managed implementation of IT projects according to planned timeline and within approved budget.</li>
			<li>2. <b>Business Analysis</b> - experienced in converting business requirements into technical requirements, including good stakeholder engagement and management skills.</li> 
			<li>3. <b>ML Lifecycle & MLOps</b> - experienced in ML project lifecycle (model training & fine-tuning, performance optimization) and addressing challenges such as insufficient training data, imbalanced dataset and etc.</li>
		</ol>
		< br />
        {config.sections.tech.content}
		< br/>
		I am a skilled programmer having worked with the following languages/ frameworks/ platforms/ libraries / tools. 
		<div className="text-[13px]">Note: Hover over each icon to get more information.</div>
      </motion.p>
	  
	  <br />
	  <p >Cloud-based AI Services & Platforms: </p>
	  <div className="mt-2 flex flex-wrap gap-3">
		<img src="https://skillicons.dev/icons?i=aws" title="Amazon Web Services"/>
		<img src="https://skillicons.dev/icons?i=gcp" title="Google Cloud Platform"/>
		<img src={sagemaker} className="w-11 h-11" title="AWS Sagemaker"/>
		<img src={vertexai} className="w-11 h-11" title="Google Vertex AI"/>
		<img src={huggingface} className="w-11 h-11" title="Hugging Face"/>
	  </div>
	  <br />
	  <p >
	  Generative AI Framework: 
	  </p>
	  <div className="mt-2 flex flex-wrap gap-3">
		<img src={langchain} className="w-11 h-11" title="LangChain"/>
		<img src={llamaindex} className="w-11 h-11" title="LlamaIndex"/>
      </div>
	  <br />
	  <p >
	  Programming (Web Development, Machine Learning & Deep Learning): 
	  </p>
	  <div className="mt-2 flex flex-wrap gap-3">
		<img src="https://skillicons.dev/icons?i=pytorch" title="PyTorch"/>
		<img src="https://skillicons.dev/icons?i=sklearn" title="ScikitLearn"/>
		<img src="https://skillicons.dev/icons?i=python" title="Python Programming"/>
		<img src="https://skillicons.dev/icons?i=nodejs" title="Nodejs" />
		<img src="https://skillicons.dev/icons?i=react" title="ReactJS" />
		<img src="https://skillicons.dev/icons?i=r" title="R Programming" />
		<img src="https://skillicons.dev/icons?i=java" title="Java Programming" />
		<img src="https://skillicons.dev/icons?i=docker" title="Docker" />
		<img src={streamlit} className="w-11 h-11" title="Streamlit"/>
		<img src={gradio} className="w-11 h-11" title="Gradio"/>
      </div>
	  <br />
	  	  <p >
	  Database Platform: </p>
	  <div className="mt-2 flex flex-wrap gap-3">
		<img src="https://skillicons.dev/icons?i=mongodb" title="MongoDB" />
		<img src="https://skillicons.dev/icons?i=mysql" title="MySQL"/>
		<img src="https://skillicons.dev/icons?i=postgres" title="PostgresSQL"/>
		<img src={neo4j} className="w-11 h-11" title="Neo4j Graph Database"/>
		<img src={chromadb} className="w-11 h-11" title="Chroma Vector Database"/>
		<img src={pinecone} className="w-11 h-11" title="Pinecone Vector Database"/>
	  </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

