import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';
import ApperIcon from '@/components/ApperIcon';
import productService from '@/services/api/productService';
import quoteService from '@/services/api/quoteService';

const RequestQuote = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedProduct = location.state?.selectedProduct;

  const [formData, setFormData] = useState({
    // Customer Info
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Project Details
    productCategory: selectedProduct?.category || '',
    productName: selectedProduct?.name || '',
    quantity: '',
    timeline: '',
    specifications: '',
    materials: selectedProduct?.materials?.[0] || '',
    
    // Additional Info
    drawings: null,
    additionalNotes: ''
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const result = await productService.getAll();
      setProducts(result);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleProductSelect = (product) => {
    setFormData(prev => ({
      ...prev,
      productCategory: product.category,
      productName: product.name,
      materials: product.materials?.[0] || ''
    }));
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    if (stepNumber === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.company.trim()) newErrors.company = 'Company is required';
    }
    
    if (stepNumber === 2) {
      if (!formData.productCategory) newErrors.productCategory = 'Product category is required';
      if (!formData.quantity) newErrors.quantity = 'Quantity is required';
      if (!formData.timeline) newErrors.timeline = 'Timeline is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(2)) {
      toast.error('Please complete all required fields');
      return;
    }
    
    setSubmitLoading(true);
    
    try {
      const quoteData = {
        customerInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company
        },
        products: [{
          productCategory: formData.productCategory,
          productName: formData.productName,
          quantity: parseInt(formData.quantity, 10),
          specifications: formData.specifications,
          materials: formData.materials
        }],
        specifications: formData.additionalNotes,
        timeline: formData.timeline,
        quantity: parseInt(formData.quantity, 10)
      };
      
      await quoteService.submitQuote(quoteData);
      
      toast.success('Quote request submitted successfully! We\'ll get back to you within 24 hours.');
      
      // Navigate to success page or reset form
      setStep(3); // Success step
      
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setSubmitLoading(false);
    }
  };

  const categories = [...new Set(products.map(p => p.category))];
  const materials = [...new Set(products.flatMap(p => p.materials || []))];

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
              Request a Quote
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get a detailed quote for your manufacturing project. Our team will review 
              your requirements and provide a comprehensive proposal within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {step < 3 && (
              <>
                {/* Progress Indicator */}
                <div className="mb-12">
                  <div className="flex items-center justify-center space-x-4">
                    {[1, 2].map((stepNum) => (
                      <div key={stepNum} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          stepNum <= step ? 'bg-accent text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {stepNum}
                        </div>
                        {stepNum < 2 && (
                          <div className={`w-20 h-1 mx-4 ${
                            stepNum < step ? 'bg-accent' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-4">
                    <p className="text-gray-600">
                      Step {step} of 2: {step === 1 ? 'Contact Information' : 'Project Details'}
                    </p>
                  </div>
                </div>

                <Card>
                  <form onSubmit={step === 2 ? handleSubmit : (e) => e.preventDefault()}>
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="mb-8">
                          <h2 className="text-2xl font-semibold text-primary mb-2">
                            Contact Information
                          </h2>
                          <p className="text-gray-600">
                            Tell us about yourself and your company
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                            required
                            icon="User"
                          />
                          
                          <Input
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            required
                            icon="Mail"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            icon="Phone"
                          />
                          
                          <Input
                            label="Company Name"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            error={errors.company}
                            required
                            icon="Building2"
                          />
                        </div>

                        <div className="flex justify-end pt-6">
                          <Button
                            type="button"
                            variant="primary"
                            size="lg"
                            icon="ArrowRight"
                            onClick={handleNext}
                          >
                            Continue to Project Details
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="mb-8">
                          <h2 className="text-2xl font-semibold text-primary mb-2">
                            Project Details
                          </h2>
                          <p className="text-gray-600">
                            Provide details about your manufacturing requirements
                          </p>
                        </div>

                        {/* Product Selection */}
                        {!selectedProduct && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">
                              Select Product Category *
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {categories.map((category) => (
                                <button
                                  key={category}
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, productCategory: category }))}
                                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                                    formData.productCategory === category
                                      ? 'border-accent bg-accent/5'
                                      : 'border-gray-200 hover:border-gray-300'
                                  }`}
                                >
                                  <h3 className="font-medium text-primary">{category}</h3>
                                </button>
                              ))}
                            </div>
                            {errors.productCategory && (
                              <p className="mt-2 text-sm text-red-600">{errors.productCategory}</p>
                            )}
                          </div>
                        )}

                        {selectedProduct && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Selected Product
                            </label>
                            <Card className="border-accent bg-accent/5">
                              <div className="flex items-center space-x-4">
                                <img
                                  src={selectedProduct.images?.[0]}
                                  alt={selectedProduct.name}
                                  className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div>
                                  <h3 className="font-semibold text-primary">{selectedProduct.name}</h3>
                                  <Badge variant="accent" size="sm">{selectedProduct.category}</Badge>
                                </div>
                              </div>
                            </Card>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input
                            label="Quantity"
                            name="quantity"
                            type="number"
                            value={formData.quantity}
                            onChange={handleChange}
                            error={errors.quantity}
                            required
                            icon="Hash"
                            placeholder="e.g. 100"
                          />
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Timeline *
                            </label>
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent ${
                                errors.timeline ? 'border-red-500' : 'border-gray-300'
                              }`}
                              required
                            >
                              <option value="">Select timeline</option>
                              <option value="Rush (1-2 weeks)">Rush (1-2 weeks)</option>
                              <option value="Standard (3-4 weeks)">Standard (3-4 weeks)</option>
                              <option value="Extended (5-8 weeks)">Extended (5-8 weeks)</option>
                              <option value="Flexible">Flexible</option>
                            </select>
                            {errors.timeline && (
                              <p className="mt-1 text-sm text-red-600">{errors.timeline}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input
                            label="Product Name"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            icon="Package"
                            placeholder="Custom part name"
                          />
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Preferred Material
                            </label>
                            <select
                              name="materials"
                              value={formData.materials}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                            >
                              <option value="">Select material</option>
                              {materials.map((material) => (
                                <option key={material} value={material}>{material}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Technical Specifications
                          </label>
                          <textarea
                            name="specifications"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none"
                            placeholder="Describe tolerances, finishes, dimensions, or other technical requirements..."
                            value={formData.specifications}
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Drawings/Files
                          </label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent transition-colors">
                            <ApperIcon name="Upload" size={48} className="mx-auto text-gray-400 mb-4" />
                            <input
                              type="file"
                              name="drawings"
                              accept=".pdf,.dwg,.dxf,.step,.iges"
                              onChange={handleChange}
                              className="hidden"
                              id="file-upload"
                            />
                            <label htmlFor="file-upload" className="cursor-pointer">
                              <p className="text-gray-600 mb-2">
                                Click to upload or drag and drop
                              </p>
                              <p className="text-sm text-gray-500">
                                PDF, DWG, DXF, STEP, IGES files up to 10MB
                              </p>
                            </label>
                            {formData.drawings && (
                              <p className="mt-2 text-sm text-accent">
                                Selected: {formData.drawings.name}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Notes
                          </label>
                          <textarea
                            name="additionalNotes"
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent resize-none"
                            placeholder="Any additional information about your project..."
                            value={formData.additionalNotes}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="flex justify-between pt-6">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            icon="ArrowLeft"
                            onClick={handlePrevious}
                          >
                            Back
                          </Button>
                          
                          <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            loading={submitLoading}
                            icon="Send"
                          >
                            Submit Quote Request
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </Card>
              </>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <ApperIcon name="CheckCircle" size={48} className="text-green-600" />
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Quote Request Submitted!
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Thank you for your quote request. Our team will review your requirements 
                  and get back to you with a detailed proposal within 24 hours.
                </p>
                
                <div className="bg-surface-50 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                  <h3 className="font-semibold text-primary mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <p className="text-gray-600">Our engineering team reviews your requirements</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <p className="text-gray-600">We prepare a detailed quote with pricing and timeline</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <p className="text-gray-600">You receive your custom quote via email</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    icon="Home"
                    onClick={() => navigate('/')}
                  >
                    Return Home
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    icon="Phone"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default RequestQuote;