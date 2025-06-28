
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'IoT Anomaly Detection',
      category: 'Machine Learning',
      description: 'Implemented machine learning models for anomaly detection on IoT device data, achieving 94% accuracy using classification techniques. Utilized data mining approaches and Python libraries (Pandas, Scikit-learn, Seaborn) for data preprocessing, modeling, and visualization.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      tags: ['#python', '#scikit-learn', '#pandas', '#seaborn'],
    },
    {
      title: 'Automobile Workshop Data Warehouse',
      category: 'Data Engineering',
      description: 'Designed and implemented a data warehouse for an automobile workshop, defining key business processes and lifecycle. Performance ETL from SSMS to Power BI in Visual Studio to extract, transform, and load data from multiple sources into datawarehouse.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b81d?w=400&h=300&fit=crop',
      tags: ['#sql-server', '#power-bi', '#etl', '#data-warehouse'],
    },
    {
      title: 'Ed-Tech Platform (MERN Stack)',
      category: 'Full-Stack Development',
      description: 'Developed a full-stack ed-tech platform using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). Built using MERN for seamless frontend-backend integration and scalability. Enabled insightful analytics and enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      tags: ['#mongodb', '#express', '#react', '#nodejs'],
    },
    {
      title: 'Gesture Recognition System',
      category: 'Computer Vision',
      description: 'Built a gesture recognition system to translate sign language into text for improved communication. Used TensorFlow and computer vision techniques for real-time gesture detection and transcription. Aimed to assist individuals with speech impairments through accessible technology.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      tags: ['#tensorflow', '#computer-vision', '#python', '#real-time'],
    },
  ];

  return (
    <section id="work" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">MY WORK</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Projects.
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Throughout my academic journey and professional experience, I have worked on diverse projects 
              spanning machine learning, data engineering, full-stack development, and computer vision. 
              From implementing anomaly detection models to building comprehensive data warehouses, 
              these projects showcase my ability to deliver data-driven solutions across various domains.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-to-b from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-cyan-400 mb-4">{project.category}</p>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
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
