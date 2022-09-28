import React from "react";
import QuadImg from "src/components/EvComponents/QuadImg";

const itemsData = [
  {
    img: "/assets/images/quadImage/ev.png",
    title: "New Energy Vehicles",
    ps: [
      "Electric Passenger Vehicles",
      "Electric Light Vehicles",
      "Electric Commercial Vehicles",
      "Electric Motorcycles",
      "Electric Scooters",
      "Electric Bicycles",
      "Hybrid Electric Vehicles",
      "Fuel Cell Electric Vehicles",
    ],
    direction: "left",
  },
  {
    img: "/assets/images/quadImage/infra2.jpg",
    title: "Energy & Infrastructure",
    ps: [
      "Electric Energy Suppliers",
      "Hydrogen Energy Suppliers",
      "Energy Infrastructure",
      "Intelligent Grid V2G",
      "Electrical Cables",
      "Connectors",
      "Fast Charging Stations",
      "Energy and Charging Systems",
      "Charging Infrastructure",
      "Hydrogen Fuel infrastructure",
      "Communication Infrastructure",
    ],
    direction: "right",
  },
  {
    img: "/assets/images/quadImage/patteries.jpg",
    title: "Batteries",
    ps: [
      "Lithium Batteries, Lead-acid Batteries, Nickel",
      "Batteries(MH-Ni Battery) & Other Batteries",
      "Battery Management",
      "Battery Charging Systems",
      "Testing Systems & Testing Equipment",
      "Capacitors",
      "Fuel Cell Technology & Fuel Cell Systems",
      "Hydrogen Tank & Hydrogen Refueling",
      "Battery Manufacturing Equipment",
      "Raw Materials",
      "Parts & Components",
    ],
    direction: "left",
  },
  {
    img: "/assets/images/quadImage/power.jpg",
    title: "Powertrain",
    ps: [
      "General Motors",
      "In-wheel Motor",
      "Hybrid Engines",
      "Cable Braider and Automotive Wiring",
      "Drive Systems",
      "Transmission",
      "Braking Technology and Components",
      "Other Powertrain Components",
    ],
    direction: "right",
  },
];

const QuadImgSection = () => {
  return <QuadImg data={itemsData} />;
};

export default QuadImgSection;
