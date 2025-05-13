import { useState } from "react";
import ResultsTable from "../reultsTable/ResultsTabelSmall"; // Import the reusable table component

const DoubleDeflectionGrilleModal = ({ onClose }: { onClose: () => void }) => {
  const [type, setType] = useState(""); // "Supply" or "Return"
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [airflow, setAirflow] = useState("");

  const handleSubmit = () => {
    console.log({ type, width, height, airflow });
    onClose(); // Close modal after submission
  };

  return (
    <div className="p-4 overflow-hidden">
      {/* Supply or Return Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium font-frutiger text-gray-700 mb-2">
          Select Type
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Supply"
              checked={type === "Supply"}
              onChange={() => setType("Supply")}
              className="form-radio text-brand"
            />
            <span className="text-sm font-frutiger">Supply</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Return"
              checked={type === "Return"}
              onChange={() => setType("Return")}
              className="form-radio text-brand"
            />
            <span className="text-sm font-frutiger">Return</span>
          </label>
        </div>
      </div>

      {/* Width and Height Inputs */}
      <div className="flex gap-8">
    
      <input
        type="number"
        placeholder="Enter width (mm)"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        className="w-full flex p-2 border border-gray-300 rounded mb-4 font-frutiger text-sm focus:border-brand"
      />
      <input
        type="number"
        placeholder="Enter height (mm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 font-frutiger text-sm focus:border-brand"
      />
      </div>


      {/* Airflow Input */}
      <input
        type="number"
        placeholder="Enter airflow (LPS)"
        value={airflow}
        onChange={(e) => setAirflow(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 font-frutiger text-sm focus:border-brand"
      />

      {/* Results Table - Show Only When Values Are Entered */}
      {airflow && width && height && <ResultsTable />}

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