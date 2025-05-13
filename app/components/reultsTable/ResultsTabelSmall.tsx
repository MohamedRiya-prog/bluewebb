const ResultsTable = () => {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded shadow-md">
      <h3 className="text-lg font-bold mb-2 text-brand">Calculated Results</h3>
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-brand text-white">
            <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="hover:bg-gray-200">
            <td className="border border-gray-300 px-4 py-2">Pressure Drop</td>
            <td className="border border-gray-300 px-4 py-2">-- Pa</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="border border-gray-300 px-4 py-2">Throw</td>
            <td className="border border-gray-300 px-4 py-2">-- m</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="border border-gray-300 px-4 py-2">Neck Velocity</td>
            <td className="border border-gray-300 px-4 py-2">-- m/s</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="border border-gray-300 px-4 py-2">Face Velocity</td>
            <td className="border border-gray-300 px-4 py-2">-- m/s</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="border border-gray-300 px-4 py-2">NC</td>
            <td className="border border-gray-300 px-4 py-2">--</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;