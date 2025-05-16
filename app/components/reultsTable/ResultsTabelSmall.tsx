type CommonGrilleData = {
  type: string;
  model?: string;
  width: number;
  height: number;
  airflow: number;
  faceVelocity?: string | number;
  neckVelocity?: string | number;
  pressureDrop?: string | number;
  noiseCriteria?: string | number;
  throwDistance?: string | number;
};

type ResultsTableSmallProps = {
  data: CommonGrilleData;
};

const ResultsTableSmall = ({ data }: ResultsTableSmallProps) => {
  const {
    type,
    model = "SAR-FH-RV-DD",
    width,
    height,
    airflow,
    faceVelocity,
    neckVelocity,
    pressureDrop,
    noiseCriteria,
    throwDistance,
  } = data;

  return (
    <div className="mt-3 rounded">
      <h3 className="text-lg font-bold mb-2 text-brand">Calculated Results</h3>

      {/* Table for lg and up (≥1024px) */}
      <div className="hidden lg:block">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-brandGray text-white">
              <th className="border border-gray-300 px-4 py-2 text-left font-frutigerBold text-sm">
                Product
              </th>
              <th
                className="border border-gray-300 px-4 py-2 text-left font-frutigerBold text-sm"
                colSpan={4}
              >
                Performance Details
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-frutigerBold text-xs">
            <tr className="hover:bg-gray-200">
              <td className="px-4 py-2 border border-gray-300 break-words" rowSpan={6}>
                {type} Grille
              </td>
              <td className="px-4 py-2">Model</td>
              <td className="px-4 py-2">{model}</td>
              <td className="px-4 py-2">Free Area Velocity</td>
              <td className="px-4 py-2">{faceVelocity} m/s</td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="px-4 py-2">Size</td>
              <td className="px-4 py-2">
                {width} x {height} mm
              </td>
              <td className="px-4 py-2">Neck Velocity</td>
              <td className="px-4 py-2">{neckVelocity} m/s</td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="px-4 py-2">Airflow</td>
              <td className="px-4 py-2">{airflow} LPS</td>
              <td className="px-4 py-2">Pressure Drop</td>
              <td className="px-4 py-2">{pressureDrop} Pa</td>
            </tr>
            <tr className="hover:bg-gray-200">
              <td className="px-4 py-2">Noise Criteria</td>
              <td className="px-4 py-2">{noiseCriteria} NC</td>
              <td className="px-4 py-2">Throw</td>
              <td className="px-4 py-2">{throwDistance} m</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Stacked layout for screens below 1024px */}
      <div className="block lg:hidden grid-cols-1 gap-2 text-xs font-frutigerBold text-gray-700">
        <div className="bg-gray-100 p-3 rounded shadow-sm">
          <p><span className="text-brand font-semibold">Product:</span> {type} Grille</p>
          <p><span className="font-semibold">Model:</span> {model}</p>
          <p><span className="font-semibold">Size:</span> {width} x {height} mm</p>
          <p><span className="font-semibold">Airflow:</span> {airflow} LPS</p>
          <p><span className="font-semibold">Free Area Velocity:</span> {faceVelocity} m/s</p>
          <p><span className="font-semibold">Neck Velocity:</span> {neckVelocity} m/s</p>
          <p><span className="font-semibold">Pressure Drop:</span> {pressureDrop} Pa</p>
          <p><span className="font-semibold">Noise Criteria:</span> {noiseCriteria} NC</p>
          <p><span className="font-semibold">Throw:</span> {throwDistance} m</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsTableSmall;
