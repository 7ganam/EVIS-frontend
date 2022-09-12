import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";


import TestimonialCard from "../EvComponents/TestimonialCard";

const testimonial = [
  {
    text: "The objectives for CHARIN as a global association to be at EVIS is to understand the market and to get in contact with the political stakeholders in the region, and meet the industry representatives, and figure out what is the challenge and requirements of charging and how we can support that with our global knowledge footprint of technology. Our booth here at EVIS is the central contact point for joining new members, to answer any questions, and to broaden our portfolio of membership.",
    name: "Claas Bracklo",
    title: "Chairman",
    company: "CharIN",
    videoId: "H46B4X57JiM",
    pos: "left",
  },
  {
    text: "It’s great to be here and see the excitement, to see all the new vehicles that are coming including some made right here in the UAE. At Masdar, we’ve been pioneering in terms of transportation since 2008. We’ve had the first electric vehicles in the country, we’ve had PRT, we’ve had Tesla, we’ve had NAVIA, and it’s great to see the new service offerings that are coming out in this region. We’ve done a great job at bringing in renewable energy, we’ve done a good job of bringing in sustainability and really implementing Estidama standards, and now its time to take on surface transportation. And this Electric Vehicle Innovation Summit is all about that – how do we take the carbon out of surface transportation? So many examples of what’s going on here – from the manufacturers to the charging infrastructure, to the regulatory environment, and that’s why Masdar is excited to be here as the Sustainability Partner. ",
    name: "Stephen Severance",
    title: "Head of Programme Management and Investments ",
    company: "Masdar City ",
    videoId: "Rk6kFel9nEw",
    pos: "right",
  },
  {
    text: "As the chairwoman and the founder of M glory and Al Damani manufacturing company –the first EV car factory to be established in the MENA, we tried to introduce ourselves to the local market and to tell them we are capable to produce the EV car. and we are starting to compete with other OEMs to produce EVs… EVIS is actually the main important exhibition that supports sustainable energy and sustainable environment to reduce the emissions of co2. Here, we managed to gather the private sector along with the governmental sector to take certain action that will improve our environment and our future. I’m so glad to be part of this great exhibition and we love we are loving to be a part of this transformed idea of the future - thanks a lot for the organizer who is having that idea and really make it so successful here in ADNEC in Abu Dhabi.",
    name: "Dr. Majida Alazazi",
    title: "Chairwoman ",
    company: "M Glory",
    videoId: "2lQwm_Dx2p0",
    pos: "left",
  },
  {
    text: "EVIS is the first time that the whole EV ecosystem is getting together in the Middle East. It’s fantastic for bp to be part of this event because it helps us get to know some of the movers and the shakers who are already starting to make a difference in the middle east with respect to growing and building the e-mobility ecosystem here. So, for MENA, what we see in the other regions is that until and unless the ecosystem comes together and figure out how to collaborate, it is very difficult for any one company, or any one industry to really develop the e-mobility ecosystem. So, coming together in events like this is very important because it encourages us to work together.",
    name: "Sophia Nadur",
    title: "Managing Partner",
    company: "bp Ventures",
    videoId: "iQOa5j1YL-Y",
    pos: "right",
  },
  {
    text: "Our objectives in participating in EVIS is to accelerate energy transition also in the Middle East and I sincerely believe, and it is the British Volt belief, that Abu Dhabi and UAE can lead this energy transition in the entire region from an era of internal combustion engine towards an era of electrification. We need to promote electrification; we need to teach each other and learn from each other - and what other platform could be better than EVIS, as we're seeing here today in Abu Dhabi. Mercedes can help British Volt, Ritual can help Audi, Hyundai can help the end customer. It is together that we can transition towards an era of electrification. Being here at the inaugural EVIS show in Abu Dhabi, it allows British Volt to be able to convey what it stands for, it allows British volt to hold that British flag held high, create a global footprint together with a very, very close friend and ally such as the United Arab Emirates and Abu Dhabi.",
    name: "Orral Nadjari",
    title: " Founder & CEO",
    company: "Britishvolt",
    videoId: "EfPDLFOJBkQ",
    pos: "left",
  },
  {
    text: "We wanted to create awareness of the new technologies and innovations coming along with electric vehicles to Abu Dhabi and the wider region in MENA. And also, we wanted our customers to know how active and proactive we are in preparation for the next chapter of mobility that's along the way. It may take some time for population to uptake because of the infrastructure and all, however, we are on the ball - we want to bring the best services to Abu Dhabi, as all our customers deserve. Participation in this event has multiple benefits for us; one of which is not necessarily the benefit in in terms of dollars and dirhams, it is about contributing to Abu Dhabi's success. This is a regional event that's held in Abu Dhabi, and we are our Abu Dhabi family, and we contribute, we participate, and we do everything we can for it to be successful. And in terms of awareness to our customers, hopefully we have been able to enlighten our customers with all future technologies that are coming up, and that we are here, available for them, to help them, and to create a great customer experience in the future.",
    name: "Irfan Tansel",
    title: " CEO",
    company: "Al Masaood Automobiles",
    videoId: "7YOmZvemr7Q",
    pos: "right",
  },
];

const TestimonialCardSection = () => {
  return (
    <Box>
      <Container mb={6}>
        <SectionTitle> Testimonial Cards</SectionTitle>
        <Grid container>
          {testimonial.map((entry, index) => {
            return (
              <Grid item key={index}>
                <TestimonialCard data={entry} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialCardSection;
