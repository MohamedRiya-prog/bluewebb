import { useState } from "react";
import ResultsTableSmall from "../reultsTable/ResultsTabelSmall";
import { DoubleDeflectionData } from "../type";

interface DoubleDeflectionGrilleModalProps {
  onSubmit: (data: DoubleDeflectionData) => void;
  onClose: () => void;
}

const DoubleDeflectionGrilleModal = ({
  onClose,
  onSubmit,
}: DoubleDeflectionGrilleModalProps) => {
  const [model, setModel] = useState<"SAR-FH-RV-DD" | "SAG-FH-RV-DD">("SAR-FH-RV-DD");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [airflow, setAirflow] = useState("");

  const isFormFilled = model && +width > 0 && +height > 0 && +airflow > 0;

  const resultData: DoubleDeflectionData = {
    type: "DoubleDeflection",
    model,
    width: parseInt(width, 10),
    height: parseInt(height, 10),
    airflow: parseInt(airflow, 10),
  };

  const handleSubmit = () => {
    if (!isFormFilled) return;
    onSubmit(resultData);
  };

  const handleSubmitClose = () => {
    if (!isFormFilled) return;
    onSubmit(resultData);
    onClose();
  };

  return (
    <div className="overflow-hidden">
      {/* Model Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium font-frutiger text-gray-700 mb-2">
          Select Model
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="SAR-FH-RV-DD"
              checked={model === "SAR-FH-RV-DD"}
              onChange={() => setModel("SAR-FH-RV-DD")}
              className="form-radio text-brand"
            />
            <span className="text-sm font-frutiger">SAR (Supply)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="SAG-FH-RV-DD"
              checked={model === "SAG-FH-RV-DD"}
              onChange={() => setModel("SAG-FH-RV-DD")}
              className="form-radio text-brand"
            />
            <span className="text-sm font-frutiger">SAG (Return)</span>
          </label>
        </div>
      </div>

      {/* Width & Height */}
      <label className="block text-sm font-medium font-frutiger text-gray-700 mb-2">
        Enter Dimensions (mm)
      </label>
      <div className="flex gap-8 mb-4">
        <div className="flex-1">
          <label
            htmlFor="width"
            className="block mb-1 text-sm font-frutiger text-brandGray"
          >
            Width (mm)
          </label>
          <input
            id="width"
            type="number"
            placeholder="Enter width (mm)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded font-frutiger text-sm focus:border-brand focus:outline-none"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="height"
            className="block mb-1 text-sm font-frutiger text-brandGray"
          >
            Height (mm)
          </label>
          <input
            id="height"
            type="number"
            placeholder="Enter height (mm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded font-frutiger text-sm focus:border-brand focus:outline-none"
          />
        </div>
      </div>

      {/* Airflow */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-frutiger text-brandGray">
          Airflow (LPS)
        </label>
        <input
          type="number"
          placeholder="Enter airflow (LPS)"
          value={airflow}
          onChange={(e) => setAirflow(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded font-frutiger text-sm focus:border-brand focus:outline-none"
        />
      </div>

      {/* Preview Table */}
      {isFormFilled && (
        <div className="mb-4">
          <ResultsTableSmall data={resultData} />
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-row gap-4">
        <button
          onClick={handleSubmit}
          disabled={!isFormFilled}
          className={`mt-4 px-4 py-2 text-sm rounded-full text-white font-frutiger ${
            isFormFilled
              ? "bg-brandGray hover:bg-brand"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
        <button
          onClick={handleSubmitClose}
          disabled={!isFormFilled}
          className={`mt-4 px-4 py-2 text-sm rounded-full text-white font-frutiger ${
            isFormFilled
              ? "bg-red-700 hover:bg-brand"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Submit and Close
        </button>
      </div>
    </div>
  );
};

export default DoubleDeflectionGrilleModal;
