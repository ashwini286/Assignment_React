// import React, { useState } from "react";
// import CloudAccount from "./data/CloudAccount.json";
// import CloudAccountRisk from "./data/CloundAccountRisk.json";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { GrOptimize } from "react-icons/gr";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Dashboard = () => {
//   const [hoveredSection, setHoveredSection] = useState(null);
//   const [isDeleted, setIsDeleted] = useState(false);

//   const handleDelete = () => {
//     setIsDeleted(true);
//     if (onDelete) {
//       onDelete();
//     }
//   };

//   if (isDeleted) return null;

//   const bookCalculations = [
//     "Water Area: 120 cr",
//     "Sand Area: 150 cr",
//     "Black Soil Area: 200 cr",
//     "Red Soil Area: 175 cr",
//     "Brown Soil Area: 130 cr",
//   ];

//   const cloudAccountData = CloudAccount.cloudAccountData;
//   const cloudAccountRiskData = CloudAccountRisk.cloudAccountRiskData;

//   return (
//     <>
//       <div className="bg-gray-100 min-h-screen w-full flex flex-col justify-center items-center ">
//         <div
//           id="cspm-container "
//           className="flex flex-row justify-center items-center p-8 "
//         >
//           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
//             {/* Cloud Accounts Widget */}
//             {/* <div className="w-[400px] h-[250px] rounded-lg bg-white shadow">
//               <div className="p-2">Cloud Accounts</div>
//               <div className="flex justify-center items-center flex-col h-full">
//                 <div className="w-[250px]">
//                   <Doughnut
//                     data={cloudAccountData}
//                     options={{
//                       plugins: {
//                         legend: {
//                           position: "right",
//                           labels: {
//                             font: {
//                               size: 11,
//                             },
//                             boxWidth: 15,
//                             boxHeight: 12,
//                             color: "#000000",
//                             padding: 15,
//                           },
//                         },
//                       },
//                       layout: {
//                         padding: {
//                           right: 20,
//                         },
//                       },
//                       elements: {
//                         arc: {
//                           borderWidth: 0,
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//               </div>
//             </div> */}

// <div className="w-[400px] h-[250px] rounded-lg bg-white shadow relative">
//       <div className="ml-2 mt-2 flex justify-between items-center">
//         <div>Cloud Accounts</div>
//         <button
//           onClick={handleDelete}
//           className="text-red-600 hover:text-red-800"
//         >
//           Delete
//         </button>
//       </div>
//       <div className="flex justify-center items-center flex-col h-full">
//         <div className="w-[250px]">
//           <Doughnut
//             data={cloudAccountData}
//             options={{
//               plugins: {
//                 legend: {
//                   position: "right",
//                   labels: {
//                     font: {
//                       size: 11,
//                     },
//                     boxWidth: 15,
//                     boxHeight: 12,
//                     color: "#000000",
//                     padding: 15,
//                   },
//                 },
//               },
//               layout: {
//                 padding: {
//                   right: 20,
//                 },
//               },
//               elements: {
//                 arc: {
//                   borderWidth: 0,
//                 },
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//             {/* Cloud Accounts Risk Widget */}
//             <div className="w-[400px] h-[250px] rounded-lg bg-white shadow">
//               <div className="p-2">Cloud Account Risk Assessment</div>
//               <div className="flex justify-center items-center flex-col">
//                 <div className="w-[250px] ">
//                   <Doughnut
//                     data={cloudAccountRiskData}
//                     options={{
//                       plugins: {
//                         legend: {
//                           position: "right",
//                           labels: {
//                             font: {
//                               size: 11,
//                             },
//                             boxWidth: 15,
//                             boxHeight: 12,
//                             color: "#000000",
//                             usePointStyle: true,
//                             pointStyle: "rectRounded",
//                           },
//                         },
//                       },
//                       elements: {
//                         arc: {
//                           borderWidth: 0,
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="w-[400px] h-[250px] rounded-lg bg-white shadow flex justify-center items-center">
//               <div className="w-[250px] text-center border border-gray-400 p-2 rounded">
//                 Add Widget +
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cwpp Dashbaord */}
//         <div className="flex flex-row justify-center items-center p-8">
//           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
//             <div className=" bg-white rounded-lg">
//               <div className="p-2 ">Top 5 Namespace Specific Alerts</div>
//               <div className="w-[400px] h-[200px]   flex flex-col justify-center items-center">
//                 <div className=" text-center  p-2 rounded">
//                   <GrOptimize className="h-8 w-8 font-normal" />
//                 </div>
//                 <div>No Graph data available!</div>
//               </div>
//             </div>

//             <div className=" bg-white rounded-lg">
//               <div className="p-2 ">Workload Alerts</div>
//               <div className="w-[400px] h-[200px]   flex flex-col justify-center items-center">
//                 <div className=" text-center  p-2 rounded">
//                   <GrOptimize className="h-8 w-8 font-normal" />
//                 </div>
//                 <div>No Graph data available!</div>
//               </div>
//             </div>

//             <div className="w-[400px] h-[250px] rounded-lg bg-white shadow flex justify-center items-center">
//               <div className="w-[250px] text-center border border-gray-400 p-2 rounded">
//                 Add Widget +
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row justify-center items-center gap-8 p-14">
//           {/* Progress Bar with Tooltip */}
//           <div className="w-[500px] h-[250px] rounded-lg bg-white shadow relative">
//             <div className="flex justify-center items-center">
//               <div className="relative bg-gray-200 flex h-[30px] w-[360px] rounded-2xl overflow-hidden">
//                 {["20%", "20%", "20%", "20%"].map((width, index) => (
//                   <div
//                     key={index}
//                     className="absolute top-0 h-full"
//                     style={{
//                       width,
//                       left: `${index * 20}%`,
//                       backgroundColor: `hsl(${index * 72}, 70%, 50%)`,
//                     }}
//                     onMouseEnter={() => setHoveredSection(index)}
//                     onMouseLeave={() => setHoveredSection(null)}
//                   />
//                 ))}
//               </div>
//               {hoveredSection !== null && (
//                 <div
//                   className="absolute bg-black text-white text-sm rounded-lg p-2"
//                   style={{ top: "60px" }}
//                 >
//                   {bookCalculations[hoveredSection]}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import CloudAccount from "./data/CloudAccount.json";
import CloudAccountRisk from "./data/CloundAccountRisk.json";
import { Doughnut } from "react-chartjs-2";
import { MdDelete } from "react-icons/md";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { GrOptimize } from "react-icons/gr";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [deletedGraphs, setDeletedGraphs] = useState({
    cloudAccounts: false,
    cloudAccountRisk: false,
  });

  const handleDelete = (graph) => {
    setDeletedGraphs((prevState) => ({
      ...prevState,
      [graph]: true,
    }));
  };

  const bookCalculations = [
    "Water Area: 120 cr",
    "Sand Area: 150 cr",
    "Black Soil Area: 200 cr",
    "Red Soil Area: 175 cr",
    "Brown Soil Area: 130 cr",
  ];

  const cloudAccountData = CloudAccount.cloudAccountData;
  const cloudAccountRiskData = CloudAccountRisk.cloudAccountRiskData;

  return (
    <>
      <div className="bg-gray-100 min-h-screen w-full flex flex-col justify-center items-center">
        <div id="cspm-container" className="flex flex-row justify-center items-center p-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
            {/* Cloud Accounts Widget */}
            {!deletedGraphs.cloudAccounts && (
              <div className="w-[400px] h-[250px] rounded-lg bg-white shadow relative">
                <div className="ml-2 mt-2 flex justify-between items-center">
                  <div>Cloud Accounts</div>
                  <button
                    onClick={() => handleDelete('cloudAccounts')}
                    className="text-red-600 hover:text-red-800 p-2"
                  >
                    <MdDelete />
                  </button>
                </div>
                <div className="flex justify-center items-center flex-col h-full">
                  <div className="w-[250px]">
                    <Doughnut
                      data={cloudAccountData}
                      options={{
                        plugins: {
                          legend: {
                            position: "right",
                            labels: {
                              font: {
                                size: 11,
                              },
                              boxWidth: 15,
                              boxHeight: 12,
                              color: "#000000",
                             
                              usePointStyle: true,
                              pointStyle: "rectRounded",
                            },
                          },
                        },
                       
                        elements: {
                          arc: {
                            borderWidth: 0,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Cloud Account Risk Widget */}
            {!deletedGraphs.cloudAccountRisk && (
              <div className="w-[400px] h-[250px] rounded-lg bg-white shadow relative">
                <div className="ml-2 mt-2 flex justify-between items-center">
                  <div>Cloud Account Risk Assessment</div>
                  <button
                    onClick={() => handleDelete('cloudAccountRisk')}
                    className="text-red-600 hover:text-red-800 p-2"
                  >
                    <MdDelete />
                  </button>
                </div>
                <div className="flex justify-center items-center flex-col h-full">
                  <div className="w-[250px]">
                    <Doughnut
                      data={cloudAccountRiskData}
                      options={{
                        plugins: {
                          legend: {
                            position: "right",
                            labels: {
                              font: {
                                size: 11,
                              },
                              boxWidth: 15,
                              boxHeight: 12,
                              color: "#000000",
                              usePointStyle: true,
                              pointStyle: "rectRounded",
                            },
                          },
                        },
                        elements: {
                          arc: {
                            borderWidth: 0,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="w-[400px] h-[250px] rounded-lg bg-white shadow flex justify-center items-center">
              <div className="w-[250px] text-center border border-gray-400 p-2 rounded">
                Add Widget +
              </div>
            </div>
          </div>
        </div>

        {/* Cwpp Dashboard */}
        <div className="flex flex-row justify-center items-center p-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
            <div className="bg-white rounded-lg">
              <div className="p-2">Top 5 Namespace Specific Alerts</div>
              <div className="w-[400px] h-[200px] flex flex-col justify-center items-center">
                <div className="text-center p-2 rounded">
                  <GrOptimize className="h-8 w-8 font-normal" />
                </div>
                <div>No Graph data available!</div>
              </div>
            </div>

            <div className="bg-white rounded-lg">
              <div className="p-2">Workload Alerts</div>
              <div className="w-[400px] h-[200px] flex flex-col justify-center items-center">
                <div className="text-center p-2 rounded">
                  <GrOptimize className="h-8 w-8 font-normal" />
                </div>
                <div>No Graph data available!</div>
              </div>
            </div>

            <div className="w-[400px] h-[250px] rounded-lg bg-white shadow flex justify-center items-center">
              <div className="w-[250px] text-center border border-gray-400 p-2 rounded">
                Add Widget +
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-8 p-14">
          {/* Progress Bar with Tooltip */}
          <div className="w-[500px] h-[250px] rounded-lg bg-white shadow relative">
            <div className="flex justify-center items-center">
              <div className="relative bg-gray-200 flex h-[30px] w-[360px] rounded-2xl overflow-hidden">
                {["20%", "20%", "20%", "20%"].map((width, index) => (
                  <div
                    key={index}
                    className="absolute top-0 h-full"
                    style={{
                      width,
                      left: `${index * 20}%`,
                      backgroundColor: `hsl(${index * 72}, 70%, 50%)`,
                    }}
                    onMouseEnter={() => setHoveredSection(index)}
                    onMouseLeave={() => setHoveredSection(null)}
                  />
                ))}
              </div>
              {hoveredSection !== null && (
                <div
                  className="absolute bg-black text-white text-sm rounded-lg p-2"
                  style={{ top: "60px" }}
                >
                  {bookCalculations[hoveredSection]}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
