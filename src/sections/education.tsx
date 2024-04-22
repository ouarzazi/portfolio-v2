import SectionHeading from "../components/section-heading";
import { motion } from "framer-motion";
import ensea from "/ensea.png";
import jeanbart from "/jean_bart.png";
import henripoincaré from "/henri_poincaré.png";
import { IoMdSchool } from "react-icons/io";
import { useActiveSection } from "../signals/active-section-signal";

export default function Education() {
    const ref = useActiveSection("Education");
  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading><span className="text-5xl">My Education</span></SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <img src={ensea} alt="QUT" width={150} className="max-w-fit rounded-full" />
        </div>

        <div>
          <p className="text-lg font-medium flex items-center gap-1">
            <IoMdSchool /> ENSEA
          </p>
          <p className="font-sans font-bold">
          Engineering School Diploma </p>
          Studying and mining data using a variety of techniques: statistics, machine learning, visualization, pattern recognition, uncertain models, to extract meaning from data and create analytical products to aid decision-making.
          <br/>
          <p className="font-bold inline" >Careers:</p> Data Scientist, Data Engineer.
        </div>
      </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <img src={henripoincaré} alt="QUT" width={150} className="max-w-fit rounded-full" />
        </div>

        <div>
          <p className="text-lg font-medium flex items-center gap-1">
            <IoMdSchool /> Lycée Henri Poincaré
          </p>
          <p className="font-sans font-bold">
          Mathematics-Physics (MP*)</p>
          Preparatory classes for engineering grandes écoles.          
          <br/>
        </div>
      </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <img src={jeanbart} alt="QUT" width={150} className="max-w-fit rounded-full" />
        </div>

        <div>
          <p className="text-lg font-medium flex items-center gap-1">
            <IoMdSchool /> Lycée Jean Bart
          </p>
          <p className="font-sans font-bold">
          Mathematics, Physics, and Industrial Sciences (MPSI) </p>
          Preparatory classes for engineering grandes écoles.          
          <br/>
        </div>
      </div>
      
    </motion.section>
  );
}
