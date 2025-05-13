// DoubleDeflectionGrilleModal.tsx

import { useState } from "react";

const DoubleDeflectionGrilleModal = ({ onClose }: { onClose: () => void }) => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [airflow, setAirflow] = useState("");

  const handleSubmit = () => {
    console.log({ width, height, airflow });
    onClose(); // Close modal after submission
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Double Deflection Grilles</h2>
      <div>
        <input
          type="text"
          placeholder="Enter width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          placeholder="Enter height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <select
          value={airflow}
          onChange={(e) => setAirflow(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select airflow</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default DoubleDeflectionGrilleModal;
