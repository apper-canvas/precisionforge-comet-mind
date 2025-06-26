import { motion } from 'framer-motion';
import ContactForm from '@/components/molecules/ContactForm';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Address',
      details: ['1234 Industrial Boulevard', 'Manufacturing City, MC 12345', 'United States']
    },
    {
      icon: 'Phone',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Fax)']
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['info@precisionforge.com', 'quotes@precisionforge.com', 'support@precisionforge.com']
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      details: ['Monday - Friday: 7:00 AM - 6:00 PM', 'Saturday: 8:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ];

  const departments = [
    {
      name: 'Sales & Quotes',
      phone: '+1 (555) 123-4567',
      email: 'quotes@precisionforge.com',
      description: 'New projects, quotes, and general inquiries'
    },
    {
      name: 'Engineering',
      phone: '+1 (555) 123-4568',
      email: 'engineering@precisionforge.com',
      description: 'Technical support and design consultation'
    },
    {
      name: 'Quality Assurance',
      phone: '+1 (555) 123-4569',
      email: 'quality@precisionforge.com',
      description: 'Quality concerns and certifications'
    },
    {
      name: 'Customer Service',
      phone: '+1 (555) 123-4570',
      email: 'support@precisionforge.com',
      description: 'Order status and general support'
    }
  ];

  const handleFormSubmit = async (formData) => {
    // In a real app, this would send the form data to a backend
    console.log('Form submitted:', formData);
    return Promise.resolve();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch with our team of manufacturing experts. We're here to help 
              with your project requirements, technical questions, and quote requests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={info.icon} size={32} className="text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-1">
                    {info.details.map((detail, dIndex) => (
                      <p key={dIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm onSubmit={handleFormSubmit} />
            </motion.div>

            {/* Contact Details & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <ApperIcon name="MapPin" size={48} className="mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">1234 Industrial Boulevard</p>
                    <p className="text-sm">Manufacturing City, MC 12345</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Visit Our Facility</h3>
                    <p className="text-gray-600 text-sm">Schedule a tour of our manufacturing facility</p>
                  </div>
                  <Button variant="outline" size="sm" icon="ExternalLink">
                    Get Directions
                  </Button>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name="AlertCircle" size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Emergency Support</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      For urgent production issues or quality concerns outside of business hours.
                    </p>
                    <p className="font-medium text-accent">+1 (555) 123-URGENT</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to the right department for faster assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ApperIcon name="Users" size={24} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {dept.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {dept.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <ApperIcon name="Phone" size={16} className="text-gray-400" />
                          <span className="text-sm font-medium text-primary">{dept.phone}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <ApperIcon name="Mail" size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">{dept.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What's your typical lead time for custom parts?",
                answer: "Lead times vary based on complexity and quantity, but typically range from 2-6 weeks for custom machined parts and 4-8 weeks for new tooling."
              },
              {
                question: "Do you provide material certificates?",
                answer: "Yes, we provide full material traceability and certificates for all materials used in production, including mill test certificates when required."
              },
              {
                question: "What file formats do you accept for drawings?",
                answer: "We accept most standard formats including PDF, DWG, DXF, STEP, IGES, and native CAD files from SolidWorks, AutoCAD, and other major platforms."
              },
              {
                question: "Can you help with design optimization?",
                answer: "Absolutely! Our engineering team can review your designs and suggest optimizations for manufacturability, cost reduction, and performance improvement."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;