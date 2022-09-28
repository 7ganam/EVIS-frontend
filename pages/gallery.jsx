import { Container } from "@mui/material";
import CardsSection from "src/components/EvSections/CardsSection";
import FontsSections from "src/components/EvSections/FontsSections";
import TextSection from "src/components/EvSections/TextSection";
import ImageCardsSection from "src/components/EvSections/ImageCardsSection";
import ButtonsSection from "src/components/EvSections/ButtonsSection";
import TwoColumnSection from "src/components/EvSections/TwoColumnSection";
import FactBannerSection from "src/components/EvSections/FactBannerSection";
import ShadedContainerSection from "src/components/EvSections/ShadedContainerSection";
import FeedbackCardsSection from "src/components/EvSections/FeedbackCardsSection";
import EvLayout from "src/components/layouts/EvLayout";
import SponsorsImageGridSection from "src/components/EvSections/SponsorsImageGridSection";
import api from "src/utils/api/grocery3-shop";
import RoundedImagesSection from "src/components/EvSections/RoundedImagesSection";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import FeedbackQuotesSection from "src/components/EvSections/FeedbackQuotesSection";
import FullWidthCardsSection from "src/components/EvSections/FullWidthCardsSection";
import PageHeader from "src/components/EvComponents/PageHeader";
import TestimonialCardSection from "@/components/EvSections/TestimonialCardSection";
import QuadImgSection from "src/components/EvSections/QuadImgSection";

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
        <TestimonialCardSection />
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
