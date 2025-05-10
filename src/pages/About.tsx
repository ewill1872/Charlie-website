
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 
    'TypeScript', 'UI/UX Design', 'Responsive Design', 'WordPress'
  ];

  return (
    <div className="pt-16">
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6">About Me</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Learn more about my journey, skills, and passion for creating exceptional web experiences.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <h2 className="mb-6">Hello, I'm Charlie</h2>
              <div className="space-y-6 text-lg">
                <p>
                  I'm a web designer and developer currently studying at university while also working on web design projects. 
                  I'm passionate about creating beautiful, functional websites that not only look great but also deliver results for my clients.
                </p>
                <p>
                  My journey in web development began with a curiosity about how websites work. This curiosity quickly evolved into a 
                  passion as I learned more about the intersection of design and technology.
                </p>
                <p>
                  When I'm not coding or designing, I'm constantly learning about new technologies and design trends to 
                  ensure my skills stay current in this rapidly-evolving field.
                </p>
                <p>
                  I believe that good design is not just about aesthetics but about creating experiences that are intuitive, 
                  accessible, and aligned with business objectives.
                </p>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">My Approach</h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Understand client needs and goals thoroughly before starting any project</li>
                  <li>Focus on user experience and responsive design</li>
                  <li>Commit to clean, maintainable code</li>
                  <li>Communicate clearly throughout the project lifecycle</li>
                </ul>
              </div>
              
              <div className="mt-10">
                <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                  <Link to="/contact">Let's Work Together</Link>
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2 mb-10">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-white text-brand-navy px-3 py-2 rounded-full text-sm shadow-sm border border-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">BSc Computer Science</p>
                    <p className="text-brand-gray">University, Current</p>
                  </div>
                  <div>
                    <p className="font-medium">Web Development Certifications</p>
                    <p className="text-brand-gray">Various Online Platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
