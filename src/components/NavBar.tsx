import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1000px)");
  const navMotion = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 },
  };
  return (
    <nav className="relative tw-items-center tw-mx-8 tw-mb-20 tw-pt-10 tw-flex tw-justify-between md:tw-mx-16 lg:tw-mx-32">
      <motion.div
        variants={navMotion}
        animate="visible"
        initial="hidden"
        className="tw-font-semibold tw-text-2xl xl:tw-text-4xl  2xl:tw-text:4xl tw-text-primary"
      >
        <motion.a variants={itemMotion} href="/">
          Deepika
        </motion.a>
      </motion.div>
      <div className="tw-space-y-1">
        {matches && (
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="tw-flex tw-gap-10 tw-text-[#4b5563] tw-font-semibold tw-text-xl"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/about">
              About
            </motion.a>
            <motion.a variants={itemMotion} href="/skills">
              Skills
            </motion.a>
            <motion.a variants={itemMotion} href="/service">
              Service
            </motion.a>
            <motion.a variants={itemMotion} href="/portifolio">
              Portifolio
            </motion.a>
            <motion.a variants={itemMotion} href="/contactme">
              Contact Me
            </motion.a>
          </motion.div>
        )}
        {!matches && (
          <div
            onClick={() => setToggled((prevToggled) => !prevToggled)}
            className="tw-cursor-pointer tw-relative tw-z-50 tw-space-y-1 tw-text-xl"
          >
            {/* <div className=" tw-z-50">
              <FontAwesomeIcon className=" " icon={faBars} />
            </div>
            <div className=" tw-z-50">
              <FontAwesomeIcon className=" " icon={faX} />
            </div> */}
            <motion.span
              animate={{
                rotate: toggled ? 45 : 0,
                y: toggled ? 8 : 0,
                background: toggled ? "black" : "#8860d0",
              }}
              className="tw-block tw-bg-primary tw-h-0.5 tw-w-8"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 24 }}
              className="tw-block tw-bg-primary tw-h-0.5 tw-w-6"
            ></motion.span>
            <motion.span
              animate={{
                rotate: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16,
                background: toggled ? "black" : "#8860d0",
              }}
              className="tw-block tw-bg-primary tw-h-0.5 tw-w-4"
            ></motion.span>
          </div>
        )}
        {toggled && !matches && (
          <div
            className="tw-flex tw-text-black tw-font-semibold tw-justify-center tw-bg-quinary tw-text-xl tw-fixed tw-rounded-lg
            tw-h-[80vh]  tw-top-5 tw-right-5 tw-items-center tw-w-[50vw]"
          >
            <motion.div
              variants={navMotion}
              animate="visible"
              initial="hidden"
              className="nav-list tw-flex tw-flex-col tw-gap-10"
            >
              <motion.a variants={itemMotion} href="/">
                Home
              </motion.a>
              <motion.a variants={itemMotion} href="/about">
                About
              </motion.a>
              <motion.a variants={itemMotion} href="/skills">
                Skills
              </motion.a>
              <motion.a variants={itemMotion} href="/service">
                Service
              </motion.a>
              <motion.a variants={itemMotion} href="/portifolio">
                Portifolio
              </motion.a>
              <motion.a variants={itemMotion} href="/contactme">
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        )}
        {/*  */}
      </div>
    </nav>
  );
}
