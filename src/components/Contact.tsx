
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at hamzanaeem832@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const techIcons = [
    { name: 'Python', icon: '🐍', color: 'bg-blue-500' },
    { name: 'Machine Learning', icon: '🤖', color: 'bg-purple-500' },
    { name: 'SQL Server', icon: '🗄️', color: 'bg-blue-700' },
    { name: 'Power BI', icon: '📊', color: 'bg-yellow-600' },
    { name: 'Azure', icon: '☁️', color: 'bg-blue-600' },
    { name: 'TensorFlow', icon: '🧠', color: 'bg-orange-600' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Contact.
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Let's connect and discuss how we can work together on exciting data science projects.
            </p>
            <div className="text-gray-400 space-y-2">
              <p>📧 hamzanaeem832@gmail.com</p>
              <p>📱 +92 336 5496067</p>
              <p>📍 Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

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
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-lg rounded-xl overflow-hidden transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
