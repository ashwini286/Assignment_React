import React, { useState } from "react";
import CloudAccount from "./data/CloudAccount.json";
import CloudAccountRisk from "./data/CloundAccountRisk.json";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Navbar from "../Navbar/Navbar";
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("CSPM");
  const [widgetInputs, setWidgetInputs] = useState({
    CSPM: { input1: "", input2: "", checked1: false, checked2: false },
    CWPP: { input1: "", input2: "", checked1: false, checked2: false },
    Image: { input1: "", input2: "", checked1: false, checked2: false },
    Ticket: { input1: "", input2: "", checked1: false, checked2: false },
  });

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
    <Navbar />
      <div className="bg-gray-100 min-h-screen w-full ">
        <div
          id="cspm-container "
          className="flex  flex-row justify-center items-center gap-8 p-14 "
        >
          {/* <h1 className=" flex absolute left-10 top-20 ">CSPM </h1> */}
          {/* Cloud Accounts Widget */}
          <div className="w-[500px] h-[250px] rounded-lg bg-white shadow">
  <div className="ml-2 mt-2">Cloud Accounts</div>
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
                padding: 15, // Adds gap between the options
              },
            },
          },
          layout: {
            padding: {
              right: 20,
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



          {/* Cloud Accounts Risk Widget */}
          <div className="w-[500px] h-[250px] rounded-lg bg-white shadow">
          <div className="ml-2 mt-2">Cloud Account Risk Assessment</div>
            <div className="flex justify-center items-center flex-col">
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
   

          <div className="w-[500px] h-[250px] rounded-lg bg-white shadow flex justify-center items-center">
  <div className="w-[250px] text-center border border-gray-400 p-2 rounded">
    Add Widget +
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
