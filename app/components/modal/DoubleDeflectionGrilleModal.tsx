import { useState } from "react";
import ResultsTableSmall from "../reultsTable/ResultsTabelSmall";
import { DoubleDeflectionData } from "../type";  // <-- import your type here

interface DoubleDeflectionGrilleModalProps {
  onClose: () => void;
  onSubmit: (data: DoubleDeflectionData) => void;
}

const DoubleDeflectionGrilleModal = ({ onClose, onSubmit }: DoubleDeflectionGrilleModalProps) => {
  const [model, setModel] = useState<'SAG' | 'RAG'>('SAG');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [airflow, setAirflow] = useState('');

  const isFormFilled = model && width && height && airflow;

  const resultData: DoubleDeflectionData = {
    type: 'DoubleDeflection',
    model,
    width: parseInt(width, 10),
    height: parseInt(height, 10),
    airflow: parseInt(airflow, 10),
  };

  const handleSubmit = () => {
    if (!isFormFilled) return;
    onSubmit(resultData); // send data to parent
    onClose(); // close the modal
  };

  return (
    <div className="overflow-hidden">
      {/* Select Model */}
      <div className="mb-6">
        <label className="block text-sm font-medium font-frutiger text-gray-700 mb-2">
          Select Model
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="SAG"
              checked={model === 'SAG'}
              onChange={() => setModel('SAG')}
              className="form-radio text-brand"
            />
            <span className="text-sm font-frutiger">SAG (Supply)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="RAG"
              checked={model === 'RAG'}
              onChange={() => setModel('RAG')}
              className="form-radio text-brand"
            />
            <span className="text-sm font-frutiger">RAG (Return)</span>
          </label>
        </div>
      </div>

      {/* Width & Height */}
      <div className="flex gap-8">
        <input
          type="number"
          placeholder="Enter width (mm)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 font-frutiger text-sm focus:border-brand"
        />
        <input
          type="number"
          placeholder="Enter height (mm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 font-frutiger text-sm focus:border-brand"
        />
      </div>

      {/* Airflow */}
      <input
        type="number"
        placeholder="Enter airflow (LPS)"
        value={airflow}
        onChange={(e) => setAirflow(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 font-frutiger text-sm focus:border-brand"
      />

      {/* Preview Table */}
      {isFormFilled && (
        <div className="mb-4">
          <ResultsTableSmall data={resultData} />
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-brandGray hover:bg-brand text-sm rounded-full text-white font-frutiger"
      >
        Submit
      </button>
    </div>
  );
};

export default DoubleDeflectionGrilleModal;
