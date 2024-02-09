import { Link } from "react-router-dom";
import aboutBanner from "./assests/about-banner.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="home bg-black/90 w-screen h-screen overflow-hidden relative ">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // exit={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="w-full h-full flex flex-col justify-start items-center"
      >
        <nav className="navbar  flex flex-row-reverse items-center  justify-between overflow-hidden py-6 pr-2 md:p-6 md:mx-[200px]  md:tracking-wider text-md  border-white/40 border-b z-[3]  w-[85%] xl:w-[60%]  lg:mt-8">
          <div className="flex justify-between gap-8">
            <Link
              className="duration-200 text-white hover:text-pink-500"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="duration-200 text-white hover:text-yellow-400"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="duration-200 text-white hover:text-yellow-400"
              to="/skills"
            >
              Skills
            </Link>
          </div>
          <Link className="duration-200 text-white hover:text-green-500" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 "
            >
              <line x1="19" x2="5" y1="12" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
        </nav>
        {/* <div
            id="blob"
            className="bg-white h-[12vmax] aspect-[1] absolute rounded-[50%]  bg-gradient-to-r from-[#7FFFD4] to-[#9370DB] animate-rotate "
          ></div>
          <div
            id="blur"
            className="blur h-full w-full absolute z-[2] backdrop-blur-[12vmax]"
          ></div> */}
        {/* ABOUT section */}
        <section className="about z-[3] mt-8 lg:mt-20 text-white lg:w-[60%] xl:w-[40%] w-[85%]">
          <h1 className="text-gray-300 font-semibold flex items-center text-2xl font-Ubuntu">
            About me
            <div className="h-[1px] w-[40%] ::after bg-gray-600 ml-5"></div>
          </h1>
          <div className="mt-5 font-Poppins text-white text-md   ">
            <article className="my-2 md:my-3">
              Hello! My name is{" "}
              <span className="text-[#5FF4D1]">Nischit D S</span> and I enjoy
              coding things. My craze for pc began as a kid like most other (i
              guess). And as I explored the world of technology, I discovered{" "}
              <span className="text-[#5FF4D1]">web development</span> and was
              captivated by the creativity and innovation involved in building
              online experiences.{" "}
            </article>
            <article className="my-2 md:my-3">
              My journey in web development began after my college years when I
              discovered the thrill of building websites and applications that
              make a real impact. Since then, I have been on a continuous
              learning path, staying up-to-date with the latest technologies and
              best practices in the industry. I'm always eager to tackle new
              challenges and embrace emerging technologies to enhance the user
              experience.
            </article>
            <article className="my-2 md:my-3">
              In my free time, you can find me obsessively refreshing my web
              browser to see if my latest code changes have broken anything.
              <span className="text-[#5FF4D1]">
                (spoiler alert: they usually have)
              </span>
            </article>
          </div>
          <img className="w-full" alt="about-as-object" src={aboutBanner}></img>
          <article className="text-[#d1d3d6be] font-Ubuntu mt-5 font-inter ">
            <span className=" text-[#5FF4D1] mr-3">Fact:</span> The Power of
            Ctrl+Shift+T (IFYKYK).
          </article>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
