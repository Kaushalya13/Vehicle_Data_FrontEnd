import Button from "../layouts/Button";
import { useState } from "react";
import VehicleDetails from './VehicleDetails';  
import { FaSearch } from 'react-icons/fa';
import EditFrom from './EditFrom';
import FileUpload from "../layouts/FileUpload";


const Dashboard = () => {
  const [Search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showModalFrom, setShowModalFrom] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },

    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    
    {
      id: 3,
      first_name: "Niwanthi",
      last_name: "Kaushalya",
      email: "john.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },

    {
      id: 4,
      first_name: "Nethpali",
      last_name: "Jayaweera",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    {
      id: 5,
      first_name: "Henry",
      last_name: "Doe",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    {
      id: 6,
      first_name: "Mary",
      last_name: "Doe",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    {
      id: 7,
      first_name: "A",
      last_name: "Doe",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    {
      id: 8,
      first_name: "Ab",
      last_name: "Doe",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    {
      id: 9,
      first_name: "Abs",
      last_name: "Doe",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    {
      id: 10,
      first_name: "Aaaaa",
      last_name: "Doe",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    {
      id: 11,
      first_name: "Aasasds",
      last_name: "Doe",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    {
      id: 12,
      first_name: "Ahbkjsf",
      last_name: "Doe",
      email: "jane.doe@example.com",
      car_make: "Toyota",
      car_model: "Camry",
      vin: "1HGCM82633A123456",
      manufactured_date: "2015-07-20",
      age_of_vehicle: 5,
    },
    
  ]

  const recodsPrePage = 10;
  const lastIndex = currentPage * recodsPrePage;
  const firstIndex = lastIndex - recodsPrePage;
  const recods = data.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(data.length / recodsPrePage);
  const numbers = [...Array(pageCount).keys()].map(n => n + 1);

  // Handler to go to the previous page
  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handler to go to the next page
  const nextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handler to jump to a specific page
  const changeCPage = (n) => {
    setCurrentPage(n);
  };



  const handleAddNewClick = () => {
    setShowModal(true);
  };

  const handleEditClick = () => {
    setShowModalFrom(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const close =() => {
    setShowModalFrom(false);
  }

  const onSelectFileHandler = (event) => {
    console.log(event.target.files[0]);
  }

  return (
    <div className="flex justify-between p-4">
        <div >
          <div className="flex items-center border-2 border-blue-300 rounded-md w-1/3 mx-auto">
          <FaSearch className="text-black-500 mx-2" />
            <input
              type="text"
              placeholder="Search Contacts"
              className="w-full px-2 py-2 outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-3 p-5 mr-10">
             {/* Chooes File */}
            <FileUpload onSelectFile={onSelectFileHandler} accept=".csv,.xlsx" disabled={false} />
            <Button title="Export" color="bg-red-500"  />
            <Button title="Add New" color="bg-green-500" onClick={handleAddNewClick}  />
          </div>

          {/* table header */}
          <div className="flex justify-center items-center screen " style={{padding: '100px' }}>
            <table className="w-auto bg-gray-100 border border-gray-300">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="py-2 px-4 text-left text-sm font-semibold">ID</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold">First Name</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold">Last Name</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold">Email</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold">Car Make</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold">Car Model</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold">VIN</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold">Manufactured Date</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold">Age of Vehicle</th>
                  <th className="py-2 px-4 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recods.filter((item) => {
                  return Search.toLowerCase() === "" ? item : item.first_name.
                  toLowerCase().includes(Search.toLowerCase())
                }).map((item) => (
                  <tr className="bg-gray-100 border-b-2 border-gray-300" key={item.id}>
                    <td className="py-2 px-4">{item.id}</td>
                    <td className="py-2 px-4">{item.first_name}</td>
                    <td className="py-2 px-4">{item.last_name}</td>
                    <td className="py-2 px-4">{item.email}</td>
                    <td className="py-2 px-4">{item.car_make}</td>
                    <td className="py-2 px-4">{item.car_model}</td>
                    <td className="py-2 px-4">{item.vin}</td>
                    <td className="py-2 px-4">{item.manufactured_date}</td>
                    <td className="py-2 px-4">{item.age_of_vehicle}</td>

                    <td className="py-2 px-4 space-x-2">
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded" onClick={handleEditClick}>Edit</button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded " onClick={() => alert('Delete Successfuly!')}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination controls */}
          <nav>
          <ul className="pagination flex justify-center space-x-2">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a href="#" className="page-link px-4 py-2 border border-gray-300 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={n}>
                <a href="#" className={`page-link px-4 py-2 border border-gray-300 rounded-md ${currentPage === n ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300`} onClick={() => changeCPage(n)}>
                  {n}
                </a>
              </li>
            ))}
            <li className={`page-item ${currentPage === pageCount ? 'disabled' : ''}`}>
              <a href="#" className="page-link px-4 py-2 border border-gray-300 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
        </div>
        
      {showModal && <VehicleDetails closeModal={closeModal} />}
      {showModalFrom && <EditFrom close={close} />}
      
    </div>
  );
};

export default Dashboard;
