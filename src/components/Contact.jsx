import { delay } from "framer-motion";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

const Contact = () => {
  return (
    <section
      className="flex flex-col justify-center px-4 md:px-10"
      id="contact"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <motion.h3
        className="text-5xl md:text-8xl leading-none"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        variants={textVariants}
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>
      <motion.p
        className="text-lg md:text-2xl mt-6 max-w-3xl"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        {CONTACT_CONTENT.description}
      </motion.p>

      <motion.a
        href={`mailto:${CONTACT_CONTENT.email}`}
        className="text-xl md:text-3xl font-medium mt-12"
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        variants={textVariants}
      >
        {CONTACT_CONTENT.email}
      </motion.a>

      <div className="flex space-x-6 mt-8">
        {CONTACT_CONTENT.socialLinks.map((link, index) => {
          const Icon =
            link.icon === "RiTwitterXFill"
              ? RiTwitterXFill
              : link.icon === "RiGithubFill"
              ? RiGithubFill
              : RiLinkedinFill;
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            >
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>

      <motion.p
        className="text-sm text-stone-400 mt-36 mb-10"
        initial="hidden"
        whileInView="visible"
        custom={1.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.footerText}
      </motion.p>
    </section>
  );
};

export default Contact;
