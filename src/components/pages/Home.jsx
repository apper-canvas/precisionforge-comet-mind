import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/organisms/HeroSection';
import ProductGrid from '@/components/organisms/ProductGrid';
import CertificationCard from '@/components/molecules/CertificationCard';
import Button from '@/components/atoms/Button';
import Card from '@/components/atoms/Card';
import ApperIcon from '@/components/ApperIcon';
import { useState, useEffect } from 'react';
import certificationService from '@/services/api/certificationService';

const Home = () => {
  const navigate = useNavigate();
  const [certifications, setCertifications] = useState([]);
  const [certificationsLoading, setCertificationsLoading] = useState(false);

  useEffect(() => {
    loadCertifications();
  }, []);

  const loadCertifications = async () => {
    setCertificationsLoading(true);
    try {
      const result = await certificationService.getAll();
      setCertifications(result.slice(0, 4)); // Show first 4
    } catch (error) {
      console.error('Failed to load certifications:', error);
    } finally {
      setCertificationsLoading(false);
    }
  };

  const capabilities = [
    {
      icon: 'Settings',
      title: 'CNC Machining',
      description: 'High-precision 3, 4, and 5-axis CNC machining with tolerances to ±0.0001"',
      features: ['Multi-axis capabilities', 'Tight tolerances', 'Various materials']
    },
    {
      icon: 'Zap',
      title: 'Metal Fabrication',
      description: 'Complete fabrication services including cutting, welding, and assembly',
      features: ['Laser cutting', 'TIG/MIG welding', 'Custom assembly']
    },
    {
      icon: 'Package',
      title: 'Injection Molding',
      description: 'High-volume plastic injection molding for consumer and industrial products',
      features: ['Multi-cavity molds', 'Various plastics', 'Insert molding']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Aerospace Solutions Inc.',
      text: 'PrecisionForge has been our trusted partner for over 5 years. Their quality and delivery times are unmatched.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Automotive Systems Ltd.',
      text: 'The precision and attention to detail in every part they manufacture exceeds our expectations every time.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Medical Devices Corp.',
      text: 'Their ISO certifications and quality processes give us confidence in every order.',
      rating: 5
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Capabilities Section */}
      <section className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Manufacturing Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art equipment and processes to bring your designs to life
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card hover className="h-full text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <ApperIcon name={capability.icon} size={32} className="text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {capability.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {capability.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center justify-center text-sm text-gray-600">
                        <ApperIcon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="primary"
              size="lg"
              icon="ArrowRight"
              onClick={() => navigate('/capabilities')}
            >
              View All Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our range of precision-manufactured components and solutions
              </p>
            </motion.div>
          </div>

          <ProductGrid limit={3} showFilters={false} showSearch={false} />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Quality Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Certified quality management systems ensuring consistent excellence
              </p>
            </motion.div>
          </div>

          {certificationsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.Id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CertificationCard certification={cert} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              icon="Award"
              onClick={() => navigate('/quality')}
            >
              View All Certifications
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading companies across multiple industries
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <ApperIcon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a custom quote for your manufacturing needs. Our experts are ready to help 
              bring your designs to life with precision and quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon="FileText"
                onClick={() => navigate('/request-quote')}
                className="bg-accent hover:bg-accent/90"
              >
                Request Quote
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon="Phone"
                onClick={() => navigate('/contact')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;