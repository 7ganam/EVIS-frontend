import * as React from "react";
import { Container, Box, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import RectangularInfoImage from "src/components/EvComponents/RectangularInfoImage";

const sectionTitle = {
  Title: "THE ELECTRIC VEHICLE INNOVATION TEAM",
};

const data = [
  {
    Src: "/assets/images/contact-us/NaserAlbahri.jpeg",
    Name: "Eng. Naser Albahri",
    Position: "Head of Organizing Committee",
    Mobile: "+971 2 304 3321 / +971 50 211 1583",
    Email: "naser.ali@nirvanatls.com",
    EmailTo: "mailto:naser.ali@nirvanatls.com",
  },

  {
    Src: "/assets/images/contact-us/ZayidAhamed.jpeg",
    Name: "Zayid Ahamed",
    Position: "Exhibition and Sponsorship Sales Enquiries",
    Mobile: "+971 2 304 3352 / +971 50 686 3956",
    Email: "zayid.ahamed@nirvanatls.com",
    EmailTo: "mailto:zayid.ahamed@nirvanatls.com",
  },
  {
    Src: "/assets/images/contact-us/JessySuraj.jpeg",
    Name: "Jessy Suraj",
    Position: "Operation Enquiries - Sales Team",
    Mobile: "+971 2 304 3322 / +971 50 686 3769",
    Email: "jessy.suraj@nirvanatls.com",
    EmailTo: "mailto:jessy.suraj@nirvanatls.com",
  },

  {
    Src: "/assets/images/contact-us/NasryAbouZaki.jpeg",
    Name: "Nasry Abou Zaki",
    Position: "PR Manager",
    Mobile: "+971 2 4444 788 / +971 56 998 9252",
    Email: "nasry.zaki@9yards.ae",
    EmailTo: "mailto:nasry.zaki@9yards.ae",
  },
  {
    Src: "/assets/images/contact-us/HadhiaShaju.jpeg",
    Name: "Hadhia Shaju",
    Position: "Marketing & Media Enquiries - Digital Marketing Specialist",
    Mobile: "+971 2 304 3322 / +971 50 686 3137",
    Email: "hadhia.shaju@nirvanatls.com",
    EmailTo: "mailto:hadhia.shaju@nirvanatls.com",
  },
  {
    Src: "/assets/images/contact-us/HeshamAlbahri.jpeg",
    Name: "Hesham Albahri",
    Position: "Member of Organizing Committee - US Market Executive Manager ",
    Mobile: "+18185817431",
    Email: "hesham@leadingeventsusa.com",
    EmailTo: "mhesham@leadingeventsusa.com",
  },
  {
    Src: "/assets/images/contact-us/TheanleouaChu.jpeg",
    Name: "Theanleoua Chu",
    Position: "Sales & Marketing Executive",
    Mobile: "+971 2 304 3333 / +971 503833859",
    Email: "theanleoua.chu@nirvanatls.com",
    EmailTo: "mailto:theanleoua.chu@nirvanatls.com",
  },
];

const InnovationTeamSection = () => {
  return (
    <Container>
      <Box sx={{ margin: "80px 0 -30px" }}>
        <SectionTitle>{sectionTitle.Title}</SectionTitle>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{
          textAlign: "center",
          placeItems: "start",
          marginTop: "40px",
          alignItems: "stretch",
        }}
      >
        {data.map(({ Src, Name, Position, Mobile, Email, EmailTo }) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={Name}>
              <RectangularInfoImage
                imageSrc={Src}
                title={Position}
                name={Name}
                tel={Mobile}
                email={Email}
                emailTo={EmailTo}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default InnovationTeamSection;
