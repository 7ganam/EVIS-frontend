import { Container } from "@mui/material";

import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/evis-api";
import SpeakersSection from "src/components/EvSections/agenda-page-sections/SpeakersSection";
import Box from "@mui/material/Box";
import { useMemo } from "react";
// ======================================================
// ======================================================

const speakersData2 = [
  {
    src: "/assets/images/speakers/AhmedAbdu.png",
    name: "Ahmed Abdu",
    title: "E‐Mobility Division Lead",
    company: "ABB",
  },
  {
    src: "/assets/images/speakers/SahilAbdulSalam.png",
    name: "Sahil Abdul Salam",
    title: "Director",
    company: "Qpole Energy Services LLC",
  },
  {
    src: "/assets/images/speakers/RamiAbuHayah.png",
    name: "Rami Abu Hayah",
    title: "Chief Executive Officer",
    company: "Cubic Art Technologies(CATEC)",
  },
  {
    src: "/assets/images/speakers/DrMajidaAlAzazi.png",
    name: "Dr. Majida Al Azazi",
    title: "Chairman",
    company: "M Glory Group",
  },
  {
    src: "/assets/images/speakers/FaresAlMazrooei.png",
    name: "Fares Al Mazrooei",
    title: "CEO & Founder",
    company: "Volt.ae",
  },
  {
    src: "/assets/images/speakers/MowafakAlSaadi.png",
    name: "Mowafak AlSaadi",
    title: "General Manager",
    company: "Electromin",
  },
  {
    src: "/assets/images/speakers/NasirAlShamsi.png",
    name: "Nasir AlShamsi",
    title: "Managing Director - Sustainable Transport Projects",
    company: "BEEAH Group",
  },
  {
    src: "/assets/images/speakers/EngWaelAlTheyab.png",
    name: "Eng.Wael AlTheyab",
    title:
      "Spokesman-Director of electrical and electronic standards Department",
    company: "SASO",
  },
  {
    src: "/assets/images/speakers/DanBalmer.png",
    name: "Dan Balmer",
    title: "Regional Director Asia Pacific & Middle East",
    company: "Group Lotus",
  },
  {
    src: "/assets/images/speakers/MoneefBarakat.png",
    name: "Moneef Barakat",
    title: "CEO",
    company: "Solarabic",
  },
  {
    src: "/assets/images/speakers/CarstenBender.png",
    name: "Carsten Bender",
    title: "Managing Director",
    company: "Audi Middle East",
  },
  {
    src: "/assets/images/speakers/AsherBennett.png",
    name: "Asher Bennett",
    title: "Founder and CEO",
    company: "Tevva",
  },
  {
    src: "/assets/images/speakers/VitaliBielski.png",
    name: "VitaliBielski",
    title: "Associate Director - Mobility Practice",
    company: "Frost & Sullivan",
  },
  {
    src: "/assets/images/speakers/AndreyBolshakov.png",
    name: "Andrey Bolshakov",
    title: "Chief Business Development Officer",
    company: "Evocargo",
  },
  {
    src: "/assets/images/speakers/GiuseppeBonollo.png",
    name: "Giuseppe Bonollo",
    title: "Senior Vice President Sales & Marketing",
    company: "Pininfarina",
  },
  {
    src: "/assets/images/speakers/ClaasBracklo.png",
    name: "Claas Bracklo",
    title: "Chairman",
    company: "CharIN",
  },
  {
    src: "/assets/images/speakers/MarkCarson.png",
    name: "Mark Carson",
    title:
      "Customer Experience and Quality Director - Africa Middle East, Pacific",
    company: "Renault Middle East",
  },
  {
    src: "/assets/images/speakers/MohamadCharafeddine.png",
    name: "Mohamad Charafeddine",
    title: "VP of Product for mobility platforms",
    company: "Careem",
  },
  {
    src: "/assets/images/speakers/SwagatChopra.png",
    name: "Swagat Chopra",
    title: "Head of Electric Vehicle",
    company: "Moove",
  },
  {
    src: "/assets/images/speakers/SherryColbourne.png",
    name: "Sherry Colbourne",
    title: "President & CEO",
    company: "Spark Center",
  },
  {
    src: "/assets/images/speakers/BrendanCronin.png",
    name: "Brendan Cronin",
    title: "Director",
    company: "AFRY Management Consulting",
  },
  {
    src: "/assets/images/speakers/JaideepDhanoa.png",
    name: "Jaideep Dhanoa",
    title: "Co-Founder and CEO",
    company: "FENIX",
  },
  {
    src: "/assets/images/speakers/AlaaElHuni.png",
    name: "Alaa ElHuni",
    title: "Head of International Expansion",
    company: "CAFU",
  },
  {
    src: "/assets/images/speakers/KarimElJisr.png",
    name: "Karim ElJisr",
    title: "Chief Sustainability Officer",
    company: "Diamond Developers",
  },
  {
    src: "/assets/images/speakers/DrIngAhmedElguindy.png",
    name: "Dr.-Ing. Ahmed Elguindy",
    title: "Principle",
    company: "Guindy Consulting",
  },
  {
    src: "/assets/images/speakers/AbilashEthanurThuppale.png",
    name: "Abilash Ethanur Thuppale",
    title: "Head – Smart Building & Smart Mobility",
    company: "Al Naboodah Group Enterprises",
  },
  {
    src: "/assets/images/speakers/AsafFormoza.png",
    name: "Asaf Formoza",
    title: "CEO",
    company: "City Transformer",
  },
  {
    src: "/assets/images/speakers/AlexGilbert.png",
    name: "Alex Gilbert",
    title: "Head of Energy & Electrification - Commercial Development",
    company: "Transport for London (TfL)",
  },
  {
    src: "/assets/images/speakers/NipinGopi.png",
    name: "Nipin Gopi",
    title: "Sustainability Lead",
    company: "LeasePlan",
  },
  {
    src: "/assets/images/speakers/MichaelGranoff.png",
    name: "Michael Granoff",
    title: "Managing Partner",
    company: "Maniv Mobility",
  },
  {
    src: "/assets/images/speakers/MarkHaddad.png",
    name: "Mark Haddad",
    title: "Partner",
    company: "Strategy& Middle East",
  },
  {
    src: "/assets/images/speakers/AhmedHafez.png",
    name: "Ahmed Hafez",
    title: "Regional Director",
    company: "Via",
  },
  {
    src: "/assets/images/speakers/AliHalabi.png",
    name: "Ali Halabi",
    title: "Founder and CEO",
    company: "Volt Lines B.V.",
  },
  {
    src: "/assets/images/speakers/MonaHassanKotb.png",
    name: "Mona Hassan Kotb",
    title: "Head of Central Department of Studies & Research",
    company: "Egypt’s Ministry of Transport",
  },
  {
    src: "/assets/images/speakers/VilhelmHedberg.png",
    name: "Vilhelm Hedberg",
    title: "Co-Founder and CEO",
    company: "ekar",
  },
  {
    src: "/assets/images/speakers/SalmanHussain.png",
    name: "Salman Hussain",
    title: "CEO",
    company: "FUSE",
  },
  {
    src: "/assets/images/speakers/MarwanHussein.png",
    name: "Marwan Hussein",
    title: "Researcher - MENA CTE",
    company: "UITP",
  },
  {
    src: "/assets/images/speakers/AdeelIrshad.png",
    name: "Adeel Irshad",
    title: "COO-Chief Operating Officer EV TECHNOLOGY - SUR",
    company: "INTERNATIONAL INVESTMENT GROUP",
  },
  {
    src: "/assets/images/speakers/MichaelJizhar.png",
    name: "Michael Jizhar",
    title: "Executive Vice President",
    company: "MODENA",
  },
  {
    src: "/assets/images/speakers/RassoJörgBartenschlager.png",
    name: "RassoJörg Bartenschlager",
    title: "General Manager Power Division",
    company: "Al Masaood",
  },
  {
    src: "/assets/images/speakers/RaedKadri.png",
    name: "Raed Kadri",
    title:
      "Vice-President, Strategic Initiatives, Ontario Centre of Innovation",
    company: "Head of the Ontario Vehicle InnovationNetwork(OVIN)",
  },
  {
    src: "/assets/images/speakers/AndreKaufung.png",
    name: "Andre Kaufung",
    title: "Managing Director",
    company: "CharIN",
  },
  {
    src: "/assets/images/speakers/UdayKhemka.png",
    name: "Uday Khemka",
    title: "Co-founder and Vice Chairman",
    company: "Sun Group",
  },
  {
    src: "/assets/images/speakers/MartinKoehring.png",
    name: "Martin Koehring",
    title:
      "Head, World Ocean Initiative Senior Manager, Sustainability, Climate Change and Natural Resources",
    company: "Economist Impact",
  },
  {
    src: "/assets/images/speakers/LeoLiu.png",
    name: "Leo Liu",
    title: "Chairman of PWG Investments L.L.C",
    company: "NEV Investment L.L.C",
  },
  {
    src: "/assets/images/speakers/JohnLynch.png",
    name: "John Lynch",
    title: "Managing Director",
    company: "COMECA",
  },
  {
    src: "/assets/images/speakers/LyliaMEZHOUD.png",
    name: "Lylia MEZHOUD",
    title: "Sr Project Manager",
    company: "Total Energies Marketing Middle East",
  },
  {
    src: "/assets/images/speakers/CezanneMaherali.png",
    name: "Cezanne Maherali",
    title: "Head of Policy",
    company: "Uber Middle East and Africa",
  },
  {
    src: "/assets/images/speakers/SergioMarquez.png",
    name: "Sergio Marquez",
    title: "CEO",
    company: "GENEC",
  },
  {
    src: "/assets/images/speakers/EngMozaMohammedALNeimi.png",
    name: "Eng.Moza Mohammed AL-Neimi",
    title: "Director of Productivity & Demand Management Department",
    company: "UAE Ministry of Energy & Infrastructure",
  },
  {
    src: "/assets/images/speakers/KarimMousa.png",
    name: "Karim Mousa",
    title: "Senior Vice President, eMobility",
    company: "Siemens Middle East",
  },
  {
    src: "/assets/images/speakers/OrralNadjari.png",
    name: "Orral Nadjari",
    title: "Founder & CEO",
    company: "BritishVolt",
  },
  {
    src: "/assets/images/speakers/SophiaNadur.png",
    name: "Sophia Nadur",
    title: "Managing Partner",
    company: "BP Ventures",
  },
  {
    src: "/assets/images/speakers/RakeshNair.png",
    name: "Rakesh Nair",
    title: "Managing Director for ME European Brands",
    company: "Stellantis Middle East & Africa",
  },
  {
    src: "/assets/images/speakers/JoelNascimento.png",
    name: "Joel Nascimento",
    title: "Founder & CEO",
    company: "Kevares Autonomous Services",
  },
  {
    src: "/assets/images/speakers/RanaNawas.png",
    name: "Rana Nawas",
    title: "Partner Transportation & Services Practice",
    company: "Oliver Wyman",
  },
  {
    src: "/assets/images/speakers/MyriamNeaimeh.png",
    name: "Myriam Neaimeh",
    title: "Turing Fellow | Group Leader - Vehicle Grid Integration",
    company: "The Alan Turing Institute",
  },
  {
    src: "/assets/images/speakers/MelanieNoronha.png",
    name: "Melanie Noronha",
    title: "Senior Manager, Policy & Insights",
    company: "Economist Impact",
  },
  {
    src: "/assets/images/speakers/AlanO’Mahony.png",
    name: "Alan O’Mahony",
    title: "Senior Market Advisor",
    company: "Enterprise Ireland",
  },
  {
    src: "/assets/images/speakers/Dr.AndreasPiepenbrink.png",
    name: "Dr.Andreas Piepenbrink",
    title:
      "CEO E3/DC + BU Vice President HagerGroup for Energy Management Development",
    company: "HagerEnergy GmbH",
  },
  {
    src: "/assets/images/speakers/RohitRamesh.png",
    name: "Rohit Ramesh",
    title: "Senior Product Manager",
    company: "CITA Smart Solutions Limited",
  },
  {
    src: "/assets/images/speakers/FaisalAliRashid.png",
    name: "Faisal Ali Rashid",
    title: "Senior Demand side Director",
    company: "Dubai Supreme Council of Energy",
  },
  {
    src: "/assets/images/speakers/AdamRidgway.png",
    name: "Adam Ridgway",
    title: "Founder and CEO",
    company: "ONE MOTO - Electric Vehicles",
  },
  {
    src: "/assets/images/speakers/PeterRolton.png",
    name: "Peter Rolton",
    title: "Executive Chairman",
    company: "Britishvolt",
  },
  {
    src: "/assets/images/speakers/KarineSINGH.png",
    name: "Karine SINGH",
    title: "Managing Director",
    company: "Total Energies Marketing Middle East",
  },
  {
    src: "/assets/images/speakers/DrNasserSaidi.png",
    name: "Dr.Nasser Saidi",
    title: "Chairman",
    company: "Clean Energy Business Council (CEBC)",
  },
  {
    src: "/assets/images/speakers/AhmedSamir.png",
    name: "Ahmed Samir",
    title: "Managing Director",
    company: "Clean Energy Business Council (CEBC)",
  },
  {
    src: "/assets/images/speakers/StefanoSanchini.png",
    name: "Stefano Sanchini",
    title: "Regional Managing Director",
    company: "Bridgestone Middle East & Africa",
  },
  {
    src: "/assets/images/speakers/StephenSeverance.png",
    name: "Stephen Severance",
    title: "Head of Programme Management and Investments at Masdar City (UAE)",
    company: "Masdar City",
  },
  {
    src: "/assets/images/speakers/JonathanSpear.png",
    name: "Jonathan Spear",
    title: "Policy and Strategy Advisor, Transportation",
    company: "Atkins",
  },
  {
    src: "/assets/images/speakers/MihaiStumbea.png",
    name: "Mihai Stumbea",
    title: "CTO",
    company: "FUSE",
  },
  {
    src: "/assets/images/speakers/HamidSyed.png",
    name: "Hamid Syed",
    title: "General Manager",
    company: "Middle East at UL (Underwriters Laboratories)",
  },
  {
    src: "/assets/images/speakers/IrfanTansel.png",
    name: "Irfan Tansel",
    title: "Chief Executive Officer",
    company: "Al Masaood Automobile Company",
  },
  {
    src: "/assets/images/speakers/MartinTillman.png",
    name: "Martin Tillman",
    title: "Director of Consulting",
    company: "AECOM",
  },
  {
    src: "/assets/images/speakers/PhilippeVangeel.png",
    name: "Philippe Vangeel",
    title: "Communication Manager",
    company: "AVERE - The European Association",
  },
];

const GeneralPage = (props) => {
  let speakersData = useMemo(() => {
    let allSpeakers = JSON.parse(props.allSpeakers)?.data ?? [];
    let mappedSpeakers = allSpeakers.map((speaker) => {
      return {
        link: `/speakers/${speaker?.attributes?.slug ?? ""}`,
        src: speaker?.attributes?.image?.data?.attributes?.url ?? "",
        name: speaker?.attributes?.name ?? "",
        title: speaker?.attributes?.title ?? "",
        company: speaker?.attributes?.company ?? "",
      };
    });

    let HESuhail = {
      link: "/speakers/h.e.-suhail-al-mazrooei",
      src: "https://res.cloudinary.com/drf11lmmn/image/upload/v1684491804/HE_Suhail_Al_Mazrouei_c3ca97e2e0.jpg",
      name: "H.E. Suhail Al Mazrooei",
      title: "Minister of Energy and Infrastructure",
      company: "Minister of Energy and Infrastructure",
    };

    let filteredSpeakers = mappedSpeakers.filter((speaker) => {
      return speaker.name !== "H.E. Suhail Al Mazrooei";
    });

    filteredSpeakers.unshift(HESuhail);
    return filteredSpeakers;
  }, [props.allSpeakers]);

  return (
    <EvLayout showNavbar={true}>
      <Container></Container>
      <Box
        sx={{
          mb: 6,
        }}
      >
        <SpeakersSection
          title={"EVIS 2023 Speakers"}
          data={speakersData}
        ></SpeakersSection>
      </Box>
    </EvLayout>
  );
};

export async function getStaticProps(context) {
  let allSpeakers = null;
  let allSpeakersError = null;

  try {
    allSpeakers = await api.getYearSpeakers(23);
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    allSpeakersError = dev_error;
  }

  if (!allSpeakers) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allSpeakers: JSON.stringify(allSpeakers),
      allSpeakersError: JSON.stringify(allSpeakersError),
    },
    revalidate: 1, // In seconds
  };
}
export default GeneralPage;
