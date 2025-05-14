import { useState } from "react";
import ResultsTableSmall from "../reultsTable/ResultsTabelSmall";

const DoubleDeflectionGrilleModal = ({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (data: any) => void;
}) => {
  const [type, setType] = useState("Supply");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [airflow, setAirflow] = useState("");

  // Optional: Add any calculated fields here
  const resultData = {
    type,
    width,
    height,
    airflow,
  };

  const isFormFilled = type && width && height && airflow;

  const handleSubmit = () => {
    if (!isFormFilled) return;
    onSubmit(resultData); // send data to the parent component
    onClose(); // close the modal
  };

  return (
    <div className="overflow-hidden">
      {/* Select Type */}
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

      {/* Show Preview Table if form is filled */}
      {isFormFilled && (
        <div className="mb-4">
          <ResultsTableSmall data={resultData} />
        </div>
      )}

      {/* Submit */}
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
