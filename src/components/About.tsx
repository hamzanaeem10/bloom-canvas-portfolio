
import React from 'react';

const About = () => {
  const skills = [
    {
      title: 'ML/AI Engineer',
      icon: '🔷',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Python Developer',
      icon: '🔶',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'MLOps Engineer',
      icon: '🔸',
      color: 'from-teal-500 to-green-500',
    },
    {
      title: 'Music Composer',
      icon: '💎',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">INTRODUCTION</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Overview
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Developer turned Machine Learning Engineer, I tailor and implement data driven solutions 
              to help breakthrough domains. My passion of maths backing ML/AI helps me design 
              solutions that are just right.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-8 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} opacity-80 flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
