import { useState, useEffect } from "react";
import ResultsTableSmall from "../reultsTable/ResultsTabelSmall";
import { DoubleDeflectionData } from "../type";
import { calculateDoubleDeflection } from "../../../lib/calculations/DoubleDeflectionGrille";

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
  const [apiResult, setApiResult] = useState<DoubleDeflectionData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isFormFilled = +width > 0 && +height > 0 && +airflow > 0;

  // Live calculation when all values are valid
  useEffect(() => {
    const widthVal = parseInt(width, 10);
    const heightVal = parseInt(height, 10);
    const airflowVal = parseInt(airflow, 10);

    if (widthVal > 0 && heightVal > 0 && airflowVal > 0) {
      try {
        const result = calculateDoubleDeflection({
          model,
          width: widthVal,
          height: heightVal,
          airflow: airflowVal,
        });

        const data: DoubleDeflectionData = {
          width: widthVal,
          height: heightVal,
          airflow: airflowVal,
          ...result,
        };

        setApiResult(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Calculation failed");
        setApiResult(null);
      }
    } else {
      setApiResult(null);
    }
  }, [width, height, airflow, model]);

  const handleSubmit = () => {
    if (apiResult) {
      onSubmit(apiResult);
    }
  };

  const handleSubmitClose = () => {
    handleSubmit();
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

      {/* Error display */}
      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      {/* Preview Table or fallback message */}
      {apiResult ? (
        <div className="mb-4">
          <ResultsTableSmall data={apiResult} />
        </div>
      ) : (
        <p className="text-sm text-gray-500 mb-4">Enter valid inputs to see results.</p>
      )}

      {/* Buttons */}
      <div className="flex flex-row gap-4">
        <button
          onClick={handleSubmit}
          disabled={!apiResult}
          className={`mt-4 px-4 py-2 text-sm rounded-full text-white font-frutiger ${
            apiResult ? "bg-brandGray hover:bg-brand" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
        <button
          onClick={handleSubmitClose}
          disabled={!apiResult}
          className={`mt-4 px-4 py-2 text-sm rounded-full text-white font-frutiger ${
            apiResult ? "bg-red-700 hover:bg-brand" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Submit and Close
        </button>
      </div>
    </div>
  );
};

export default DoubleDeflectionGrilleModal;
