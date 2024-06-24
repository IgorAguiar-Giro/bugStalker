import Layout from "../layout";
import React, { useState } from "react";

const Reports = () => {
  const [showForm, setShowForm] = useState(false);
  const [reports, setReports] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleCreateReportClick = () => {
    setShowForm(true);
    setFormData({
      title: "",
      description: "",
      priority: "Low",
    });
    setEditIndex(null);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedReports = reports.map((report, index) =>
        index === editIndex ? formData : report,
      );
      setReports(updatedReports);
    } else {
      setReports([...reports, formData]);
    }
    setFormData({
      title: "",
      description: "",
      priority: "Low",
    });
    setShowForm(false);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const newReports = reports.filter((_, i) => i !== index);
    setReports(newReports);
  };

  const handleEdit = (index) => {
    setFormData(reports[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <button
          onClick={handleCreateReportClick}
          className="border-2 rounded-md p-2 border-indigo-500 text-center hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in"
        >
          Create New Report
        </button>
      </div>

      <div className="flex justify-center mt-4">
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">
                Priority Level
              </th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {report.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {report.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {report.priority}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleEdit(index)}
                    className="border-2 rounded-md p-2 mr-2 border-yellow-500 text-center hover:bg-yellow-500 hover:text-white transition-all duration-200 ease-in"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="border-2 rounded-md p-2 border-red-500 text-center hover:bg-red-500 hover:text-white transition-all duration-200 ease-in"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="flex justify-center fixed inset-0 bg-gray-800 bg-opacity-50">
          <div className="relative shadow-md border-2 rounded-lg p-6 md:p-16 m-4 md:m-8 w-full md:w-1/2 h-fit bg-white">
            <button
              onClick={handleCloseForm}
              className="absolute top-0 right-0 m-2 p-2 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-gray-900 cursor-pointer z-10"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <form onSubmit={handleSubmit} className="flex flex-col m-2">
              <label className="flex flex-col">
                Title:
                <input
                  className="border-2 rounded-md p-2"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col mt-4">
                Description:
                <textarea
                  className="border-2 rounded-md p-2 h-32 md:h-40"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </label>
              <label className="mt-4">Priority level:</label>
              <div className="flex flex-col md:flex-row p-2 m-2">
                <label className="cursor-pointer flex items-center mr-4">
                  <input
                    type="radio"
                    value="High"
                    name="priority"
                    checked={formData.priority === "High"}
                    onChange={handleChange}
                  />{" "}
                  High
                </label>
                <label className="cursor-pointer flex items-center mr-4">
                  <input
                    type="radio"
                    value="Medium"
                    name="priority"
                    checked={formData.priority === "Medium"}
                    onChange={handleChange}
                  />{" "}
                  Medium
                </label>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="radio"
                    value="Low"
                    name="priority"
                    checked={formData.priority === "Low"}
                    onChange={handleChange}
                  />{" "}
                  Low
                </label>
              </div>
              <div className="flex justify-center mt-8">
                <input
                  className="cursor-pointer border-2 rounded-md p-2 m-4 border-indigo-500 text-center hover:bg-indigo-500 hover:text-white transition-all duration-200 ease-in"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Reports;
