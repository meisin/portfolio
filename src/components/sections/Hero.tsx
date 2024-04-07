import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { linkedin } from "../../assets";
import { github } from "../../assets";
import { medium } from "../../assets";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h2>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className='sm:block hidden' />
            {config.hero.p[1]}
          </p>
		  <br />
		  <p>
		    <div className="mt-1 flex flex-wrap gap-4">
				<a href='https://www.linkedin.com/in/meisinlee/' target='_blank' ><img src={linkedin} className="w-11 h-11"/></a>
				<a href='https://github.com/meisin' target='_blank' ><img src={github} className="w-11 h-11"/></a>
				<a href='https://meisinlee.medium.com/' target='_blank' ><img src={medium} className="w-11 h-11 rounded-full" /></a>
          </div>
		
	  </p>
        </div>
      </div>
	  
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
