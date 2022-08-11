import * as React from "react";
import { Container, Box, Link } from "@mui/material";
import { H5, Paragraph } from "components/EvComponents/Typography";
import { SectionTitle } from "components/EvComponents/StyledTypography";

const data = {
    Title: "FIND US AT",
    Paragraph: [
        { body: "Breakwater" },
        { body: "Opp. Abu Dhabi International Marine Sports Club" },
        { body: "Abu Dhabi" },
        { body: "United Arab Emirates" },
    ],
    Email: "evis@nirvanaholding.com",
    EmailTo: "mailto:evis@nirvanaholding.com",

};

const FindUsSection = () => {
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box sx={{
                margin: "50px 0 40px",
            }}>
                <SectionTitle>
                    {data.Title}
                </SectionTitle>
            </Box>
            {data.Paragraph.map(({ body }) => {
                return (
                    <Paragraph key={body}>
                        {body}
                    </Paragraph>
                )
            })}
            <H5 margin="50px 0 20px">Email: <Link href={data.EmailTo}>{data.Email}</Link></H5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232406.6567360958!2d54.324372!3d24.473188000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3ec9c9737756f30!2sNirvana%20Travel%20%26%20Tourism!5e0!3m2!1sen!2sae!4v1659829234637!5m2!1sen!2sae" width="600" height="450" border="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Container>
    )
}

export default FindUsSection;