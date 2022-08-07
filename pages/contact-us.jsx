import { Container } from "@mui/material";
import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import FindUsSection from "components/EvSections/ContactUsSections/FindUsSection";
import InnovationTeamSection from "components/EvSections/ContactUsSections/InnovationTeamSection";
import AboutNirvana from "components/EvSections/ContactUsSections/AboutNirvana";
import SponsorsPartnersSection from "components/EvSections/ContactUsSections/SponsorsPartnersSection";
// ======================================================
// ======================================================

const EvContactUs = () => {
    return (
        <EvLayout showNavbar={true} title={"Contact-Us"}>
            <Container
                sx={{
                    mb: 6,
                }}
            >
                <FindUsSection />
                <InnovationTeamSection />
            </Container>
            <AboutNirvana />
            <Container>
                <SponsorsPartnersSection />
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
export default EvContactUs;
