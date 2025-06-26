import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductCard from '@/components/molecules/ProductCard';
import SearchBar from '@/components/molecules/SearchBar';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';
import productService from '@/services/api/productService';

const ProductGrid = ({ limit, showFilters = true, showSearch = true }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['all', 'CNC Machining', 'Fabrication', 'Injection Molding', 'Stamping', 'Die Casting'];

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory, searchQuery]);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await productService.getAll();
      setProducts(result);
    } catch (err) {
      setError(err.message || 'Failed to load products');
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = [...products];

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Apply limit if specified
    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleViewDetails = (product) => {
    console.log('View details for:', product);
    // In a real app, this would navigate to product detail page
    toast.info(`Viewing details for ${product.name}`);
  };

  const handleRequestQuote = (product) => {
    navigate('/request-quote', { state: { selectedProduct: product } });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {showSearch && (
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
        )}
        {showFilters && (
          <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(limit || 6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">
          <p className="text-lg font-medium">Failed to load products</p>
          <p className="text-sm">{error}</p>
        </div>
        <Button variant="outline" onClick={loadProducts} icon="RefreshCw">
          Try Again
        </Button>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 mb-4">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-sm">
            {searchQuery || selectedCategory !== 'all' 
              ? 'Try adjusting your search or filters' 
              : 'Products will be available soon'
            }
          </p>
        </div>
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="flex justify-center gap-2">
            <Button variant="outline" onClick={() => setSearchQuery('')}>
              Clear Search
            </Button>
            <Button variant="outline" onClick={() => setSelectedCategory('all')}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      {showSearch && (
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search products, categories, or materials..."
        />
      )}

      {/* Category Filters */}
      {showFilters && (
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => handleCategoryFilter(category)}
            >
              {category === 'all' ? 'All Products' : category}
            </Button>
          ))}
        </div>
      )}

      {/* Results Info */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
        
        {!limit && filteredProducts.length > 0 && (
          <Button variant="outline" size="sm" icon="Filter">
            Sort by
          </Button>
        )}
      </div>

      {/* Product Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.Id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard
              product={product}
              onViewDetails={handleViewDetails}
              onRequestQuote={handleRequestQuote}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Load More / View All */}
      {limit && products.length > limit && (
        <div className="text-center pt-6">
          <Button
            variant="outline"
            size="lg"
            icon="ArrowRight"
            onClick={() => navigate('/products')}
          >
            View All Products
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;