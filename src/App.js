import React, { useState } from 'react';
import "./"


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
        <div className="bg-gray-100 min-h-screen flex items-center justify-center"
        style={{backgroundColor: "aliceblue", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}
        >
        <form onSubmit={handleSubmit} className="bg-red-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="block text-gray-700 text-xl font-bold mb-2"
            style={{color: "black", fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.5rem", textAlign: "center"}}
            >Project Registration Form</h2>

            {/* Form Fields in Table */}
            <div className="overflow-x-auto mt-6"
            style={{overflowX: "auto", marginTop: "1.5rem", gap: "1.5rem"}}
            >
            <table className="table-auto w-full mx-auto border-collapse border border-black">
                <tbody
                >

                    {/* Adjust each tr class to include border-black for black borders around rows and columns */}
                    <tr className="border-b border-black text-center"
                    >
                        <td className="px-4 py-2 border-r border-black text-gray-700 font-bold">
                            <label htmlFor="customer" className="block text-gray-700 text-sm font-bold mb-2">
                                Customer
                            </label>
                        </td>
                        <td>
                        <textarea
                            className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            id="customer"
                            name="customer"
                            type="text"
                            value={formData.customer}
                            onChange={handleChange}
                            required
                        ></textarea>
                        </td>
                    </tr>

                        {/* Application Details Field */}
                        <tr>
                            <td>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applicationDetails">
                                    Application Details
                                </label>
                            </td>
                            <td>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="applicationDetails"
                                    name="applicationDetails"
                                    type="text"
                                    value={formData.applicationDetails}
                                    onChange={handleChange}
                                    required
                                > </textarea>
                            </td>
                        </tr>

                        {/* Summarise the Application Field */}
                        <tr>
                            <td>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summariseTheApplication">
                                    Summarise the Application
                                </label>
                            </td>
                            <td>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="summariseTheApplication"
                                    name="summariseTheApplication"
                                    value={formData.summariseTheApplication}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">
                                    Budget
                                </label>
                            </td>
                            <td>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="budget"
                                    name="budget"
                                    type="text"
                                    value={formData.budget}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="demoDate">
                                    Demonstration Date? <br /> What will you be demonstrating? <br /> Why that model?
                                </label>
                            </td>
                            <td>
                            <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="demoDate"
                                    name="demoDate"
                                    type="text"
                                    value={formData.demoDate}
                                    onChange={handleChange}
                                ></textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expectedClosureDate">
                                    Expected Closure Date: <br />
                                    Period and Quarter Specific.
                                </label>
                            </td>
                            <td>
                            <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="expectedClosureDate"
                                    name="expectedClosureDate"
                                    type="date"
                                    value={formData.expectedClosureDate}
                                    onChange={handleChange}
                                ></textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="existingOrNewCustomer">
                                    Existing customer
                                    or new customer? <br />
                                    Has the customer
                                    any experience
                                    with Teledyne FLIR
                                    cameras? <br /> Is
                                    there competition?
                                </label>
                            </td>
                            <td>
                            <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="existingOrNewCustomer"
                                    name="existingOrNewCustomer"
                                    type="text"
                                    value={formData.existingOrNewCustomer}
                                    onChange={handleChange}
                                ></textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nextAction">
                                    Next Action Point?
                                </label>
                            </td>
                            <td>
                            <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nextAction"
                                    name="nextAction"
                                    type="text"
                                    value={formData.nextAction}
                                    onChange={handleChange}
                                ></textarea>
                            </td>
                        </tr>

                        {/* More fields follow in a similar pattern... */}

                    </tbody>
                </table>
                </div>
                {/* Submit Button */}
                <div className="flex justify-center">
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                style={{backgroundColor: "blue", hoverBackgroundColor: "darkblue", color: "white", fontWeight: "700", padding: "0.5rem 1rem", borderRadius: "0.25rem", outline: "none", boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5), text-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5), textAlign: center, alignItems: center, justifyContent: center, cursor: pointer"}}
                type="submit">
                    Complete
                </button>
                </div>
            </form>
        </div>
    );

}

export default App;
