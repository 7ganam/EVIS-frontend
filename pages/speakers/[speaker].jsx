import { useRouter } from "next/router";
import { Container, Grid, Box } from "@mui/material";
import { H2, H4, H5 } from "components/EvComponents/Typography";

import Image from "components/BazarImage";

let data = [
  {
    imageSrc: "/assets/images/speakers/AhmedAbdu.png",
    name: "Ahmed Abdu",
    title: "E‐Mobility Division Lead",
    company: "ABB",
  },
  {
    imageSrc: "/assets/images/speakers/SahilAbdulSalam.png",
    name: "Sahil Abdul Salam",
    title: "Director",
    company: "Qpole Energy Services LLC",
  },
  {
    imageSrc: "/assets/images/speakers/RamiAbuHayah.png",
    name: "Rami Abu Hayah",
    title: "Chief Executive Officer",
    company: "Cubic Art Technologies(CATEC)",
  },
  {
    imageSrc: "/assets/images/speakers/DrMajidaAlAzazi.png",
    name: "Dr. Majida Al Azazi",
    title: "Chairman",
    company: "M Glory Group",
  },
  {
    imageSrc: "/assets/images/speakers/FaresAlMazrooei.png",
    name: "Fares Al Mazrooei",
    title: "CEO & Founder",
    company: "Volt.ae",
  },
  {
    imageSrc: "/assets/images/speakers/MowafakAlSaadi.png",
    name: "Mowafak AlSaadi",
    title: "General Manager",
    company: "Electromin",
  },
  {
    imageSrc: "/assets/images/speakers/NasirAlShamsi.png",
    name: "Nasir AlShamsi",
    title: "Managing Director - Sustainable Transport Projects",
    company: "BEEAH Group",
  },
  {
    imageSrc: "/assets/images/speakers/EngWaelAlTheyab.png",
    name: "Eng.Wael AlTheyab",
    title:
      "Spokesman-Director of electrical and electronic standards Department",
    company: "SASO",
  },
  {
    imageSrc: "/assets/images/speakers/DanBalmer.png",
    name: "Dan Balmer",
    title: "Regional Director Asia Pacific & Middle East",
    company: "Group Lotus",
  },
  {
    imageSrc: "/assets/images/speakers/MoneefBarakat.png",
    name: "Moneef Barakat",
    title: "CEO",
    company: "Solarabic",
  },
  {
    imageSrc: "/assets/images/speakers/CarstenBender.png",
    name: "Carsten Bender",
    title: "Managing Director",
    company: "Audi Middle East",
  },
  {
    imageSrc: "/assets/images/speakers/AsherBennett.png",
    name: "Asher Bennett",
    title: "Founder and CEO",
    company: "Tevva",
  },
  {
    imageSrc: "/assets/images/speakers/VitaliBielski.png",
    name: "VitaliBielski",
    title: "Associate Director - Mobility Practice",
    company: "Frost & Sullivan",
  },
  {
    imageSrc: "/assets/images/speakers/AndreyBolshakov.png",
    name: "Andrey Bolshakov",
    title: "Chief Business Development Officer",
    company: "Evocargo",
  },
  {
    imageSrc: "/assets/images/speakers/GiuseppeBonollo.png",
    name: "Giuseppe Bonollo",
    title: "Senior Vice President Sales & Marketing",
    company: "Pininfarina",
  },
  {
    imageSrc: "/assets/images/speakers/ClaasBracklo.png",
    name: "Claas Bracklo",
    title: "Chairman",
    company: "CharIN",
  },
  {
    imageSrc: "/assets/images/speakers/MarkCarson.png",
    name: "Mark Carson",
    title:
      "Customer Experience and Quality Director - Africa Middle East, Pacific",
    company: "Renault Middle East",
  },
  {
    imageSrc: "/assets/images/speakers/MohamadCharafeddine.png",
    name: "Mohamad Charafeddine",
    title: "VP of Product for mobility platforms",
    company: "Careem",
  },
  {
    imageSrc: "/assets/images/speakers/SwagatChopra.png",
    name: "Swagat Chopra",
    title: "Head of Electric Vehicle",
    company: "Moove",
  },
  {
    imageSrc: "/assets/images/speakers/SherryColbourne.png",
    name: "Sherry Colbourne",
    title: "President & CEO",
    company: "Spark Center",
  },
  {
    imageSrc: "/assets/images/speakers/BrendanCronin.png",
    name: "Brendan Cronin",
    title: "Director",
    company: "AFRY Management Consulting",
  },
  {
    imageSrc: "/assets/images/speakers/JaideepDhanoa.png",
    name: "Jaideep Dhanoa",
    title: "Co-Founder and CEO",
    company: "FENIX",
  },
  {
    imageSrc: "/assets/images/speakers/AlaaElHuni.png",
    name: "Alaa ElHuni",
    title: "Head of International Expansion",
    company: "CAFU",
  },
  {
    imageSrc: "/assets/images/speakers/KarimElJisr.png",
    name: "Karim ElJisr",
    title: "Chief Sustainability Officer",
    company: "Diamond Developers",
  },
  {
    imageSrc: "/assets/images/speakers/DrIngAhmedElguindy.png",
    name: "Dr.-Ing. Ahmed Elguindy",
    title: "Principle",
    company: "Guindy Consulting",
  },
  {
    imageSrc: "/assets/images/speakers/AbilashEthanurThuppale.png",
    name: "Abilash Ethanur Thuppale",
    title: "Head – Smart Building & Smart Mobility",
    company: "Al Naboodah Group Enterprises",
  },
  {
    imageSrc: "/assets/images/speakers/AsafFormoza.png",
    name: "Asaf Formoza",
    title: "CEO",
    company: "City Transformer",
  },
  {
    imageSrc: "/assets/images/speakers/AlexGilbert.png",
    name: "Alex Gilbert",
    title: "Head of Energy & Electrification - Commercial Development",
    company: "Transport for London (TfL)",
  },
  {
    imageSrc: "/assets/images/speakers/NipinGopi.png",
    name: "Nipin Gopi",
    title: "Sustainability Lead",
    company: "LeasePlan",
  },
  {
    imageSrc: "/assets/images/speakers/MichaelGranoff.png",
    name: "Michael Granoff",
    title: "Managing Partner",
    company: "Maniv Mobility",
  },
  {
    imageSrc: "/assets/images/speakers/MarkHaddad.png",
    name: "Mark Haddad",
    title: "Partner",
    company: "Strategy& Middle East",
  },
  {
    imageSrc: "/assets/images/speakers/AhmedHafez.png",
    name: "Ahmed Hafez",
    title: "Regional Director",
    company: "Via",
  },
  {
    imageSrc: "/assets/images/speakers/AliHalabi.png",
    name: "Ali Halabi",
    title: "Founder and CEO",
    company: "Volt Lines B.V.",
  },
  {
    imageSrc: "/assets/images/speakers/MonaHassanKotb.png",
    name: "Mona Hassan Kotb",
    title: "Head of Central Department of Studies & Research",
    company: "Egypt’s Ministry of Transport",
  },
  {
    imageSrc: "/assets/images/speakers/VilhelmHedberg.png",
    name: "Vilhelm Hedberg",
    title: "Co-Founder and CEO",
    company: "ekar",
  },
  {
    imageSrc: "/assets/images/speakers/SalmanHussain.png",
    name: "Salman Hussain",
    title: "CEO",
    company: "FUSE",
  },
  {
    imageSrc: "/assets/images/speakers/MarwanHussein.png",
    name: "Marwan Hussein",
    title: "Researcher - MENA CTE",
    company: "UITP",
  },
  {
    imageSrc: "/assets/images/speakers/AdeelIrshad.png",
    name: "Adeel Irshad",
    title: "COO-Chief Operating Officer EV TECHNOLOGY - SUR",
    company: "INTERNATIONAL INVESTMENT GROUP",
  },
  {
    imageSrc: "/assets/images/speakers/MichaelJizhar.png",
    name: "Michael Jizhar",
    title: "Executive Vice President",
    company: "MODENA",
  },
  {
    imageSrc: "/assets/images/speakers/RassoJörgBartenschlager.png",
    name: "RassoJörg Bartenschlager",
    title: "General Manager Power Division",
    company: "Al Masaood",
  },
  {
    imageSrc: "/assets/images/speakers/RaedKadri.png",
    name: "Raed Kadri",
    title:
      "Vice-President, Strategic Initiatives, Ontario Centre of Innovation",
    company: "Head of the Ontario Vehicle InnovationNetwork(OVIN)",
  },
  {
    imageSrc: "/assets/images/speakers/AndreKaufung.png",
    name: "Andre Kaufung",
    title: "Managing Director",
    company: "CharIN",
  },
  {
    imageSrc: "/assets/images/speakers/UdayKhemka.png",
    name: "Uday Khemka",
    title: "Co-founder and Vice Chairman",
    company: "Sun Group",
  },
  {
    imageSrc: "/assets/images/speakers/MartinKoehring.png",
    name: "Martin Koehring",
    title:
      "Head, World Ocean Initiative Senior Manager, Sustainability, Climate Change and Natural Resources",
    company: "Economist Impact",
  },
  {
    imageSrc: "/assets/images/speakers/LeoLiu.png",
    name: "Leo Liu",
    title: "Chairman of PWG Investments L.L.C",
    company: "NEV Investment L.L.C",
  },
  {
    imageSrc: "/assets/images/speakers/JohnLynch.png",
    name: "John Lynch",
    title: "Managing Director",
    company: "COMECA",
  },
  {
    imageSrc: "/assets/images/speakers/LyliaMEZHOUD.png",
    name: "Lylia MEZHOUD",
    title: "Sr Project Manager",
    company: "Total Energies Marketing Middle East",
  },
  {
    imageSrc: "/assets/images/speakers/CezanneMaherali.png",
    name: "Cezanne Maherali",
    title: "Head of Policy",
    company: "Uber Middle East and Africa",
  },
  {
    imageSrc: "/assets/images/speakers/SergioMarquez.png",
    name: "Sergio Marquez",
    title: "CEO",
    company: "GENEC",
  },
  {
    imageSrc: "/assets/images/speakers/EngMozaMohammedALNeimi.png",
    name: "Eng.Moza Mohammed AL-Neimi",
    title: "Director of Productivity & Demand Management Department",
    company: "UAE Ministry of Energy & Infrastructure",
  },
  {
    imageSrc: "/assets/images/speakers/KarimMousa.png",
    name: "Karim Mousa",
    title: "Senior Vice President, eMobility",
    company: "Siemens Middle East",
  },
  {
    imageSrc: "/assets/images/speakers/OrralNadjari.png",
    name: "Orral Nadjari",
    title: "Founder & CEO",
    company: "BritishVolt",
  },
  {
    imageSrc: "/assets/images/speakers/SophiaNadur.png",
    name: "Sophia Nadur",
    title: "Managing Partner",
    company: "BP Ventures",
  },
  {
    imageSrc: "/assets/images/speakers/RakeshNair.png",
    name: "Rakesh Nair",
    title: "Managing Director for ME European Brands",
    company: "Stellantis Middle East & Africa",
  },
  {
    imageSrc: "/assets/images/speakers/JoelNascimento.png",
    name: "Joel Nascimento",
    title: "Founder & CEO",
    company: "Kevares Autonomous Services",
  },
  {
    imageSrc: "/assets/images/speakers/RanaNawas.png",
    name: "Rana Nawas",
    title: "Partner Transportation & Services Practice",
    company: "Oliver Wyman",
  },
  {
    imageSrc: "/assets/images/speakers/MyriamNeaimeh.png",
    name: "Myriam Neaimeh",
    title: "Turing Fellow | Group Leader - Vehicle Grid Integration",
    company: "The Alan Turing Institute",
  },
  {
    imageSrc: "/assets/images/speakers/MelanieNoronha.png",
    name: "Melanie Noronha",
    title: "Senior Manager, Policy & Insights",
    company: "Economist Impact",
  },
  {
    imageSrc: "/assets/images/speakers/AlanO’Mahony.png",
    name: "Alan O’Mahony",
    title: "Senior Market Advisor",
    company: "Enterprise Ireland",
  },
  {
    imageSrc: "/assets/images/speakers/Dr.AndreasPiepenbrink.png",
    name: "Dr.Andreas Piepenbrink",
    title:
      "CEO E3/DC + BU Vice President HagerGroup for Energy Management Development",
    company: "HagerEnergy GmbH",
  },
  {
    imageSrc: "/assets/images/speakers/RohitRamesh.png",
    name: "Rohit Ramesh",
    title: "Senior Product Manager",
    company: "CITA Smart Solutions Limited",
  },
  {
    imageSrc: "/assets/images/speakers/FaisalAliRashid.png",
    name: "Faisal Ali Rashid",
    title: "Senior Demand side Director",
    company: "Dubai Supreme Council of Energy",
  },
  {
    imageSrc: "/assets/images/speakers/AdamRidgway.png",
    name: "Adam Ridgway",
    title: "Founder and CEO",
    company: "ONE MOTO - Electric Vehicles",
  },
  {
    imageSrc: "/assets/images/speakers/PeterRolton.png",
    name: "Peter Rolton",
    title: "Executive Chairman",
    company: "Britishvolt",
  },
  {
    imageSrc: "/assets/images/speakers/KarineSINGH.png",
    name: "Karine SINGH",
    title: "Managing Director",
    company: "Total Energies Marketing Middle East",
  },
  {
    imageSrc: "/assets/images/speakers/DrNasserSaidi.png",
    name: "Dr.Nasser Saidi",
    title: "Chairman",
    company: "Clean Energy Business Council (CEBC)",
  },
  {
    imageSrc: "/assets/images/speakers/AhmedSamir.png",
    name: "Ahmed Samir",
    title: "Managing Director",
    company: "Clean Energy Business Council (CEBC)",
  },
  {
    imageSrc: "/assets/images/speakers/StefanoSanchini.png",
    name: "Stefano Sanchini",
    title: "Regional Managing Director",
    company: "Bridgestone Middle East & Africa",
  },
  {
    imageSrc: "/assets/images/speakers/StephenSeverance.png",
    name: "Stephen Severance",
    title: "Head of Programme Management and Investments at Masdar City (UAE)",
    company: "Masdar City",
  },
  {
    imageSrc: "/assets/images/speakers/JonathanSpear.png",
    name: "Jonathan Spear",
    title: "Policy and Strategy Advisor, Transportation",
    company: "Atkins",
  },
  {
    imageSrc: "/assets/images/speakers/MihaiStumbea.png",
    name: "Mihai Stumbea",
    title: "CTO",
    company: "FUSE",
  },
  {
    imageSrc: "/assets/images/speakers/HamidSyed.png",
    name: "Hamid Syed",
    title: "General Manager",
    company: "Middle East at UL (Underwriters Laboratories)",
  },
  {
    imageSrc: "/assets/images/speakers/IrfanTansel.png",
    name: "Irfan Tansel",
    title: "Chief Executive Officer",
    company: "Al Masaood Automobile Company",
  },
  {
    imageSrc: "/assets/images/speakers/MartinTillman.png",
    name: "Martin Tillman",
    title: "Director of Consulting",
    company: "AECOM",
  },
  {
    imageSrc: "/assets/images/speakers/PhilippeVangeel.png",
    name: "Philippe Vangeel",
    title: "Communication Manager",
    company: "AVERE - The European Association",
  },
];

const SpeakerPage = () => {
  const router = useRouter();
  const filterName = router.query.speaker;
  const nameData = data.filter((item) => item.name === filterName)[0];
  if (!nameData) {
    return (
      <Box pt={20}>
        <Container mb={6}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <H2>Loading ...</H2>
          </Box>
        </Container>
      </Box>
    );
  }

  // console.log(nameData);

  return (
    <Box py={15}>
      <Container mb={6}>
        <Grid
          container
          sx={{
            boxShadow: "1px 1px 5px 1px gray",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            sx={{
              backgroundColor: "#f0f0f0",
              borderRight: " solid 1px #d9d9d9",
            }}
          >
            <Box
              sx={{
                my: "1em",
                mx: "1em",
              }}
            >
              <Image
                sx={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  // padding: "30px 60px"
                  //   width: "120px",
                  //   height: "120px",
                  margin: "auto",
                }}
                alt="rounded image"
                src={nameData.imageSrc}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={10}
            sx={{
              backgroundColor: "#f0f0f0",
            }}
          >
            <Box ml={3} my={3} sx={{}}>
              <H2>{nameData.name}</H2>
              <H4
                sx={{
                  color: "gray",
                }}
              >
                {nameData.title}
              </H4>
              <H4
                sx={{
                  color: "gray",
                }}
              >
                {nameData.company}
              </H4>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              borderTop: "solid 1px #d9d9d9",
            }}
          >
            <Box mx={2} my={2}>
              <H2
                sx={{
                  color: "#4d4d4d",
                }}
              >
                About
              </H2>
              <H5
                sx={{
                  color: "#4d4d4d",
                }}
              >
                Lorem ipsum dolor sit amet. Quo veritatis unde aut sunt
                blanditiis sed veritatis tempore non reiciendis explicabo est
                tenetur consequuntur rem assumenda porro ea incidunt
                consectetur. Et rerum voluptates et tempora impedit qui nulla
                quod. Et quae quod aut minus nulla non corrupti voluptas! At
                earum nihil ut dolorem omnis et aliquid excepturi a fuga nulla
                aut sint iure et doloremque quo veniam consequatur. Est
                voluptatem voluptas et debitis omnis et blanditiis alias aut
                distinctio quia.
              </H5>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SpeakerPage;
