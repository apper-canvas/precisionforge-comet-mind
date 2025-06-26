import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';

const CertificationCard = ({ certification }) => {
  const isValid = new Date(certification.validUntil) > new Date();
  const validUntilFormatted = format(new Date(certification.validUntil), 'MMM dd, yyyy');

  const handleDownload = () => {
    // In a real app, this would download the PDF
    console.log('Downloading certificate:', certification.documentUrl);
  };

  return (
    <Card hover className="text-center">
      <div className="mb-4">
        <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={certification.logo}
            alt={`${certification.name} logo`}
            className="w-16 h-16 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-16 h-16 items-center justify-center text-gray-400 text-2xl">
            🏆
          </div>
        </div>
        
        <h3 className="font-semibold text-primary text-lg mb-2">
          {certification.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">
          {certification.issuer}
        </p>
        
        <div className="flex justify-center mb-4">
          <Badge 
            variant={isValid ? 'success' : 'warning'}
            size="sm"
          >
            {isValid ? 'Valid' : 'Expires Soon'}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">
          Valid until: {validUntilFormatted}
        </p>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        fullWidth
        icon="Download"
        onClick={handleDownload}
      >
        Download Certificate
      </Button>
    </Card>
  );
};

export default CertificationCard;