import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    srmEmail: '',
    githubProfile: '',
    linkedinProfile: '', // Add LinkedIn profile field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to the console
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black py-12">
      <div className="bg-black p-6 rounded-lg border-4 border-orange-500 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4 text-center text-white">Student Registration Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-6 hover:scale-105 transform transition-transform duration-300">
            <label
              htmlFor="name"
              className="block text-white font-bold bg-black p-2 rounded-t-md border-orange-500"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input w-full mt-2 bg-black text-white p-2 rounded-b-md border-orange-500"
              required
            />
          </div>
          {/* Separator */}
          <div className="bg-orange-500 h-0.5 w-7/10 mx-auto mb-4" />

          {/* Registration Number */}
          <div className="mb-6 hover:scale-105 transform transition-transform duration-300">
            <label
              htmlFor="registrationNumber"
              className="block text-white font-bold bg-black p-2 rounded-t-md border-orange-500"
            >
              Registration Number:
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="Enter Registration Number"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="form-input w-full mt-2 bg-black text-white p-2 rounded-b-md border-orange-500"
              required
            />
          </div>
          {/* Separator */}
          <div className="bg-orange-500 h-0.5 w-7/10 mx-auto mb-4" />

          {/* SRM IST Email Id */}
          <div className="mb-6 hover:scale-105 transform transition-transform duration-300">
            <label
              htmlFor="srmEmail"
              className="block text-white font-bold bg-black p-2 rounded-t-md border-orange-500"
            >
              SRM IST Email Id:
            </label>
            <input
              type="email"
              id="srmEmail"
              name="srmEmail"
              placeholder="Enter SRM IST Email Id"
              value={formData.srmEmail}
              onChange={handleChange}
              className="form-input w-full mt-2 bg-black text-white p-2 rounded-b-md border-orange-500"
              required
            />
          </div>
          {/* Separator */}
          <div className="bg-orange-500 h-0.5 w-7/10 mx-auto mb-4" />

          {/* GitHub Profile */}
          <div className="mb-6 hover:scale-105 transform transition-transform duration-300">
            <label
              htmlFor="githubProfile"
              className="block text-white font-bold bg-black p-2 rounded-t-md border-orange-500"
            >
              GitHub Profile:
            </label>
            <input
              type="text"
              id="githubProfile"
              name="githubProfile"
              placeholder="Enter GitHub Profile"
              value={formData.githubProfile}
              onChange={handleChange}
              className="form-input w-full mt-2 bg-black text-white p-2 rounded-b-md border-orange-500"
              required
            />
          </div>
          {/* Separator */}
          <div className="bg-orange-500 h-0.5 w-7/10 mx-auto mb-4" />

          {/* LinkedIn Profile */}
          <div className="hover:scale-105 transform transition-transform duration-300">
            <label
              htmlFor="linkedinProfile"
              className="block text-white font-bold bg-black p-2 rounded-t-md border-orange-500"
            >
              LinkedIn Profile:
            </label>
            <input
              type="text"
              id="linkedinProfile"
              name="linkedinProfile"
              placeholder="Enter LinkedIn Profile"
              value={formData.linkedinProfile}
              onChange={handleChange}
              className="form-input w-full mt-2 bg-black text-white p-2 rounded-b-md border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-black px-4 py-2 rounded-md hover:border-orange-500 border-2 border-orange-500 hover:bg-black hover:text-orange-500 transition duration-300 mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
