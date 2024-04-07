
import Tilt from "react-parallax-tilt";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";
import { TCert } from "../../types";
import { certs } from "../../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import React from "react";

const CertCard: React.FC<{index: number} & TCert> = ({
index,
cert_name,
image,
issued,
date,
}) => {
    return (
	  <motion.div
    variants={fadeIn("up", "tween", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[400px] w-full rounded-3xl p-8"
  >
    <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    glareColor="#aaa6c3"
  >
	    <a href={image} target="_new">
        <div className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-1 px-1">
            <img src={image} className="w-full h-56 mx-auto object-cover" alt={cert_name}></img>
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{cert_name}</h1>
                <p className="font-light md:text-lg">Issued by {issued}</p>
                <p className="font-light text-gray-400">{date}</p>
            </div>
        </div>	
		</a>
		</Tilt>
		</motion.div>
    )
}

const Certification = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.certification} />

	  <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        {certs.map((cert, index) => (
          <CertCard key={`cert-${index}`} index={index} {...cert}  />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
