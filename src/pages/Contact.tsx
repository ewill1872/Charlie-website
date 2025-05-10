
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16">
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Have a project in mind? Let's talk about how we can work together to bring your ideas to life.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Contact Information</h2>
              <p className="text-lg mb-8">
                Feel free to reach out if you have any questions or want to discuss a project. 
                I'm available for freelance work and always open to new opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:charlie.oneill@cwodesigns.co.uk" className="text-brand-teal hover:underline">
                      charlie.oneill@cwodesigns.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Website</p>
                    <a href="https://cwodesigns.co.uk" className="text-brand-teal hover:underline">
                      cwodesigns.co.uk
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Response Time</h3>
                <p className="text-brand-gray">
                  I typically respond to inquiries within 24-48 hours during weekdays. 
                  For urgent matters, please indicate so in your message.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
