
const Notification = ({ closeModal }: { closeModal: () => void }) => {
  const formData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    carMake: 'Toyota',
    carModel: 'Camry',
    vin: '1HGCM82633A123456',
    manufacturedDate: '2015-07-20',
  };

  return (
    <div className="fixed top-0 right-0 flex items-start justify-end bg-gray-800 bg-opacity-50 h-full w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 mt-4 mr-4">
        <h2 className="text-2xl font-bold mb-4">Notification History!</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">First Name: {formData.firstName}</label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Last Name: {formData.lastName}</label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email: {formData.email}</label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Car Make: {formData.carMake}</label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Car Model: {formData.carModel}</label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">VIN: {formData.vin}</label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Manufactured Date: {formData.manufacturedDate}</label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notification;
