import { motion } from "framer-motion";
import SectionHeading from "../components/section-heading";
import { useActiveSection } from "../signals/active-section-signal";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

export default function Contact() {
  const ref = useActiveSection("Contact");

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading><span className="text-5xl">Contact Me</span></SectionHeading>
      <motion.a
        href="mailto:mohamedaittakniouine@outlook.com"
        className="inline-block bg-gradient-to-r from-pink-300 to-purple-600 hover:from-pink-400 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full mt-8 shadow-lg"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <span className="text-2xl">Get in Touch</span> &nbsp; <MdOutlineMarkEmailUnread className="inline text-4xl"/>
      </motion.a>
    </motion.section>
  );
}
