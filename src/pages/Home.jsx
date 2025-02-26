import { motion } from "framer-motion";
import { RiLinkedinFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import pr from '../../public/assets/priyanandan.jpg'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 rounded-full overflow-hidden w-96 h-96 mx-auto bg-gradient-to-t from-[#09203f] to-[#537895] 	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);"
          >
            <img
              src={pr}  
              alt="Priyanandan"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-10 text-center md:text-left "
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4 ">
              Hi, I'm <span className="bg-gradient-to-t from-[#09203f] to-[#537895] bg-clip-text text-transparent font-mono">Priyanandan</span>
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6 font-mono">Frontend Developer</h2>
            <p className="text-gray-600 mb-6 text-lg max-w-xl mx-auto md:mx-0 font-mono">
              I enjoy building fast, visually appealing websites with the latest technologies. 
              I specialize in HTML, CSS, JavaScript, React, Redux, Zustand, TypeScript, and Next.js 
              to create smooth, user-friendly web apps that perform great across all devices.
            </p>
            <div className="flex justify-center md:justify-start space-x-2">
            <a
                href="https://x.com/priyanandantx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full "
              >
                <FaFacebookF  size={28} />
              </a>
              <a
                href="https://www.instagram.com/_p_n4_/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17847660648228640%2F%3Fhl%3Den%26__coig_login%3D1"
                className="p-2  rounded-full"
              >
                <FaInstagram size={28} />
              </a>
           
              <a
                href="https://github.com/Priyanandan-4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full"
              >
                <BsGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanandan4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full "
              >
                <RiLinkedinFill  size={28} />
              </a>
             
              <a
                href="https://x.com/priyanandantx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full "
              >
                <BsTwitterX  size={28} />
              </a>
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;