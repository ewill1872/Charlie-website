
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { Code, PenTool, ArrowRight } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Creative and responsive designs that elevate your brand and engage your visitors.',
      icon: <PenTool size={24} />
    },
    {
      title: 'Web Development',
      description: 'Custom web applications built with the latest technologies for optimal performance.',
      icon: <Code size={24} />
    },
    {
      title: 'E-commerce Solutions',
      description: 'Online stores that drive sales with seamless checkout experiences.',
      icon: <Code size={24} />
    }
  ];

  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully responsive online store with custom product filtering and secure checkout.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop',
      tags: ['E-commerce', 'React', 'Node.js']
    },
    {
      title: 'Portfolio Website',
      description: 'Minimalist portfolio for a photographer showcasing their work with elegant transitions.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2755&auto=format&fit=crop',
      tags: ['Portfolio', 'Design', 'Animation']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in opacity-0 [animation-delay:200ms]">
            <h1 className="mb-6">Creating Beautiful, <span className="text-brand-teal">Functional</span> Websites</h1>
            <p className="text-xl mb-8 text-gray-200">
              I design and develop custom websites that help businesses stand out and succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white" size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-brand-teal hover:bg-white hover:text-brand-navy" size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">My Services</h2>
            <p className="text-lg text-brand-gray">
              Offering professional web solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2>Featured Projects</h2>
              <p className="text-lg text-brand-gray mt-2">
                Some of my recent work that I'm proud of.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/projects" className="flex items-center">
                View All Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-teal text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create a website that perfectly represents your brand and helps you achieve your goals.
          </p>
          <Button asChild className="bg-white text-brand-teal hover:bg-gray-100 hover:text-brand-navy" size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
