import { Box, Container } from "@mui/material";
import WhyExhibit from "src/components/EvSections/why-exhibit-sections/WhyExhibit";
import ExhibitionFeatures from "src/components/EvSections/why-exhibit-sections/ExhibitionFeatures";
import ByExhibit from "src/components/EvSections/why-exhibit-sections/ByExhibit";
import ExpectMeet from "src/components/EvSections/why-exhibit-sections/ExpectMeet";
import Footer from "src/components/EvSections/why-exhibit-sections/Footer";
import CoreSection from "@/components/EvSections/why-exhibit-sections/CoreSection";
import EvLayout from "src/components/layouts/EvLayout";
import QuadImgSection from "src/components/EvSections/QuadImgSection";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";
import { HighlightOff } from "@mui/icons-material";
// ======================================================
// ======================================================

// const peopleList = [
//   "Vehicle Manufacturers and Distributors",
//   "Integrated Energy Companies",
//   "Banks, Finance and Investment Firms",
//   "R & D Companies",
//   "Engineers, Architects, and Designers",
//   "Consultants",
//   "Environmental Agencies",
//   "Government Officials",
//   "Law Firms and Academia",
//   "Municipalities",
//   "CEO/ President/ Chairman",
//   "Owner/ Partner/ Proprietor",
//   "Public Transport Operators",
//   "Technical/ Business Specialists ",
//   "Technology Service Provider",
// ];

// const serviceList = [
//   {
//     img: "/assets/images/why-exhibit/2.png",
//     content: "Connect with thousands of prospective customers and partners",
//   },
//   {
//     img: "/assets/images/why-exhibit/3.png",
//     content:
//       "Network with global representatives from across the H/EV supply chain",
//   },
//   {
//     img: "/assets/images/why-exhibit/4.png",
//     content: "Stay informed on the latest trends in the EV industry",
//   },
//   {
//     img: "/assets/images/why-exhibit/5.png",
//     content:
//       "Benchmark your products and services against industry competition",
//   },
//   {
//     img: "/assets/images/why-exhibit/6.png",
//     content: "Stay ahead of the curve on evolving customer requirements",
//   },
// ];

// const featureList = [
//   {
//     img: "/assets/images/why-exhibit/7.jpg",
//     content:
//       "You can preview new and improved solutions for your applications during the new product showcase. Attend live demonstrations at the booths to learn about new and improved products.",
//     buttonText: "DOWNLOAD BROCHURE NOW",
//     buttonLink: "/",
//     title: "New Product Showcase",
//   },
//   {
//     img: "/assets/images/why-exhibit/8.jpg",
//     content:
//       "Explore the latest technical content and developments in the industry which includes presentations, panel discussions and case studies, all in the show floor and free to attend for everyone.",
//     buttonText: "LEARN MORE",
//     buttonLink: "/about#open-tech",
//     title: "Open Tech Sessions",
//   },
// ];

// const whyExhibit = {
//   img: "/assets/images/why-exhibit/DSC08355.jpg",
//   title: " ",
//   ps: [
//     `As is true for many emerging technologies, vehicle electrification is experiencing rapid innovation. The Middle East & Africa Electric Vehicle Market is expected to witness substantial growth & business opportunities over the next decade. Governments are focusing on renewable energy and clean transportation technologies along with the implementation of economic and energy diversification plans.
// EVIS is unique by integrating inter-related technologies at one event, allowing attendees to network across the value chains and exploit new opportunities at the intersection of EV technologies.
// `,
//   ],
//   direction: "right",
// };

// const futureOfMobility = {
//   img: "/assets/images/why-exhibit/f2.jpg",
//   title: "Future Of Mobility",
//   ps: [
//     `Electric cars will eventually be dominated by few giants; however the components and enabling technologies are applicable to many other types of vehicles - land,sea & air. Billion-dollar businesses will be created for those supplying components and vehicles to these “niches”. The electric vehicles of the future are likely to combine several enabling platforms. 
// By providing accurate information about relative market sizes, battery demand and fastest growing electric vehicle markets beyond cars, our aim is to give those in the industry the knowledge to make more informed decisions on their investments and focus into the electric vehicle market.
// EV’s are increasingly visible on the UAE’s roads. This number is set to expand rapidly in the coming years and will interlink the transport and electricity sector like never before. 

// `,
//   ],
//   direction: "left",
// };

const WhyExhibitComponent = (props) => {

  let {
    whyExhibitPageData,
    whyExhibitSections,
    expectToMeetCardsText,
    futureOfMobility,
    featureList,
    whyExhibit,
    serviceList,
    peopleList,

  } = useMemo(() => {
    if (!props?.whyExhibitPage) {
      return {};
    }
    let whyExhibitPageData = JSON.parse(props.whyExhibitPage).data?.attributes ?? null;

    let whyExhibitSections = whyExhibitPageData?.why_exhibit_sections;
    const whyExhibit = {
      img: whyExhibitSections[0].image.data.attributes.url,
      title: whyExhibitSections[0].title,
      ps: whyExhibitSections[0].paragraph,
      direction: "right",
    };
    const futureOfMobility = {
      img: whyExhibitSections[1].image.data.attributes.url,
      title: whyExhibitSections[1].title,
      ps: whyExhibitSections[1].paragraph,
      direction: "left",
    };

    const serviceList = whyExhibitPageData?.by_exhibiting_cards?.map((highlight) => {
      return {
        img: highlight?.image?.data?.attributes?.url,
        content: highlight?.text,
      }
    })

    const featureList = whyExhibitPageData?.exhibition_features_cards?.map((highlight) => {
      return {
        img: highlight?.image?.data?.attributes?.url,
        content: highlight?.paragraph,
        buttonText: highlight?.action_button_text,
        buttonLink: highlight?.action_button_url,
        title: highlight?.title,
      }
    })

    const peopleList = whyExhibitPageData?.expect_to_meet_cards_text?.map((highlight) => {
      return highlight?.text;
    })

    let expectToMeetCardsText = whyExhibitPageData?.expect_to_meet_cards_text;




    // const videosData = whyExhibitPageData?.why_exhibit_sections?.map((paragraph) => {
    //   return {
    //     youtube: video?.youtube_link ?? "",
    //   };
    // });

    return {
      whyExhibitPageData,
      whyExhibitSections,
      expectToMeetCardsText,
      futureOfMobility,
      whyExhibit,
      featureList,
      serviceList,
      peopleList,

    };
  }, [props?.whyExhibitPage]);

  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <WhyExhibit
          whyExhibit={whyExhibit}
          futureOfMobility={futureOfMobility}
        />
      </Container>
      <CoreSection></CoreSection>
      <Container>
        <ExhibitionFeatures data={featureList} />
        <ByExhibit data={serviceList} />
        <ExpectMeet data={peopleList} />
      </Container>

      <Container>
        <Box sx={{ mt: "100px" }}>
          <SponsorsGrid />
          <PartnersGrid sx={{ mt: 5 }} />
        </Box>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps() {
  let whyExhibitPage = null;
  let whyExhibitPageError = null;

  try {
    whyExhibitPage = await api.getWhyExhibit();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    whyExhibitPageError = dev_error;
  }

  if (!whyExhibitPage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      whyExhibitPage: JSON.stringify(whyExhibitPage),
      whyExhibitPageError: JSON.stringify(whyExhibitPageError),
    },
    revalidate: 10, // In seconds
  };
}

export default WhyExhibitComponent;
