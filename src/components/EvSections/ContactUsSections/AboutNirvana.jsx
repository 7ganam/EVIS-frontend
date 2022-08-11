import * as React from "react";
import { Container, Box, Link } from "@mui/material";
import { Paragraph } from "components/EvComponents/Typography";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import Image from "components/BazarImage";

const data = {
    Src: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTYzMDc1MDAwODYxMzM0NTM4NDczMjg=.jpeg",
    H1: "ABOUT NIRVANA HOLDING",
    Body1: "Nirvana Holding oversees the growth, scale, and operations of four large-scale independent entities, Nirvana Travel & Tourism, Nirvana Global Travel, Nirvana Over the World, and Nirvana Tours & Logistics. Offering unparalleled travel services across the globe for a wide range of clients, including government and semi-government institutions, Nirvana Holding is today home to the leading Travel and Tourism Management Company in the UAE. In the future, the company plans to scale its regional excellence to a global level.",
    H2: "ABOUT NIRVANA EVENTS & EXHIBITIONS DEPARTMENT",
    Body2: "The Exhibition & Events Department is responsible for creating, branding, and organizing international exhibitions & events in the UAE with the support of resources from Nirvana Holding. The mission is to host successful events that will raise the company's value & generate promotional opportunities for clients & partners in business and marketing in the vision path of the government plans of future growth. Our portfolio of events begin with Electric Vehicle Innovation Summit - EVIS2022, Human Resource Technology Summit - HRTECH2022 and we're planning to launch new profiles in other sectors such as space, investment, tourism & industry. Also, we are opening channels for international exhibitions and events to be staged in the UAE.",
    NirvanaLink: "Nirvana Holding website",
    NirvanaLinkTo: "https://nirvanaholding.com/",
};


const AboutNirvana = () => {
    return (
        <Box>
            <Box sx={{ marginBottom: "25px", }}>
                <SectionTitle>{data.H1}</SectionTitle>
            </Box>
            <Box sx={{ height: "auto", width: "100%" }}>
                <Image
                    // height={60}
                    width={"100%"}
                    height={"100%"}
                    mb={0}
                    src={data.Src}
                    alt="logo"
                    sx={{ objectFit: "cover" }}
                />
            </Box>
            <Container>
                <Container>
                    <Box sx={{ margin: "25px 0 60px", }}>
                        <Paragraph>{data.Body1}</Paragraph>
                        <Box sx={{ margin: "20px 0 10px" }}>
                            <Paragraph>To learn more, visit the <Link href={data.NirvanaLinkTo}>{data.NirvanaLink}</Link></Paragraph>
                        </Box>
                    </Box>
                    <SectionTitle>{data.H2}</SectionTitle>
                    <Box sx={{ margin: "40px 0 30px", }}>
                        <Paragraph>{data.Body2}</Paragraph>
                    </Box>
                </Container>
            </Container>
        </Box>
    )
};

export default AboutNirvana;