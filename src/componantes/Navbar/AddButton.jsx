// import React, { useState } from 'react';
// const AddButton = () => {
//   const [hoveredSection, setHoveredSection] = useState(null);
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [activeOption, setActiveOption] = useState("CSPM");
//   const [widgetInputs, setWidgetInputs] = useState({
//     CSPM: { input1: "", input2: "", checked1: false, checked2: false },
//     CWPP: { input1: "", input2: "", checked1: false, checked2: false },
//     Image: { input1: "", input2: "", checked1: false, checked2: false },
//     Ticket: { input1: "", input2: "", checked1: false, checked2: false },
//   });
//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   const handleTabClick = (option) => {
//     setActiveOption(option);
//   };

//   const handleInputChange = (option, field, value) => {
//     setWidgetInputs((prev) => ({
//       ...prev,
//       [option]: {
//         ...prev[option],
//         [field]: value,
//       },
//     }));
//   };

//   const handleCheckboxChange = (option, checkbox) => {
//     setWidgetInputs((prev) => ({
//       ...prev,
//       [option]: {
//         ...prev[option],
//         [checkbox]: !prev[option][checkbox],
//       },
//     }));
//   };

//   const handleConfirm = () => {
//     console.log("Confirmed:", widgetInputs);
//     toggleDrawer();
//   };

//   const handleCancel = () => {
//     toggleDrawer();
//   };
//   return (
//     <div className=''>
//       <div className="flex float-end  w-auto h-8  items-center ">
//         <button
//           className="text-white hover:text-black"
//           onClick={toggleDrawer}
//         >
//           Add Widget +
//         </button>


//       </div>
//       {isDrawerOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"></div>
//       )}
    
//       {isDrawerOpen && (
//         <div className="fixed ease-in-out transition-all duration-1000 transform top-0 right-0 h-full w-[500px] bg-yellow-300 shadow-lg z-50">
//           <div className="w-auto h-10 text-white justify-between items-center flex px-4 bg-blue-900">
//             <div>Add Widget</div>
//             <div>
//               <button onClick={toggleDrawer} className="text-white">
//                 Close
//               </button>
//             </div>
//           </div>
//           <p className="bg-white text-black pl-2 pt-2">
//             Personalize Your Dashboard By Adding Widgets
//           </p>

//           <div className="bg-white w-auto h-full p-4">
//             <div className="flex mb-4">
//               {["CSPM", "CWPP", "Image", "Ticket"].map((option) => (
//                 <button
//                   key={option}
//                   className={`flex-1 p-2 text-center border-b-2 ${activeOption === option
//                     ? "border-blue-500 text-blue-500"
//                     : "border-transparent text-gray-700"
//                     }`}
//                   onClick={() => handleTabClick(option)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//             {activeOption && (
//               <div className="mt-4">
//                 <div className="flex flex-col gap-2">
//                   <div className="flex flex-row w-full border-[1px] px-2">
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={widgetInputs[activeOption].checked1}
//                         onChange={() =>
//                           handleCheckboxChange(activeOption, "checked1")
//                         }
//                       />
//                       <label className="ml-2"></label>
//                     </div>
//                     <input
//                       type="text"
//                       className="p-2 w-full outline-none border-none rounded"
//                       placeholder={`${activeOption} Input 1`}
//                       value={widgetInputs[activeOption].input1}
//                       onChange={(e) =>
//                         handleInputChange(
//                           activeOption,
//                           "input1",
//                           e.target.value
//                         )
//                       }
//                     />
//                   </div>
//                   <div className="flex flex-row w-full border-[1px] px-2">
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={widgetInputs[activeOption].checked2}
//                         onChange={() =>
//                           handleCheckboxChange(activeOption, "checked2")
//                         }
//                       />
//                       <label className="ml-2"></label>
//                     </div>
//                     <input
//                       type="text"
//                       className="p-2 w-full outline-none border-none rounded"
//                       placeholder={`${activeOption} Input 2`}
//                       value={widgetInputs[activeOption].input2}
//                       onChange={(e) =>
//                         handleInputChange(
//                           activeOption,
//                           "input2",
//                           e.target.value
//                         )
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div className="flex bottom-2 absolute right-1 justify-end items-end gap-4 mt-4">
//               <button
//                 onClick={handleCancel}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirm}
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default AddButton


import React, { useState } from 'react';

const AddButton = ({ onAddWidget }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("CSPM");
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleTabClick = (option) => {
    setActiveOption(option);
  };

  const handleConfirm = () => {
    if (widgetName && widgetText) {
      onAddWidget(activeOption, widgetName, widgetText);
    }
    toggleDrawer();
  };

  return (
    <div>
      <div className="flex float-end w-auto h-8 items-center">
        <button className="text-white hover:text-black" onClick={toggleDrawer}>
          Add Widget +
        </button>
      </div>

      {isDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"></div>
          <div className="fixed ease-in-out transition-all duration-1000 transform top-0 right-0 h-full w-[500px] bg-yellow-300 shadow-lg z-50">
            <div className="w-auto h-10 text-white justify-between items-center flex px-4 bg-blue-900">
              <div>Add Widget</div>
              <button onClick={toggleDrawer} className="text-white">
                Close
              </button>
            </div>
            <p className="bg-white text-black pl-2 pt-2">
              Personalize Your Dashboard By Adding Widgets
            </p>

            <div className="bg-white w-auto h-full p-4">
              <div className="flex mb-4">
                {["CSPM", "CWPP", "Image", "Ticket"].map((option) => (
                  <button
                    key={option}
                    className={`flex-1 p-2 text-center border-b-2 ${activeOption === option
                      ? "border-blue-500 text-blue-500"
                      : "border-transparent text-gray-700"
                      }`}
                    onClick={() => handleTabClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {activeOption && (
                <div className="mt-4">
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      className="p-2 w-full outline-none border-none rounded"
                      placeholder="Widget Name"
                      value={widgetName}
                      onChange={(e) => setWidgetName(e.target.value)}
                    />
                    <input
                      type="text"
                      className="p-2 w-full outline-none border-none rounded"
                      placeholder="Widget Text"
                      value={widgetText}
                      onChange={(e) => setWidgetText(e.target.value)}
                    />
                  </div>
                </div>
              )}
              <div className="flex bottom-2 absolute right-1 justify-end items-end gap-4 mt-4">
                <button
                  onClick={toggleDrawer}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddButton;
