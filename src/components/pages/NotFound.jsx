import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex items-center justify-center bg-surface-50"
    >
      <div className="text-center py-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <ApperIcon name="AlertTriangle" size={64} className="text-accent" />
          </div>
          
          <h1 className="text-6xl font-heading font-bold text-primary mb-4">
            404
          </h1>
          
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Page Not Found
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to where you need to be.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="primary"
            size="lg"
            icon="Home"
            onClick={() => navigate('/')}
          >
            Go Home
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            icon="ArrowLeft"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-gray-500 mb-4">Need help finding something?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/products')}
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Browse Products
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => navigate('/capabilities')}
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Our Capabilities
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => navigate('/contact')}
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;