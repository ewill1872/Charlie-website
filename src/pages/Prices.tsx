
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Prices = () => {
  const packages = [
    {
      name: 'Simple Design',
      price: '£50',
      description: 'A design with your specifications and preferences, no website',
      features: [
        '£50 per design',
        'Annotated and clear view',
        'Including any content specified by you',
        '2 rounds of revisions'
      ]
},
    
    {
      name: 'Basic Website',
      price: '£450',
      description: 'Perfect for small businesses or personal sites needing a simple online presence.',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        '2 rounds of revisions',
        '1 month support'
      ]
    },
    {
      name: 'Business Website',
      price: '£950',
      description: 'Comprehensive solution for growing businesses with more complex needs.',
      features: [
        'Up to 10 pages',
        'Responsive design',
        'Advanced SEO setup',
        'Content management system',
        'Blog/News section',
        'Social media integration',
        '3 rounds of revisions',
        '3 months support'
      ],
      highlighted: true
    },
    {
      name: 'E-commerce Website',
      price: 'From £1,500',
      description: 'Full-featured online store for businesses selling products or services.',
      features: [
        'Up to 20 pages + product pages',
        'Responsive design',
        'E-commerce functionality',
        'Payment gateway integration',
        'Product management system',
        'Order tracking',
        'Advanced SEO setup',
        '3 rounds of revisions',
        '6 months support'
      ]
    }
  ];

  const services = [
    {
      name: 'Hourly Rate',
      price: '£10/hour',
      description: 'For smaller tasks, specific updates, or consulting services.'
    },
    {
      name: 'Website Redesign',
      price: 'From £350',
      description: 'Update the look and feel of your existing website with a fresh design.'
    },
    {
      name: 'Website Maintenance',
      price: '£75/month',
      description: 'Regular updates, security checks, backups, and minor content changes.'
    },
    {
      name: 'Custom Web Application',
      price: 'Custom Quote',
      description: 'Tailored web applications built to your specific requirements.'
    }
  ];

  return (
    <div className="pt-16">
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6">Pricing & Packages</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Transparent, competitive pricing for web design and development services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">Website Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden border ${
                  pkg.highlighted 
                    ? 'border-brand-teal shadow-lg relative' 
                    : 'border-gray-200 shadow-sm'
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-brand-teal text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  <div className="mt-4 mb-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                  </div>
                  <p className="text-brand-gray mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <Check size={18} className="text-brand-teal mr-2 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full bg-brand-navy hover:bg-brand-navy/90">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-center mb-4">Additional Services</h2>
          <p className="text-center text-lg text-brand-gray mb-12 max-w-2xl mx-auto">
            Need something specific? Here are some additional services I offer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <span className="text-xl font-bold text-brand-teal">{service.price}</span>
                </div>
                <p className="text-brand-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto text-center">
          <h2 className="mb-4">Need a Custom Quote?</h2>
          <p className="text-lg text-brand-gray mb-8 max-w-2xl mx-auto">
            Every project is unique. If you don't see a package that fits your needs, 
            I'd be happy to provide a custom quote based on your specific requirements.
          </p>
          <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 text-white">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Prices;
