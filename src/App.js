import React, { useState } from 'react';
import './App.css'; // Make sure this imports TailwindCSS

function App() {
  const [formData, setFormData] = useState({
    customer: '',
    applicationDetails: '',
    summariseTheApplication: '',
    budget: '',
    demoDate: '',
    expectedClosureDate: '',
    existingOrNewCustomer: '',
    nextAction: '',
    // Add all other form fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:4000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data.message); // "Form processed successfully"
        // Implement success feedback to user
    } catch (error) {
        console.error('Error submitting form:', error);
        // Implement error handling
    }
};


  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 className="block text-gray-700 text-xl font-bold mb-2">Project Registration Form</h2>
    
    {/* Customer Field */}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customer">
            Customer
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="customer"
            name="customer"
            type="text"
            value={formData.customer}
            onChange={handleChange}
            required
        />
    </div>
    
    {/* Application Details Field */}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applicationDetails">
            Application Details
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="applicationDetails"
            name="applicationDetails"
            type="text"
            value={formData.applicationDetails}
            onChange={handleChange}
            required
        />
    </div>
    
    {/* Summarise the Application Field */}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summariseTheApplication">
            Summarise the Application
        </label>
        <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="summariseTheApplication"
            name="summariseTheApplication"
            value={formData.summariseTheApplication}
            onChange={handleChange}
            required
        ></textarea>
    </div>
    
    {/* Budget Field */}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">
            Budget
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="budget"
            name="budget"
            type="text"
            value={formData.budget}
            onChange={handleChange}
        />
    </div>
    
    {/* Demonstration Date Field */}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="demoDate">
            Demonstration Date
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="demoDate"
            name="demoDate"
            type="text"
            value={formData.demoDate}
            onChange={handleChange}
        />
    </div>
    
    {/* Expected Closure Date Field */}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expectedClosureDate">
            Expected Closure Date
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expectedClosureDate"
            name="expectedClosureDate"
            type="date"
            value={formData.expectedClosureDate}
            onChange={handleChange}
        />
    </div>
    
    {/* Existing or New Customer Field */}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="existingOrNewCustomer">
            Existing or New Customer
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="existingOrNewCustomer"
            name="existingOrNewCustomer"
            type="text"
            value={formData.existingOrNewCustomer}
            onChange={handleChange}
        />
    </div>
    
    {/* Next Action Field */}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nextAction">
            Next Action
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nextAction"
            name="nextAction"
            type="text"
            value={formData.nextAction}
            onChange={handleChange}
        />
    </div>
    
    {/* Submit Button */}
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Complete
    </button>
</form>

    </div>
  );
}

export default App;
