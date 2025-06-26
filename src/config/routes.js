import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Products from '@/components/pages/Products';
import Capabilities from '@/components/pages/Capabilities';
import Quality from '@/components/pages/Quality';
import Contact from '@/components/pages/Contact';
import RequestQuote from '@/components/pages/RequestQuote';
import NotFound from '@/components/pages/NotFound';

export const routes = {
  home: {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: 'Home',
    component: Home
  },
  about: {
    id: 'about',
    label: 'About Us',
    path: '/about',
    icon: 'Building2',
    component: About
  },
  products: {
    id: 'products',
    label: 'Products',
    path: '/products',
    icon: 'Package',
    component: Products
  },
  capabilities: {
    id: 'capabilities',
    label: 'Capabilities',
    path: '/capabilities',
    icon: 'Settings',
    component: Capabilities
  },
  quality: {
    id: 'quality',
    label: 'Quality',
    path: '/quality',
    icon: 'Award',
    component: Quality
  },
  contact: {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    icon: 'Phone',
    component: Contact
  },
  requestQuote: {
    id: 'requestQuote',
    label: 'Request Quote',
    path: '/request-quote',
    icon: 'FileText',
    component: RequestQuote
  },
  notFound: {
    id: 'notFound',
    label: '404',
    path: '*',
    icon: 'AlertCircle',
    component: NotFound
  }
};

export const routeArray = Object.values(routes);
export default routes;