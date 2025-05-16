  import React from "react";
  import { ProductData } from "../type"; // Adjust path

  type ResultsTableMainPageProps = {
    data: ProductData;
  };

  const ResultsTableMainPage = ({ data }: ResultsTableMainPageProps) => {
    const {
      type,
      model,
      width,
      height,
      airflow,
      pressureDrop,
      throwDistance,
      noiseCriteria,
      neckVelocity,
      faceVelocity,
    } = data;

    return (
      <div className="p-2 rounded-lg font-frutiger text-sm w-full">
        {/* Desktop Table */}
        <table className="hidden sm:table w-full table-auto border-collapse border border-gray-300 text-xs">
          <thead>
            <tr className="text-brand font-frutigerBold">
              <th className="border border-gray-300 px-2 py-1 text-left">Product</th>
              <th className="border border-gray-300 px-2 py-1 text-left" colSpan={2}>
                Dimensional Details
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left" colSpan={2}>
                Performance Details
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-gray-100">
              <td className="border px-2 py-1" rowSpan={5}> {type} </td>
              <td className="border px-2 py-1">Model</td>
              <td className="border px-2 py-1">{model}</td>
              <td className="border px-2 py-1">Pressure Drop</td>
              <td className="border px-2 py-1">{pressureDrop} (Pa)</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-2 py-1">Size</td>
              <td className="border px-2 py-1">
                {width} x {height} (mm)
              </td>
              <td className="border px-2 py-1">Throw</td>
              <td className="border px-2 py-1">{throwDistance} (m)</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-2 py-1">Airflow</td>
              <td className="border px-2 py-1">{airflow} (lps)</td>
              <td className="border px-2 py-1">Noise Criteria</td>
              <td className="border px-2 py-1">{noiseCriteria} (NC)</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-2 py-1">Neck velocity</td>
              <td className="border px-2 py-1">{neckVelocity} (m/s)</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-2 py-1">Face velocity</td>
              <td className="border px-2 py-1">{faceVelocity} (m/s)</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Table View */}
        <table className="sm:hidden w-full table-auto border-collapse border border-gray-300 text-sm">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-2 font-frutigerBold text-brand w-1/2">Product</td>
              <td className="px-3 py-2">{type}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-2 font-frutigerBold text-brand">Model</td>
              <td className="px-3 py-2">{model}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-2 font-frutigerBold text-brand">Size</td>
              <td className="px-3 py-2">
                {width} x {height} (mm)
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-2 font-frutigerBold text-brand">Airflow</td>
              <td className="px-3 py-2">{airflow} (lps)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-2 font-frutigerBold text-brand">Pressure Drop</td>
              <td className="px-3 py-2">{pressureDrop} (Pa)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-2 font-frutigerBold text-brand">Throw</td>
              <td className="px-3 py-2">{throwDistance} (m)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-2 font-frutigerBold text-brand">Noise Criteria</td>
              <td className="px-3 py-2">{noiseCriteria} (NC)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-2 font-frutigerBold text-brand">Neck velocity</td>
              <td className="px-3 py-2">{neckVelocity} (m/s)</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-frutigerBold text-brand">Face velocity</td>
              <td className="px-3 py-2">{faceVelocity} (m/s)</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  export default ResultsTableMainPage;
