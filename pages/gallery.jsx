import { Container, Box } from "@mui/material";
import CardsSection from "components/EvSections/CardsSection";
import FontsSections from "components/EvSections/FontsSections";
import TextSection from "components/EvSections/TextSection";
import ImageCardsSection from "components/EvSections/ImageCardsSection";
import ButtonsSection from "components/EvSections/ButtonsSection";
import TwoColumnSection from "components/EvSections/TwoColumnSection";
import FactBannerSection from "components/EvSections/FactBannerSection";
import ShadedContainerSection from "components/EvSections/ShadedContainerSection";
import FeedbackCardsSection from "components/EvSections/FeedbackCardsSection";
import EvLayout from "components/layouts/EvLayout";
import SponsorsImageGridSection from "components/EvSections/SponsorsImageGridSection";
import api from "utils/api/grocery3-shop";
import RoundedImagesSection from "components/EvSections/RoundedImagesSection";
import SponsorsGrid from "components/EvSections/SponsorsGrid";
import PartnersGrid from "components/EvSections/PartnersGrid";
import FeedbackQuotesSection from "components/EvSections/FeedbackQuotesSection";
import FullWidthCardsSection from "components/EvSections/FullWidthCardsSection";
import PageHeader from "components/EvComponents/PageHeader";
import QuadImgSection from "components/EvSections/QuadImgSection";

// ======================================================
// ======================================================
const pageHeaderData = {
  text: "Europe’s largest advanced battery and electric vehicle tech conference",
  buttonText: "Save The Date",
  buttonLink: "/",
  image: "/assets/images/ev-home/carousel2.jpeg",
};

const EvHome = () => {
  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <PageHeader
        text={pageHeaderData.text}
        buttonText={pageHeaderData.buttonText}
        buttonLink={pageHeaderData.buttonLink}
        image={pageHeaderData.image}
      ></PageHeader>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <CardsSection />
        <FontsSections />
        <TextSection />
        <ImageCardsSection />
        <ButtonsSection />
        <TwoColumnSection />
        <FactBannerSection />
        <FeedbackCardsSection />
        <RoundedImagesSection />
        <SponsorsImageGridSection />
        <SponsorsGrid />
        <PartnersGrid />
        <FeedbackQuotesSection />
        <FullWidthCardsSection />
      </Container>
      <ShadedContainerSection />
      <QuadImgSection />
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
export default EvHome;
