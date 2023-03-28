import { Container } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import MarketGateway from "@/components/EvSections/about-page-sections/MarketGateway";

// ======================================================
// ======================================================

const WhyExhibitComponent = (props) => {
  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <MarketGateway></MarketGateway>
      </Container>
    </EvLayout>
  );
};

export default WhyExhibitComponent;
