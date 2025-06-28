
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const techIcons = [
    { name: 'Python', icon: '🐍', color: 'bg-blue-500' },
    { name: 'AWS', icon: '☁️', color: 'bg-orange-500' },
    { name: 'FastAPI', icon: '⚡', color: 'bg-teal-500' },
    { name: 'TensorFlow', icon: '🧠', color: 'bg-orange-600' },
    { name: 'Docker', icon: '🐳', color: 'bg-blue-600' },
    { name: 'SQL', icon: '🗄️', color: 'bg-blue-700' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex lg:flex-row flex-col gap-12">
          {/* Left side - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-lg font-medium mb-4">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-gray-600 text-gray-300 placeholder-gray-500 py-3 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="What's your name?"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-lg font-medium mb-4">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-gray-600 text-gray-300 placeholder-gray-500 py-3 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="What's your email?"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-lg font-medium mb-4">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-gray-600 text-gray-300 placeholder-gray-500 py-3 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="What do you want to say?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white text-lg font-medium py-4 hover:text-cyan-400 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'sending...' : 'send'}
                </button>
              </form>
            </div>
          </div>

          {/* Right side - Abstract Art */}
          <div className="lg:w-1/2 flex items-center justify-center relative">
            <div className="relative w-80 h-80">
              {/* Abstract flowing design */}
              <div className="absolute inset-0">
                <div className="w-full h-full relative overflow-hidden rounded-full">
                  {/* Flowing ribbons */}
                  <div className="absolute inset-0 opacity-70">
                    <div className="absolute top-10 left-20 w-40 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform rotate-12 opacity-80"></div>
                    <div className="absolute top-20 left-10 w-48 h-6 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full transform -rotate-6 opacity-70"></div>
                    <div className="absolute top-32 left-16 w-36 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transform rotate-45 opacity-60"></div>
                    <div className="absolute top-44 left-8 w-44 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transform -rotate-12 opacity-80"></div>
                    <div className="absolute top-56 left-20 w-40 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform rotate-24 opacity-70"></div>
                  </div>
                  
                  {/* Central glow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Icons Row */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-4 flex-wrap justify-center">
            {techIcons.map((tech, index) => (
              <div
                key={tech.name}
                className={`w-16 h-16 ${tech.color} rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 shadow-lg`}
                title={tech.name}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
