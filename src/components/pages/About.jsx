import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const About = () => {
  const navigate = useNavigate();

  const timeline = [
    {
      year: '1985',
      title: 'Company Founded',
      description: 'Started as a small machine shop with a focus on precision manufacturing'
    },
    {
      year: '1992',
      title: 'ISO 9001 Certification',
      description: 'Achieved our first quality management certification'
    },
    {
      year: '2000',
      title: 'Facility Expansion',
      description: 'Expanded to 50,000 sq ft with advanced CNC equipment'
    },
    {
      year: '2008',
      title: 'Aerospace Certification',
      description: 'Obtained AS9100 certification for aerospace manufacturing'
    },
    {
      year: '2015',
      title: 'Automation Integration',
      description: 'Implemented robotics and Industry 4.0 technologies'
    },
    {
      year: '2024',
      title: 'Sustainable Manufacturing',
      description: 'Leading green manufacturing initiatives and carbon neutrality goals'
    }
  ];

  const values = [
    {
      icon: 'Award',
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to delivering the highest quality products that exceed customer expectations.'
    },
    {
      icon: 'Users',
      title: 'Customer Focus',
      description: 'Building lasting partnerships through exceptional service, responsiveness, and collaborative problem-solving.'
    },
    {
      icon: 'Zap',
      title: 'Innovation',
      description: 'Continuously investing in advanced technologies and processes to stay at the forefront of manufacturing.'
    },
    {
      icon: 'Shield',
      title: 'Reliability',
      description: 'Consistent performance and on-time delivery that our customers can depend on, project after project.'
    },
    {
      icon: 'Leaf',
      title: 'Sustainability',
      description: 'Responsible manufacturing practices that protect our environment for future generations.'
    },
    {
      icon: 'Target',
      title: 'Precision',
      description: 'Meticulous attention to detail in every aspect of our manufacturing processes and quality control.'
    }
  ];

  const leadership = [
    {
      name: 'Robert Johnson',
      title: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: '35+ years of manufacturing experience, leading PrecisionForge with vision for excellence and innovation.'
    },
    {
      name: 'Sarah Mitchell',
      title: 'VP of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b45f2db0?w=400',
      bio: 'Expert in lean manufacturing and quality systems, ensuring operational excellence across all divisions.'
    },
    {
      name: 'David Chen',
      title: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'Leading our technical innovation with expertise in advanced manufacturing technologies and process optimization.'
    }
  ];

  const stats = [
    { value: '35+', label: 'Years Experience' },
    { value: '10k+', label: 'Parts Delivered' },
    { value: '99.5%', label: 'Quality Rating' },
    { value: '200+', label: 'Satisfied Clients' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                About PrecisionForge
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                For over three decades, we've been at the forefront of precision manufacturing, 
                delivering quality solutions that power industries worldwide. Our commitment to 
                excellence, innovation, and customer satisfaction drives everything we do.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800"
                alt="Manufacturing facility"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <ApperIcon name="Factory" size={40} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  What began as a small machine shop in 1985 has evolved into one of the region's 
                  most trusted precision manufacturing partners. Founded by Robert Johnson with a 
                  simple mission—to deliver uncompromising quality and service—PrecisionForge has 
                  grown from a 2-person operation to a team of over 150 skilled professionals.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our journey has been marked by continuous investment in people, technology, and 
                  processes. From our first CNC machine in 1987 to today's state-of-the-art 
                  5-axis machining centers and automated production cells, we've always stayed 
                  ahead of industry demands while maintaining our core values of quality, 
                  reliability, and customer satisfaction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we proudly serve customers across aerospace, automotive, medical, and 
                  industrial sectors, but our commitment remains unchanged: to be the manufacturing 
                  partner you can trust with your most critical projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our company and capabilities
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-accent font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                </div>
                
                <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg flex-shrink-0 z-10" />
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <ApperIcon name={value.icon} size={32} className="text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card hover className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {leader.name}
                  </h3>
                  
                  <p className="text-accent font-medium mb-4">
                    {leader.title}
                  </p>
                  
                  <p className="text-gray-600 text-sm">
                    {leader.bio}
                  </p>
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
              Partner with PrecisionForge
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to experience the PrecisionForge difference? Let's discuss how our 
              expertise and commitment to quality can support your next project.
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

export default About;