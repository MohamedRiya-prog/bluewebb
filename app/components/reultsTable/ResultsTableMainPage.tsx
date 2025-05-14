type ResultsTableMainPageProps = {
  data: {
    type: string;
    width: string;
    height: string;
    airflow: string;
  };
};

const ResultsTableMainPage = ({ data }: ResultsTableMainPageProps) => {
  const { type, width, height, airflow } = data;

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-brand">Submitted Results</h3>
      <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-brandGray text-white">
            <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Airflow</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="hover:bg-gray-100">
            <td className="border px-4 py-2">{type} Grille</td>
            <td className="border px-4 py-2">{width} x {height}</td>
            <td className="border px-4 py-2">{airflow} LPS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTableMainPage;
