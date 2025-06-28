
import React from 'react';

const About = () => {
  const skills = [
    {
      title: 'Python Developer',
      icon: '🐍',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Machine Learning',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Data Warehousing',
      icon: '🏗️',
      color: 'from-teal-500 to-green-500',
    },
    {
      title: 'Data Visualization',
      icon: '📊',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Big Data',
      icon: '💾',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Deep Learning',
      icon: '🧠',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'ETL',
      icon: '⚙️',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Microsoft Azure',
      icon: '☁️',
      color: 'from-blue-600 to-purple-600',
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
              Data Science student at COMSATS University Islamabad with hands-on experience in machine learning, 
              data warehousing, and business intelligence. Currently working as a Data Analyst Intern at Troon Technologies, 
              where I preprocess and analyze datasets from multiple sources using Pandas, SQL, and Power BI. 
              I'm passionate about creating interactive visualizations and implementing data-driven solutions 
              that help organizations make informed decisions.
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
