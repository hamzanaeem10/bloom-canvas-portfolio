
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Satori',
      category: 'Healthcare',
      description: 'With Data Science at center, a well-being ecosystem aiming at encouraging users to build sustainable habits to thrive. We focus on well-being from a whole-person perspective.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      tags: ['#python', '#scikit-learn', '#NLTK'],
    },
    {
      title: 'Neural Q',
      category: 'Audio Tech',
      description: 'Using AI, we train a model from an analog device by feeding it samples of real acoustic material. The Neural Network then creates a model based on weights and replicates the analog effect.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      tags: ['#python', '#fastapi', '#tensorflow'],
    },
    {
      title: 'Nexool',
      category: 'Education',
      description: 'A new age language development platform offering an interactive digital library. With Data Science Nexool reinforces the Reading, Writing, Listening, Speaking skills of the students.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      tags: ['#python', '#scikit-learn', '#NLTK'],
    },
  ];

  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-slate-400 mb-4 uppercase tracking-wider">MY WORK</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Projects.
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              Working with organizations, I have been implementing data driven solution across various 
              domains. From providing meaningful insights with predictive analytics to implementing 
              Machine and Deep learning models, I have been supporting ventures on all fronts. Here 
              are some of the projects with my implementation:
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-to-b from-slate-800/40 to-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 border border-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-cyan-400 mb-4">{project.category}</p>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-cyan-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
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
