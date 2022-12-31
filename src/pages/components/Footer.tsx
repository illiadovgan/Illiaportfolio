import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex justify-center bg-neutral-100 p-4 text-xs text-black transition-colors dark:bg-[#060606]
     dark:text-white md:text-sm bottom-0 left-0 right-0 absolute text-neutral-500 dark:text-neutral-500"
    >
        <p>{"/* built with ♥ by danny */"}</p>
    </motion.div>


  )
};

export default Footer;