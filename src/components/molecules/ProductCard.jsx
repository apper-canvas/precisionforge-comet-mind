import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';

const ProductCard = ({ product, onViewDetails, onRequestQuote }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {!imageError ? (
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            )}
            <img
              src={product.images?.[0] || 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800'}
              alt={product.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-2">📦</div>
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <Badge variant="primary">{product.category}</Badge>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {product.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-800 mb-2">Materials:</h4>
          <div className="flex flex-wrap gap-1">
            {product.materials?.slice(0, 3).map((material, index) => (
              <Badge key={index} variant="default" size="sm">
                {material}
              </Badge>
            ))}
            {product.materials?.length > 3 && (
              <Badge variant="secondary" size="sm">
                +{product.materials.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onViewDetails?.(product)}
          >
            View Details
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            onClick={() => onRequestQuote?.(product)}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;