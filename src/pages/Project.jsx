import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Pick Me',
    description: 'PickMe is a dynamic social media platform designed for real-time communication and seamless user engagement, where users can post short text updates, interact with likes and comments, and follow others to create a personalized feed. Built with React Query for efficient data fetching, caching, and real-time updates, Zustand for lightweight state management to handle user sessions, feed data, and interactions, and Material-UI for a polished, responsive user interface, PickMe ensures smooth performance and a user-friendly design. Whether it’s sharing thoughts, staying updated with real-time notifications, or discovering new content, PickMe delivers a streamlined social experience focused on effortless connectivity and engagement.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXEL6np3rw8oQ1UVnSzBozDrCFnhf-ufXiQ&s',
    technologies: ['ReactQuery','Zustand','Metrial-UI'],
    githubUrl: 'https://github.com/Priyanandan-4/thread-clone-app',
    liveUrl: '#',
  },
  {
    title: 'Thread-clone App',
    description: 'Thread App is a social media application designed to mimic the features and functionality of the popular "Threads" app. It allows users to post short text updates, interact with posts through comments and likes, and follow other users. The app is built with a focus on real-time communication, user-friendly design, and seamless performance. With features like a personalized feed and notifications, the "Thread App " offers a streamlined social experience for sharing thoughts and engaging with others.',
    image: 'https://img.freepik.com/free-vector/gradient-logo-template-new-threads-social-media-application_23-2150730935.jpg?uid=R168349089&ga=GA1.1.186829641.1728367718&semt=ais_tags_boosted',
    technologies: ['Next js','Type script','Redux', 'Tailwind'],
    githubUrl: 'https://github.com/Priyanandan-4/thread-clone-app',
    liveUrl: '#',
  },
  {
    title: 'Pet Food Shop',
    description: 'Pet Food Shop is an online store dedicated to offering a wide variety of high-quality food products for pets. From nutritious meals and treats to special dietary needs and supplements, our goal is to provide pet owners with everything they need to keep their furry friends happy and healthy in one convenient place. The website ensures a seamless shopping experience with easy navigation, secure transactions, and fast delivery services.',
    image: 'https://images.ctfassets.net/sfnkq8lmu5d7/6DOMRNbjLYzLN06MVgwYH9/3bb83e45d9fd1a311e517a5d80af83fe/2021_03-dogFood-AdobeStock_330083632.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg',
    technologies: ['React', 'Tailwind'],
    githubUrl: 'https://github.com/Priyanandan-4/petEcommerce-project',
    liveUrl: '#',
  },


];

const Projects = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {/* <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;