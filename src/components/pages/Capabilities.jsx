import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';
import ApperIcon from '@/components/ApperIcon';

const Capabilities = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      title: 'CNC Machining',
      icon: 'Settings',
      description: 'State-of-the-art CNC machining centers with 3, 4, and 5-axis capabilities',
      specifications: {
        'Max Part Size': '24" x 24" x 12"',
        'Tolerance': '±0.0001"',
        'Materials': 'Aluminum, Steel, Titanium, Stainless',
        'Capacity': '50+ machines'
      },
      processes: ['Milling', 'Turning', 'Threading', 'Boring', 'Drilling'],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800'
    },
    {
      title: 'Metal Fabrication',
      icon: 'Zap',
      description: 'Complete fabrication services from cutting to final assembly',
      specifications: {
        'Material Thickness': '0.5mm - 25mm',
        'Max Sheet Size': '144" x 60"',
        'Welding Types': 'TIG, MIG, Stick',
        'Cutting Methods': 'Laser, Plasma, Waterjet'
      },
      processes: ['Laser Cutting', 'Forming', 'Welding', 'Assembly', 'Finishing'],
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800'
    },
    {
      title: 'Injection Molding',
      icon: 'Package',
      description: 'High-volume plastic injection molding for complex geometries',
      specifications: {
        'Shot Size': '1oz - 50oz',
        'Mold Size': 'Up to 36" x 36"',
        'Cavities': '1-32 cavity molds',
        'Cycle Time': '15-300 seconds'
      },
      processes: ['Insert Molding', 'Overmolding', 'Two-Shot', 'Gas Assist', 'Hot Runner'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800'
    },
    {
      title: 'Sheet Metal Stamping',
      icon: 'Layers',
      description: 'Progressive die stamping for high-volume precision parts',
      specifications: {
        'Material Thickness': '0.3mm - 6mm',
        'Press Force': 'Up to 400 tons',
        'Part Size': 'Up to 24" x 18"',
        'Tolerance': '±0.05mm'
      },
      processes: ['Progressive Die', 'Transfer Die', 'Deep Drawing', 'Coining', 'Piercing'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'
    },
    {
      title: 'Die Casting',
      icon: 'Cpu',
      description: 'High-pressure die casting for complex metal components',
      specifications: {
        'Materials': 'Aluminum, Zinc, Magnesium',
        'Max Weight': '10kg',
        'Wall Thickness': '0.6mm - 6mm',
        'Surface Finish': 'Ra 0.8-3.2'
      },
      processes: ['Hot Chamber', 'Cold Chamber', 'Squeeze Casting', 'Semi-Solid', 'Vacuum'],
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800'
    },
    {
      title: 'Assembly Services',
      icon: 'Wrench',
      description: 'Complete product assembly and testing services',
      specifications: {
        'Assembly Types': 'Mechanical, Electronic',
        'Testing': 'Functional, Performance',
        'Packaging': 'Custom, Standard',
        'Volume': '1-100,000+ units'
      },
      processes: ['Sub-Assembly', 'Final Assembly', 'Testing', 'Packaging', 'Logistics'],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800'
    }
  ];

  const equipment = [
    {
      name: 'Haas VF-9/50',
      type: '5-Axis CNC Machining Center',
      specifications: '50" x 26" x 25" travel, 12,000 RPM spindle',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400'
    },
    {
      name: 'Trumpf TruLaser 3030',
      type: 'Fiber Laser Cutting System',
      specifications: '5kW fiber laser, 60" x 120" cutting area',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400'
    },
    {
      name: 'Engel Victory 440',
      type: 'Injection Molding Machine',
      specifications: '440-ton clamping force, 38oz shot size',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400'
    },
    {
      name: 'Aida NC1-400',
      type: 'Progressive Die Press',
      specifications: '400-ton capacity, 24" x 18" bolster',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400'
    }
  ];

  const industries = [
    {
      name: 'Aerospace',
      icon: 'Plane',
      description: 'Critical flight components and assemblies',
      certifications: ['AS9100D', 'NADCAP']
    },
    {
      name: 'Automotive',
      icon: 'Car',
      description: 'Engine components and chassis parts',
      certifications: ['IATF 16949', 'PPAP']
    },
    {
      name: 'Medical',
      icon: 'Heart',
      description: 'Surgical instruments and implants',
      certifications: ['ISO 13485', 'FDA']
    },
    {
      name: 'Industrial',
      icon: 'Factory',
      description: 'Heavy machinery and equipment',
      certifications: ['ISO 9001', 'CE']
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
              Manufacturing Capabilities
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive manufacturing solutions backed by state-of-the-art equipment, 
              skilled craftsmen, and rigorous quality processes. From concept to completion, 
              we have the capabilities to bring your most challenging projects to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <ApperIcon name={capability.icon} size={24} className="text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary">
                          {capability.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 text-sm">
                        {capability.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-800 text-sm">Key Specifications:</h4>
                        <div className="space-y-2">
                          {Object.entries(capability.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-xs">
                              <span className="text-gray-600">{key}:</span>
                              <span className="text-gray-800 font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-800 text-sm mb-2">Processes:</h4>
                        <div className="flex flex-wrap gap-1">
                          {capability.processes.map((process, pIndex) => (
                            <Badge key={pIndex} variant="default" size="sm">
                              {process}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <img
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
</section>

      {/* Manufacturing Process Timeline */}
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
              Manufacturing Process Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw materials to finished products - our comprehensive manufacturing journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
            {/* Timeline connecting line for larger screens */}
            <div className="hidden xl:block absolute top-24 left-0 right-0 h-0.5 bg-accent/20 z-0"></div>
            
            {[
              {
                stage: "Raw Materials",
                icon: "Package",
                description: "Premium materials sourced from certified suppliers",
                color: "from-blue-500 to-blue-600"
              },
              {
                stage: "Machining",
                icon: "Cogs",
                description: "Precision CNC machining to exact specifications",
                color: "from-green-500 to-green-600"
              },
              {
                stage: "Fabrication",
                icon: "Hammer",
                description: "Expert fabrication using advanced techniques",
                color: "from-purple-500 to-purple-600"
              },
              {
                stage: "Quality Control",
                icon: "TestTube",
                description: "Rigorous testing and inspection protocols",
                color: "from-orange-500 to-orange-600"
              },
              {
                stage: "Assembly",
                icon: "CheckCircle",
                description: "Final assembly and comprehensive testing",
                color: "from-teal-500 to-teal-600"
              },
              {
                stage: "Delivery",
                icon: "Truck",
                description: "Secure packaging and on-time delivery",
                color: "from-red-500 to-red-600"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative z-10"
              >
                <Card hover className="h-full text-center relative overflow-hidden">
                  {/* Timeline number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">{index + 1}</span>
                  </div>
                  
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <ApperIcon name={process.icon} size={32} className="text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {process.stage}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-1">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            i <= index ? 'bg-accent' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </Card>
                
                {/* Connecting arrow for larger screens */}
                {index < 5 && (
                  <div className="hidden xl:block absolute top-24 -right-3 z-20">
                    <ApperIcon name="ChevronRight" size={16} className="text-accent/60" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Additional process info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-surface-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-primary mb-4">
                End-to-End Manufacturing Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our streamlined process ensures consistent quality, on-time delivery, and complete traceability 
                throughout every stage of manufacturing. From initial material inspection to final packaging, 
                each step is carefully monitored and documented to meet the highest industry standards.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-gray-600">Quality Inspected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Process Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">±0.0001"</div>
                  <div className="text-sm text-gray-600">Precision Tolerance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">ISO 9001</div>
                  <div className="text-sm text-gray-600">Certified Process</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment Gallery */}
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
              Equipment Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art manufacturing equipment for precision and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="font-semibold text-primary mb-2">
                    {item.name}
                  </h3>
                  
                  <p className="text-accent text-sm font-medium mb-2">
                    {item.type}
                  </p>
                  
                  <p className="text-gray-600 text-xs">
                    {item.specifications}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across critical manufacturing sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <ApperIcon name={industry.icon} size={32} className="text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {industry.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-1">
                    {industry.certifications.map((cert, cIndex) => (
                      <Badge key={cIndex} variant="primary" size="sm">
                        {cert}
                      </Badge>
                    ))}
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
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our engineering team is ready to review your requirements and recommend 
              the best manufacturing approach for your specific needs.
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
                icon="MessageSquare"
                onClick={() => navigate('/contact')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Discuss Requirements
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Capabilities;