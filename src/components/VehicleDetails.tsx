import React, { useState } from 'react';


const VehicleDetails = ({ closeModal }: { closeModal: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    carMake: '',
    carModel: '',
    vin: '',
    manufacturedDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.submit();
    closeModal(); 
  };

  const handleAlert = () =>{
    <div className="w-full p-2 border border-gray-300 rounded-md">
      alert('Add Vehicle Details.........');
    </div>

    // Swal.fire("Vehicle Added Successfully!");
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Add New Vehicle</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Car Make</label>
            <input
              type="text"
              name="carMake"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.carMake}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Car Model</label>
            <input
              type="text"
              name="carModel"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.carModel}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">VIN</label>
            <input
              type="text"
              name="vin"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.vin}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Manufactured Date
            </label>
            <input
              type="date"
              name="manufacturedDate"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.manufacturedDate}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleAlert}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleDetails;
