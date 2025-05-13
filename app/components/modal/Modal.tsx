import { useState } from 'react';
import { X } from 'lucide-react';

// Define a list of products
const products = [
  { name: 'Double Deflection Grilles', image: '/Pictures/double_deflection.jpg' },
  { name: 'Linear Bar Grilles', image: '/Pictures/linear_bar.jpg' },
  { name: 'Linear Slot Diffuser', image: '/Pictures/linear_slot.jpg' },
  { name: 'Flow Bar Diffusers', image: '/Pictures/flow_bar.jpg' },
  { name: 'Air Louvers', image: '/Pictures/air_louvers.jpg' },
  { name: 'Ceiling Diffusers', image: '/Pictures/ceiling_diffusers.jpg' },
  { name: 'Drum Jet Diffusers', image: '/Pictures/drum_jet.jpg' },
  { name: 'Eyeball Diffusers', image: '/Pictures/eyeball.jpg' },
];

const MainModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [step, setStep] = useState<'select' | 'details'>('select');

  // Function to handle product selection
  const handleSelectProduct = (product: string) => {
    setSelectedProduct(product);
    setStep('details');
  };

  // Render product-specific modals (You can define your modals in separate components)
  const renderProductModal = (productName: string) => {
    switch (productName) {
      case 'Double Deflection Grilles':
        return <ProductModal name={productName} onClose={onClose} />;
      case 'Linear Bar Grilles':
        return <ProductModal name={productName} onClose={onClose} />;
      case 'Linear Slot Diffuser':
        return <ProductModal name={productName} onClose={onClose} />;
      // Add more cases for other products
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[800px] h-[500px] rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Side - Product Selection */}
        <div className="w-1/2 p-6">
          {/* Breadcrumb */}
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded-full text-sm font-frutiger text-white ${step === 'select' ? 'bg-brand text-white' : 'bg-brandGray'}`}
              onClick={() => setStep('select')}
            >
              Select Product
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-frutiger text-white ${step === 'details' ? 'bg-brand text-white' : 'bg-brandGray'}`}
              disabled={selectedProduct === null}
            >
              Enter Details
            </button>
          </div>

          {/* Product List */}
          {step === 'select' ? (
            <ul className="space-y-4">
              {products.map((product) => (
                <li key={product.name}>
                  <button
                    className="block text-lg font-frutiger text-brandGray"
                    onClick={() => handleSelectProduct(product.name)}
                  >
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            // Render product-specific modal
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4">{selectedProduct}</h2>
              {selectedProduct && renderProductModal(selectedProduct)}
            </div>
          )}
        </div>

        {/* Right Side - Product Image */}
        <div className="w-1/2 relative">
          <img
            src={selectedProduct ? products.find((product) => product.name === selectedProduct)?.image : products[0].image}
            alt="Selected Product"
            className="w-full h-full object-cover"
          />
          <button onClick={onClose} className="absolute top-4 right-4 bg-black p-0.25 rounded-full text-white">
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductModal = ({ name, onClose }: { name: string; onClose: () => void }) => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold">{name} Details</h3>
      <p className="mt-2">Here are the details for {name}.</p>
      <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">Close</button>
    </div>
  );
};

export default MainModal;
