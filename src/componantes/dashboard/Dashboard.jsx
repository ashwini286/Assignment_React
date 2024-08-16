
import React, { useState } from "react";
import CloudAccount from "./data/CloudAccount.json";
import CloudAccountRisk from "./data/CloundAccountRisk.json";
import { Doughnut } from "react-chartjs-2";
import { MdDelete } from "react-icons/md";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import AddButton from "../Navbar/AddButton";
import { GrOptimize } from "react-icons/gr";

ChartJS.register(ArcElement, Tooltip, Legend);


const Dashboard = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredSection2, setHoveredSection2] = useState(null);
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

  const bookCalculations2 = [
    "Water Area: 120 cr",
    "Sand Area: 150 cr",
    "Black Soil Area: 450 cr",
    "Red Soil Area: 185 cr",
    "Brown Soil Area: 330 cr",
  ];

  const cloudAccountData = CloudAccount.cloudAccountData;
  const cloudAccountRiskData = CloudAccountRisk.cloudAccountRiskData;

  const [widgets, setWidgets] = useState({
    CSPM: [],
    CWPP: [],
    Image: [],
    Ticket: [],
  });

  const handleAddWidget = (category, name, text) => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      [category]: [...prevWidgets[category], { name, text }],
    }));
  };

  const handleDeleteWidget = (category, index) => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      [category]: prevWidgets[category].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="font-bold ml-8 pt-4 text-start">CSPM Dashboard</div>
      <div className="p-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        {!deletedGraphs.cloudAccounts && (
              <div className="w-[400px] h-[250px] rounded-lg bg-white shadow relative">
                <div className="ml-2 mt-2 flex justify-between items-center">
                  <div>Cloud Accounts</div>
                  <button
                    onClick={() => handleDelete("cloudAccounts")}
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
                    onClick={() => handleDelete("cloudAccountRisk")}
                    className="text-red-600 hover:text-red-800 p-2 "
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
          {widgets.CSPM.map((widget, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] rounded-lg bg-white shadow relative p-4 "
            >
              <div className="flex justify-between">
                <div className="font-semibold">{widget.name}</div>
                <button
                  onClick={() => handleDeleteWidget("CSPM", index)}
                  className="text-red-600 hover:text-red-800 p-2"
                >
                  <MdDelete />
                </button>
              </div>
              <div className="mt-2 text-gray-700">{widget.text}</div>
            </div>
          ))}
          {/* Add Widget Button */}
          <div className="w-[400px] h-[250px] rounded-lg bg-gray-300 shadow flex justify-center items-center ">
            <AddButton onAddWidget={handleAddWidget} />
          </div>
        </div>
      </div>

      <div className="font-bold ml-8 pt-4 text-start">CWPP Dashboard</div>
      <div className="p-8">
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
          {widgets.CWPP.map((widget, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] rounded-lg bg-white shadow relative p-4"
            >
              <div className="flex justify-between">
                <div className="font-semibold">{widget.name}</div>
                <button
                  onClick={() => handleDeleteWidget("CWPP", index)}
                  className="text-red-600 hover:text-red-800 p-2"
                >
                  <MdDelete />
                </button>
              </div>
              <div className="mt-2 text-gray-700">{widget.text}</div>
            </div>
          ))}
          {/* Add Widget Button */}
          <div className="w-[400px] h-[250px] rounded-lg bg-gray-300 shadow flex justify-center items-center">
            <AddButton onAddWidget={handleAddWidget} />
          </div>
        </div>
      </div>

      <div className="font-bold ml-8 pt-4 text-start">Registry Scan</div>
      <div className="p-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        <div className="w-[400px] h-[250px] rounded-lg bg-white shadow relative p-4">
                  <div className="text-start font-semibold p-2">
                    Image Risk Assessment
                  </div>
                  <div className="text-start text-gray-600 mb-4 p-2">
                    1470 Total Vulnerabilities
                  </div>
                  <div className="relative bg-gray-200 h-[30px] w-[360px] rounded-2xl overflow-hidden flex justify-center items-center mx-auto">
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
                      style={{
                        top: "60px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      {bookCalculations[hoveredSection]}
                    </div>
                  )}
                </div>

                <div className="w-[400px] h-[250px] rounded-lg bg-white shadow relative p-4">
                  <div className="text-start font-semibold p-2">
                    Image Risk Issues
                  </div>
                  <div className="text-start text-gray-600 mb-4 p-2">
                    2 Total Images
                  </div>
                  <div className="relative bg-gray-200 h-[30px] w-[360px] rounded-2xl overflow-hidden flex justify-center items-center mx-auto">
                    {["20%", "40%", "30%", "50%"].map((width, index) => (
                      <div
                        key={index}
                        className="absolute top-0 h-full"
                        style={{
                          width,
                          left: `${index * 20}%`,
                          backgroundColor: `hsl(${index * 72}, 70%, 50%)`,
                        }}
                        onMouseEnter={() => setHoveredSection2(index)}
                        onMouseLeave={() => setHoveredSection2(null)}
                      />
                    ))}
                  </div>
                  {hoveredSection2 !== null && (
                    <div
                      className="absolute bg-black text-white text-sm rounded-lg p-2"
                      style={{
                        top: "60px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      {bookCalculations2[hoveredSection2]}
                    </div>
                  )}
                </div>

          {widgets.Image.map((widget, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] rounded-lg bg-white shadow relative p-4"
            >
              <div className="flex justify-between">
                <div className="font-semibold">{widget.name}</div>
                <button
                  onClick={() => handleDeleteWidget("Image", index)}
                  className="text-red-600 hover:text-red-800 p-2"
                >
                  <MdDelete />
                </button>
              </div>
              <div className="mt-2 text-gray-700">{widget.text}</div>
            </div>
          ))}
          {/* Add Widget Button */}
          <div className="w-[400px] h-[250px] rounded-lg bg-gray-300 shadow flex justify-center items-center">
            <AddButton onAddWidget={handleAddWidget} />
          </div>
        </div>
      </div>

      <div className="font-bold ml-8 pt-4 text-start">Ticket Dashboard</div>
      <div className="p-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          {widgets.Ticket.map((widget, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] rounded-lg bg-white shadow relative p-4"
            >
              <div className="flex justify-between">
                <div className="font-semibold">{widget.name}</div>
                <button
                  onClick={() => handleDeleteWidget("Ticket", index)}
                  className="text-red-600 hover:text-red-800 p-2"
                >
                  <MdDelete />
                </button>
              </div>
              <div className="mt-2 text-gray-700">{widget.text}</div>
            </div>
          ))}
          {/* Add Widget Button */}
          <div className="w-[400px] h-[250px] rounded-lg bg-gray-300 shadow flex justify-center items-center">
            <AddButton onAddWidget={handleAddWidget} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
