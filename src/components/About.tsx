
import React from 'react';
import { Brain, Code, Database, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms and deep learning frameworks',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Python Development',
      description: 'Full-stack development with modern Python frameworks',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Big data processing and pipeline optimization',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Cpu,
      title: 'AI Solutions',
      description: 'End-to-end AI product development and deployment',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              I'm a passionate ML/AI Engineer with over 5 years of experience transforming complex data 
              into actionable insights. I specialize in building intelligent systems that bridge the gap 
              between raw data and human understanding, creating solutions that don't just process 
              information—they tell stories.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise spans machine learning, deep learning, and full-stack development, 
              with a focus on creating scalable AI solutions that drive real business impact.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
