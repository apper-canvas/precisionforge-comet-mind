import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CertificationCard from '@/components/molecules/CertificationCard';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';
import certificationService from '@/services/api/certificationService';

const Quality = () => {
  const navigate = useNavigate();
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCertifications();
  }, []);

  const loadCertifications = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await certificationService.getAll();
      setCertifications(result);
    } catch (err) {
      setError(err.message || 'Failed to load certifications');
      toast.error('Failed to load certifications');
    } finally {
      setLoading(false);
    }
  };

  const qualityProcesses = [
    {
      icon: 'FileSearch',
      title: 'Incoming Inspection',
      description: 'All raw materials undergo thorough inspection and verification before entering production',
      steps: ['Material verification', 'Dimensional checking', 'Certification review', 'Lot tracking']
    },
    {
      icon: 'Settings',
      title: 'In-Process Control',
      description: 'Continuous monitoring and control throughout the manufacturing process',
      steps: ['First article inspection', 'Process monitoring', 'Statistical control', 'Real-time feedback']
    },
    {
      icon: 'CheckCircle',
      title: 'Final Inspection',
      description: 'Comprehensive final inspection using advanced measurement equipment',
      steps: ['CMM measurement', 'Functional testing', 'Visual inspection', 'Documentation']
    },
    {
      icon: 'Package',
      title: 'Packaging & Shipping',
      description: 'Proper packaging and handling to ensure parts arrive in perfect condition',
      steps: ['Protective packaging', 'Handling procedures', 'Shipping verification', 'Delivery tracking']
    }
  ];

  const qualityMetrics = [
    { label: 'Quality Rating', value: '99.5%', icon: 'Award' },
    { label: 'On-Time Delivery', value: '98.2%', icon: 'Clock' },
    { label: 'Customer Satisfaction', value: '99.8%', icon: 'Heart' },
    { label: 'Zero Defect Rate', value: '99.1%', icon: 'Shield' }
  ];

  const standards = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management Systems standard ensuring consistent quality delivery',
      scope: 'All manufacturing processes and customer interactions',
      benefits: ['Process standardization', 'Continuous improvement', 'Customer focus', 'Risk management']
    },
    {
      title: 'AS9100D',
      description: 'Aerospace Quality Management System for aviation, space, and defense',
      scope: 'Aerospace components and assemblies manufacturing',
      benefits: ['Configuration management', 'Risk assessment', 'Project management', 'First article inspection']
    },
    {
      title: 'IATF 16949',
      description: 'Automotive Quality Management System for automotive supply chain',
      scope: 'Automotive parts and systems manufacturing',
      benefits: ['Mistake proofing', 'Statistical techniques', 'Production part approval', 'Control plans']
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management System for sustainable manufacturing',
      scope: 'Environmental impact reduction and sustainability',
      benefits: ['Waste reduction', 'Energy efficiency', 'Regulatory compliance', 'Environmental protection']
    }
  ];

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
              Quality Standards
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Quality isn't just a goal—it's our commitment. Our comprehensive quality 
              management systems, advanced inspection capabilities, and certified processes 
              ensure every part meets the highest standards of excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Metrics */}
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
              Quality Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={metric.icon} size={32} className="text-accent" />
                  </div>
                  
                  <div className="text-3xl font-bold text-accent mb-2">
                    {metric.value}
                  </div>
                  
                  <h3 className="font-semibold text-primary">
                    {metric.label}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
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
              Quality Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality control at every stage of manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityProcesses.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <ApperIcon name={process.icon} size={24} className="text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {process.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {process.description}
                  </p>
                  
                  <ul className="space-y-1">
                    {process.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-center text-xs text-gray-600">
                        <ApperIcon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications that validate our quality commitment
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-500 mb-4">
                <p className="text-lg font-medium">Failed to load certifications</p>
                <p className="text-sm">{error}</p>
              </div>
              <Button variant="outline" onClick={loadCertifications} icon="RefreshCw">
                Try Again
              </Button>
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
        </div>
      </section>

      {/* Quality Standards Detail */}
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
              Quality Standards Detail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding our certified quality management systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {standard.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {standard.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Scope:</h4>
                    <p className="text-sm text-gray-600">{standard.scope}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {standard.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-center text-sm text-gray-600">
                          <ApperIcon name="Check" size={14} className="text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
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
              Experience Quality Excellence
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with us to experience manufacturing excellence backed by certified 
              quality systems and measurable performance.
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
                icon="Download"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Download Certificates
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Quality;