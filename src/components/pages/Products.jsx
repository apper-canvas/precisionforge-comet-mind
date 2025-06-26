import { motion } from 'framer-motion';
import ProductGrid from '@/components/organisms/ProductGrid';

const Products = () => {
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
              Our Products
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our comprehensive range of precision-manufactured components and solutions. 
              From prototypes to high-volume production, we deliver quality parts that meet the 
              most demanding specifications across multiple industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ProductGrid />
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Material Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                We work with a wide range of materials including aluminum, steel, stainless steel, 
                titanium, and various engineering plastics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Aerospace-grade materials</li>
                <li>• Medical-grade polymers</li>
                <li>• High-strength alloys</li>
                <li>• Exotic materials</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 mb-4">
                Every product undergoes rigorous quality control processes to ensure it meets 
                your exact specifications and industry standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 100% inspection protocols</li>
                <li>• CMM verification</li>
                <li>• Material certifications</li>
                <li>• Traceability documentation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Custom Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Don't see exactly what you need? We specialize in custom manufacturing 
                solutions tailored to your unique requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Design consultation</li>
                <li>• Prototype development</li>
                <li>• Process optimization</li>
                <li>• Volume production</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;