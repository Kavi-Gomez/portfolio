import React from 'react';

const Skills = () => {
  const skills = [
    'React',
    'Express',
    'Mongoose',
    'MERN Stack',
    'Vite',
    'Tailwind CSS',
    'Mobile Development',
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
