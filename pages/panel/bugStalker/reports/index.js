import React from "react";
import Layout from "../layout";

const Reports = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <button className="border-2 rounded-md p-2 border-indigo-500 text-center hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in">
          Create New Report
        </button>
      </div>
    </Layout>
  );
};

export default Reports;
