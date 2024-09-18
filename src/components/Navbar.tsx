import { FaBell } from 'react-icons/fa';
import { useState } from "react";
import Notification from './Notification';


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleNotificationClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="bg-[#dedede] w-full p-4 ">
      <div className="flex justify-center items-center">
        
        <div className="flex items-center ml-auto">
            <FaBell className="text-red-600 text-2xl" onClick={handleNotificationClick} />
        </div>
        {showModal && <Notification closeModal={closeModal} />}

      </div>
    </nav>
  )
}

export default Navbar
