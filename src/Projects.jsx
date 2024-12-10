import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Vortex Game Store',
      description: 'A MERN stack project with MERN stack.',
      link: 'https://github.com/Dileep-s-Works/Game-Store-MERN-ITP',
    },
    {
      title: 'Chat Application',
      description: 'React-based chat app using Express and Mongoose.',
      link: '#',
    },
    {
      title: 'Mobile Task Manager',
      description: 'Android app for managing tasks and timers.',
      link: '#',
    },
  ];

  return (
    <section className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="my-2">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
