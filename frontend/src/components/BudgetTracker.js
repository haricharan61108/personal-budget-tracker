import React from 'react';

const BudgetTracker = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-8">
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Personal Budget Tracker</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
          Logout
        </button>
      </header>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Income</h2>
          <div className="text-lg text-gray-800">Total Income: $5,000</div>
          <div className="mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
              Add Income
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Expenses</h2>
          <div className="text-lg text-gray-800">Total Expenses: $2,000</div>
          <div className="mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
              Add Expense
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Budget Overview</h2>
          <div className="text-lg text-gray-800">Remaining Budget: $3,000</div>
          <div className="mt-4">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200">
              View Budget Details
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 p-2 text-left">Date</th>
              <th className="border-b-2 border-gray-300 p-2 text-left">Description</th>
              <th className="border-b-2 border-gray-300 p-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-200 p-2">2024-10-30</td>
              <td className="border-b border-gray-200 p-2">Groceries</td>
              <td className="border-b border-gray-200 p-2 text-red-500">-$150</td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 p-2">2024-10-28</td>
              <td className="border-b border-gray-200 p-2">Salary</td>
              <td className="border-b border-gray-200 p-2 text-green-500">+$5,000</td>
            </tr>
            {/* Add more transactions as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetTracker;
