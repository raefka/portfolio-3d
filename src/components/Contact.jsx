import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

         <div className="flex flex-col place-items-start mt-5">
            <div className="flex  gap-2 items-center justify-center my-2">
              <div className="bg-black-200  p-3 rounded-full">
                <Mail className="text-white size-6" />
              </div>
              <span className="text-white font-semibold">raefkacem20@gmail.com</span>
            </div >

            <div className="flex  gap-2 items-center justify-center my-2">
                <div className="bg-black-200  p-3 rounded-full">
                <Linkedin  className="text-white size-6" />
              </div>
              <a href="https://www.linkedin.com/in/kacem-raef-366895284" className="text-white font-semibold">linkedin.com/in/kacem-raef-366895284</a>
            </div>

            <div className="flex  gap-2 items-center justify-center my-2">
                <div className="bg-black-200  p-3 rounded-full">
                <Github   className="text-white size-6" />
              </div>
              <a href="https://github.com/raefka" className="text-white font-semibold">github.com/raefka</a>
            </div>
         </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
