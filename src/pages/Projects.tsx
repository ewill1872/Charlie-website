
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    
  ];

  const categories = ['All', 'E-commerce', 'Portfolio', 'Corporate', 'Blog', 'Education'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  return (
    <div className="pt-16">
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6">My Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Take a look at some of the websites and applications I've created for clients.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-brand-navy text-white'
                    : 'bg-gray-100 text-brand-gray hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${(index % 3) * 100}ms` }}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-brand-gray">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="mb-4">Let's Create Something Amazing Together</h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-3 rounded font-medium transition-all"
          >
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
