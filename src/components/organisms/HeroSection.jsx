import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const HeroSection = () => {
  const navigate = useNavigate();

  const capabilities = [
    { icon: 'Settings', text: 'Precision CNC Machining' },
    { icon: 'Zap', text: 'Fast Turnaround Times' },
    { icon: 'Award', text: 'ISO 9001 Certified' },
    { icon: 'Shield', text: '99.5% Quality Rating' }
  ];

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Precision Manufacturing
                <span className="block text-accent">Excellence</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Transform your ideas into reality with our state-of-the-art manufacturing 
                capabilities. From prototypes to production, we deliver quality you can trust.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                icon="FileText"
                onClick={() => navigate('/request-quote')}
                className="bg-accent hover:bg-accent/90"
              >
                Get Quote Now
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon="Play"
                onClick={() => navigate('/capabilities')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Capabilities
              </Button>
            </motion.div>

            {/* Capabilities Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <ApperIcon name={capability.icon} size={20} className="text-white" />
                  </div>
                  <span className="font-medium text-sm">{capability.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600"
                alt="Precision manufacturing equipment"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">35+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">10k+</div>
                      <div className="text-sm text-gray-600">Parts Delivered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">99.5%</div>
                      <div className="text-sm text-gray-600">Quality Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg"
            >
              <ApperIcon name="Award" size={32} className="text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;