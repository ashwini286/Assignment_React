// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>


//     </div>
//   )
// }

// export default Navbar

import React from 'react';

// import Calendar from './calender';

const Navbar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-end justify-end z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>
      <div
        className={`transform top-0 right-0 w-96 bg-white p-4 fixed h-full overflow-auto ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div>
          {/* <Calendar /> */}
        </div>

      </div>
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Close MeetSlider
      </button>
    </div>
  );
};
export default Navbar