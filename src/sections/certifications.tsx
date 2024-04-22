import SectionHeading from "../components/section-heading";
import { motion } from "framer-motion";
import { certificationsData } from "../lib/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useActiveSection } from "../signals/active-section-signal";
export default function Certifications() {
  const ref = useActiveSection("Certifications");
  return (
    <motion.section
      id="certifications"
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
      <SectionHeading><span className="text-5xl">My certifications</span></SectionHeading>
      {certificationsData.map((certification, index) => (
        <div
          key={index}
          className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20"
        >
          <div>
            <img
              src={certification.icon}
              alt={certification.title}
              width={100}
              className="aspect-square max-w-fit rounded-full bg-gray-200"
            />
          </div>
          <div>
            <p className="text-lg font-extrabold">{certification.title}</p>
            <p>{certification.description}</p>
            <br />
            <p className="mt-1 col text-gray-400">
              <MdDateRange className="inline" size={20} /> Issued in{" "}
              {certification.date}
            </p>
            <a
              href={certification.link}
              target="_blank"
              className="underline  text-gray-400 hover:text-blue-400"
            >
              <FaExternalLinkAlt className="inline" /> View certificate
            </a>
          </div>
        </div>
      ))}
    </motion.section>
  );
}
