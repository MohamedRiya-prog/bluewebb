import React from "react";
import { ProductData } from "../type"; // Adjust the path!

type ResultsTableMainPageProps = {
  data: ProductData;
};

const ResultsTableMainPage = ({ data }: ResultsTableMainPageProps) => {
  const { type, model, width, height, airflow } = data;

  return (
    <div className=" p-2 rounded-lg font-frutigerBold text-xs">
      <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className=" text-brand font-frutigerBold">
            <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
            <th className="border border-gray-300 px-4 py-2 text-left" colSpan={2}>Dimensional Details</th>
            <th className="border border-gray-300 px-4 py-2 text-left" colSpan={2}>Performance Details</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="hover:bg-gray-100">
            <td className="border px-4 py-2" rowSpan={5}>{type} Grille</td>
            <td className="border px-4 py-2">Model</td>
            <td className="border px-4 py-2">{model}</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border px-4 py-2">Size</td>
            <td className="border px-4 py-2">{width} x {height} (mm)</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border px-4 py-2">Airflow</td>
            <td className="border px-4 py-2">{airflow} (lps)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTableMainPage;
