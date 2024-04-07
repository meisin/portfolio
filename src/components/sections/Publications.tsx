import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";

const Publications = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.publications} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.publications.content}
      </motion.p>
	  <p>
	  1. CrudeOilNews: An Annotated Crude Oil News Corpus for Event Extraction
	  <div className="text-[13px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meisin Lee, Lay‑Ki Soon, Eu‑Gene Siew, Ly Fie Sugianto
	  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Proc. of the 13th Language Resources and Evaluation Conference, 2022</i>
		</div>
		<br />
	  2. Effective Use of Graph Convolution Network and Contextual Sub‑Tree for Commodity News Event Extraction
	  <div className="text-[13px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meisin Lee, Lay‑Ki Soon, Eu‑Gene Siew
	  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Proc. of the Third Workshop on Economics and NLP, (Co‑located with EMNLP), 2021</i>
		</div>
		<br />
	3. Exploiting Available Resources for the Training of Manglish Language Models
		  <div className="text-[13px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meisin Lee, Lay‑Ki Soon
	  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Proc. WiNLP Workshop (co‑located with EMNLP), 2022</i></div>
	  <br />
	  4. Crude Oil Price Movement and Return Prediction via Text Analytics on Market Summaries
	  <div className="text-[13px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meisin Lee, Lay‑Ki Soon, Eu‑Gene Siew
	  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Submitted to Data Knowledge Engineering Journal</i>
		</div>
		<br />
	5. Crude Oil‑related Events Extraction and Processing: A Transfer Learning Approach
	  <div className="text-[13px]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meisin Lee, Lay‑Ki Soon, Eu‑Gene Siew
	  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Submitted to Applied Soft Computing Journal</i>
		</div>
	  </p>
    </>
  );
};

export default SectionWrapper(Publications, "publications");
