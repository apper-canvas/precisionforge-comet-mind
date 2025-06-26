import { NavLink } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import { routes } from '@/config/routes';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    routes.home,
    routes.about,
    routes.products,
    routes.capabilities
  ];

  const serviceLinks = [
    routes.quality,
    routes.contact,
    routes.requestQuote
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <ApperIcon name="Zap" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-heading font-bold">
                PrecisionForge
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading manufacturer providing precision machining, fabrication, and quality solutions 
              for aerospace, automotive, and industrial applications since 1985.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <ApperIcon name="MapPin" size={18} className="text-accent" />
                <span className="text-gray-300">
                  1234 Industrial Blvd, Manufacturing City, MC 12345
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <ApperIcon name="Phone" size={18} className="text-accent" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" size={18} className="text-accent" />
                <span className="text-gray-300">info@precisionforge.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ApperIcon name={link.icon} size={16} />
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ApperIcon name={link.icon} size={16} />
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <ApperIcon name={social.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} PrecisionForge Manufacturing. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors duration-200">
              ISO Certifications
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;