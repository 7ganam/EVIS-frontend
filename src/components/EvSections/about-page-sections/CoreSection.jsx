import React from "react";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { Box } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";

const items = [
    {
        img : "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/1200x0/MTYzMTc5NzcxODYxNDM0MWQ2M2VhYWQ=.jpeg",
        title : "New Energy Vehicles",
        ps : [
             "Electric Passenger Vehicles",
             "Electric Light Vehicles",
             "Electric Commercial Vehicles",
             "Electric Motorcycles",
             "Electric Scooters",
             "Electric Bicycles",
             "Hybrid Electric Vehicles",
             "Fuel Cell Electric Vehicles"
            ],
        direction : "left"
    },
    {
        img : "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/1200x0/MTYzMTc5Nzc1NDYxNDM0MWZhZGY1NTU=.jpeg",
        title : "Energy & Infrastructure",
        ps : [
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
        direction : "right"
    },
    {
        img : "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/1200x0/MTYzMTc5Nzc5NzYxNDM0MjI1YmJhMGU=.jpeg",
        title : "Batteries",
        ps : [
            "Lithium Batteries, Lead-acid Batteries, Nickel",
            "Batteries(MH-Ni Battery) & Other Batteries",
            "Battery Management",
            "Battery Charging Systems",
            "Testing Systems & Testing Equipment",
            "Capacitors",
            "Fuel Cell Technology, Fuel Cell Systems & Fuel Cell",
            "Management",
            "Hydrogen Tank & Hydrogen Refueling",
            "Battery Manufacturing Equipment",
            "Raw Materials",
            "Parts & Components"
        ],
        direction : "left"
    },
    {
        img : "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/1200x0/MTYzMTc5Nzg2NTYxNDM0MjY5NmU3YzI=.jpeg",
        title : "Powertrain",
        ps : [
            "General Motors",
            "In-wheel Motor",
            "Hybrid Engines",
            "Cable Braider and Automotive Wiring",
            "Drive Systems",
            "Transmission",
            "Braking Technology and Components",
            "Other Powertrain Components"
        ],
        direction : "right"
    }
];

const CoreSection = () => {
  return (
    <Box sx={{ px: 6 , pb : 3 }}>
        <SectionTitle>CORE SECTORS</SectionTitle>
        {items.map((item, index) => {
            return (<TwoColumnBox item = {item} key = {index} />)
        })}
    </Box>
  )
}

export default CoreSection