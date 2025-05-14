type ResultsTableSmallProps = {
  data: {
    type: string;
    width: string;
    height: string;
    airflow: string;
  };
};

const ResultsTableSmall = ({ data }: ResultsTableSmallProps) => {
  const { type, width, height, airflow } = data;

  return (
    <div className="mt-3 rounded">
      <h3 className="text-lg font-bold mb-2 text-brand">Calculated Results</h3>
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-brandGray text-white">
            <th className="border border-gray-300 px-4 py-2 text-left font-frutigerBold text-sm">Product</th>
            <th className="border border-gray-300 px-4 py-2 text-left font-frutigerBold text-sm" colSpan={4}>Performance Details</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 font-frutigerBold text-xs">
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 border border-gray-300 break-words" rowSpan={6}>Double Deflection Grille</td>
            <td className="px-4 py-2">Model</td>
            <td className="px-4 py-2">SAR-FH-RV-DD</td>
            <td className="px-4 py-2">Free Area Velocity</td>
            <td className="px-4 py-2">1.5 m/s</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2">Size</td>
            <td className="px-4 py-2">{width} x {height}</td>
            <td className="px-4 py-2">Neck Velocity</td>
            <td className="px-4 py-2">0.5 m/s</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2">Airflow</td>
            <td className="px-4 py-2">{airflow} lps</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2">Pressure Drop</td>
            <td className="px-4 py-2">5 Pa</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2">Noise Criteria</td>
            <td className="px-4 py-2">15</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2">Throw</td>
            <td className="px-4 py-2">1 - 1.3 m</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTableSmall;
