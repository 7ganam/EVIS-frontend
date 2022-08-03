import {Container } from "@mui/material";
import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import Landing from "components/EvSections/conference-page-sections/Landing";
import LandingText from "components/EvSections/conference-page-sections/LandingText";
import SummitThemes from "components/EvSections/conference-page-sections/SummitThemes";
import Speakers from "components/EvSections/conference-page-sections/Speakers";
import Table from "components/EvSections/conference-page-sections/Table";
import Footer from "components/EvSections/why-exhibit-sections/Footer";


// ======================================================
// ======================================================

const footer1 = [
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQyODYxZjIzZDk0NjRmNjA=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ0ODYxZjIzZGE4N2NhZWM=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ3MzYxZjIzZGMxMDU2Mjc=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ4NTYxZjIzZGNkZTU0ODc=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Njk4NTkyODYyMmIwMmM4OTk4YjE=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Njk4NTk2MTYyMmIwMmU5OGQ3MjA=.png",
  }
]

const footer2 = [
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjE0MjYxZmQyZDNlNGE3OWY=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjEzMjYxZmQyZDM0NWQ4MzE=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjExMDYxZmQyZDFlNGVlMjY=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjEyMzYxZmQyZDJiMGY1NTE=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0NjAyNjk5NTYyMWM2MGYzZTVhODE=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0NjAyNjk4NDYyMWM2MGU4ZGVhYjI=.png",
  }
]



const section = {
  main : " The motto for the Summit is “Smart Vehicle Mobility” with four themes (concentrations) that are in perfect synergy with Abu Dhabi, which is witnessing an overwhelming energy greening and sustainability awareness trends. Abu Dhabi has proven to be one of the fastest growing smart cities worldwide adopting the latest green technologies after the successful establishment of Masdar City, the first of its kind worldwide.",
  t1 : "Paid Conference",
  t2 : "Open Tech Sessions",
  p1 : "Each conference day kicks off with a notable keynote address followed by a roundtable panel of top industry leaders discussing the most important market disruptors of the last year and what they expect to see in the years to come.",
  p2 : "Explore the latest technical content and developments in the industry which includes presentations, panel discussions and case studies, all in the show floor and free to attend for everyone.",
  btnText : "Register Now",
}

const themes = [
  {
      img: "/assets/images/conference-overview/1.png",
      title: "NEW ENERGY VEHICLES",
      p1: "​​​​Passenger Battery Electric Vehicles (BEV)",
      p2: "Hydrogen Fuel Cell Vehicles (FCEV)",
      p3 : "Two & Three Wheeler Electric Vehicles",
      p4 : "Electric Planes",
      direction: "left",
  },
  {
      img: "/assets/images/conference-overview/2.png",
      title: "ENERGY & INFRASTRUCTURE",
      p1: "EV Charging Infrastructure",
      p2 :"EV Charging Point Management Systems (CPMS)",
      p3 : "Smart Charging and Cybersecurity",
      p4 : "Grid Integration",
      direction: "right",

  },
  {
      img: "/assets/images/conference-overview/3.png",
      title: "POWERTRAIN",
      p1 : "​​​​Technology Developments",
      p2 : "Motors and E-Drive Systems",
      p3: "Battery Management Systems (BMS)",
      p4 : "",
      direction: "left",
  },
  {
      img: "/assets/images/conference-overview/4.png",
      title: "BATTERIES",
      p1 : "​​​Battery Technology & Development",
      p2 : "Second Life Batteries",
      p3 : "Disposal & Recycling",
      p4 : "Sustainable & Green Batteries",
      direction: "right",
  }
];




const imagesData = [
  {
      imageSrc: "/assets/images/speakers/1.png",
      name: "Alex Gilbert",
      title: "Head of Energy & Electrification - Commercial Development Transport for London (TfL)"
  },
  {
      imageSrc: "/assets/images/speakers/2.png",
      name: "Claas Bracklo",
      title: "Head of Electromobility at BMW Group & Chairman at CharIN"
  },
  {
      imageSrc: "/assets/images/speakers/3.png",
      name: "Dr. Nasser Saidi",
      title: "Chairman Clean Energy Business Council (CEBC)"
  }
];


const btnTxt = "See All Speakers";


const generalPage = () => {

  return (
    <EvLayout showNavbar={true}>
      <Landing />
      <Container
        sx={{
          mb: 6,
        }}
      >
        <LandingText section = {section} />
        <SummitThemes data = {themes} />
        <Speakers data = {imagesData} btn = {btnTxt} />
        <Table />
        <Footer footer1 = {footer1} footer2 = {footer2}/>






      </Container>
    </EvLayout>
  );
};

export async function getStaticProps() {
  const allProducts = await api.getGrocery3Products();
  const offerProducts = await api.getGrocery3offerProducts();
  const topSailedProducts = await api.getTopSailedProducts();
  return {
    props: {
      allProducts,
      offerProducts,
      topSailedProducts,
    },
  };
}
export default generalPage;
