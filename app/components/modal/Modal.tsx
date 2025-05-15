import { useState } from 'react';
import { X } from 'lucide-react';
import { ProductData } from '../type'; // Import from your types file

import DoubleDeflectionGrilleModal from '../modal/DoubleDeflectionGrilleModal';
import LinearBarModal from '../modal/LinearBarGrilleModal';

interface MainModalProps {
  onClose: () => void;
  onSubmit: (result: ProductData) => void;
}

// Product list
const products = [
  { name: 'Double Deflection Grilles (SAG/RAG)', image: '/Pictures/double_deflection.jpg' },
  { name: 'Linear Bar Grilles (SLBG/RLBG)', image: '/Pictures/linear_bar.jpg' },
  { name: 'Linear Slot Diffuser (SLSD/RLSD)', image: '/Pictures/linear_slot.jpg' },
  { name: 'Flow Bar Diffusers (FBD)', image: '/Pictures/flow_bar.jpg' },
  { name: 'Sand Trap Louver (STL-A)', image: '/Pictures/air_louvers.jpg' },
  { name: 'Ceiling Diffusers (SSCD)', image: '/Pictures/ceiling_diffusers.jpg' },
  { name: 'Drum Jet Diffusers (DJD)', image: '/Pictures/drum_jet.jpg' },
  { name: 'Eyeball Diffusers (JN-EB)', image: '/Pictures/eyeball.jpg' },
];

const MainModal = ({ onClose, onSubmit }: MainModalProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [step, setStep] = useState<'select' | 'details'>('select');

  const handleSelectProduct = (product: string) => {
    setSelectedProduct(product);
    setStep('details');
  };

  const renderProductModal = (productName: string) => {
    const sharedProps = {
      onClose,
      onSubmit: (data: ProductData) => {
        onSubmit(data);
      },
    };

    switch (productName) {
      case 'Double Deflection Grilles (SAG/RAG)':
        return <DoubleDeflectionGrilleModal {...sharedProps} />;
      case 'Linear Bar Grilles (SLBG/RLBG)':
        return <LinearBarModal {...sharedProps} />;
      default:
        return <div className="p-6 text-center text-gray-600">No details available for <strong>{productName}</strong></div>;
    }
  };

  const getCurrentImage = () => {
    const imageProduct = hoveredProduct || selectedProduct || products[0].name;
    return products.find((product) => product.name === imageProduct)?.image ?? '/default.jpg';
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white w-[1400px] h-[700px] rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Panel */}
        <div className="w-1/2 p-6 overflow-y-auto">
          {/* Breadcrumb / Steps */}
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded-full text-sm font-frutiger text-white ${step === 'select' ? 'bg-brand' : 'bg-brandGray'}`}
              onClick={() => setStep('select')}
              type="button"
            >
              Select Product
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-frutiger text-white ${step === 'details' ? 'bg-brand' : 'bg-brandGray'}`}
              onClick={() => selectedProduct && setStep('details')}
              disabled={!selectedProduct}
              type="button"
            >
              Enter Details
            </button>
          </div>

          {/* Product List or Details */}
          {step === 'select' ? (
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className={`flex items-center gap-2 cursor-pointer ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  onMouseEnter={() => setHoveredProduct(product.name)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <button
                    className="text-left text-lg font-frutiger text-brandGray hover:underline"
                    onClick={() => handleSelectProduct(product.name)}
                    type="button"
                  >
                    {product.name}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6">
              <h2
                id="modal-title"
                className="text-lg font-bold mb-4"
                aria-live="polite"
                aria-atomic="true"
              >
                {selectedProduct}
              </h2>
              {selectedProduct && renderProductModal(selectedProduct)}
            </div>
          )}
        </div>

        {/* Right Panel - Product Image */}
        <div className="w-1/2 relative">
          <img
            src={getCurrentImage()}
            alt={`${selectedProduct ?? 'Selected product'} preview`}
            className="w-full h-full object-cover transition-all duration-300"
            loading="lazy"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black p-1 rounded-full text-white hover:bg-red-600"
            aria-label="Close modal"
            type="button"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
