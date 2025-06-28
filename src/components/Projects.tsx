
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Satori',
      description: 'AI-powered data visualization platform that transforms complex datasets into intuitive, interactive dashboards using advanced machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Neural Q',
      description: 'Quantum-inspired neural network framework for solving optimization problems in financial markets and supply chain management.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      tags: ['PyTorch', 'Quantum Computing', 'FastAPI', 'Docker'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'DataFlow',
      description: 'Real-time data pipeline orchestration tool with automated ML model deployment and monitoring capabilities for enterprise applications.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      tags: ['Apache Kafka', 'Kubernetes', 'MLflow', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Insight Engine',
      description: 'Natural language processing system that extracts actionable insights from unstructured business documents and reports.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop',
      tags: ['BERT', 'Elasticsearch', 'AWS', 'Streamlit'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="work" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in machine learning, 
            data engineering, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
                    >
                      #{tag.toLowerCase()}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm transition-all duration-300 border border-slate-600/50 hover:border-slate-500"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
