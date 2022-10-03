import { Container } from "@mui/material";

import EvLayout from "src/components/layouts/EvLayout";
import { Grid } from "@mui/material";
import PageHeader from "src/components/EvComponents/PageHeader";
import TestimonialCard from "src/components/EvComponents/TestimonialCard";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";
// ======================================================
// ======================================================
const pageHeaderData = {
  text: "Testimonials",
  //   buttonText: "Save The Date",
  //   buttonLink: "/",
  image: "/assets/images/ev-home/carousel2.jpeg",
};
// const testimonial = [

//   {
//     text: "Our objectives in participating in EVIS is to accelerate energy transition also in the Middle East and I sincerely believe, and it is the British Volt belief, that Abu Dhabi and UAE can lead this energy transition in the entire region from an era of internal combustion engine towards an era of electrification. We need to promote electrification; we need to teach each other and learn from each other - and what other platform could be better than EVIS, as we're seeing here today in Abu Dhabi. Mercedes can help British Volt, Ritual can help Audi, Hyundai can help the end customer. It is together that we can transition towards an era of electrification. Being here at the inaugural EVIS show in Abu Dhabi, it allows British Volt to be able to convey what it stands for, it allows British volt to hold that British flag held high, create a global footprint together with a very, very close friend and ally such as the United Arab Emirates and Abu Dhabi.",
//     name: "Orral Nadjari",
//     title: " Founder & CEO",
//     company: "Britishvolt",
//     videoId: "EfPDLFOJBkQ",
//     pos: "left",
//   },
// ];

const TestimonialsPage = (props) => {
  let {
    testimonialsPageData,
    testimonial,
  } = useMemo(() => {
    if (!props?.testimonialsPage) {
      return {};
    }
    let testimonialsPageData = JSON.parse(props.testimonialsPage).data ?? null;

    const testimonial = testimonialsPageData?.map((attributes) => {
      return {
        // id: attributes?.id,
        text: attributes?.attributes?.quote,
        name: attributes?.attributes?.name,
        title: attributes?.attributes?.position,
        // company: attributes?.attributes?.position,
        videoId: attributes?.attributes?.video_link?.youtube_link,
        pos: (attributes?.id) % 2 == 0 ? "right" : "left",
        img: attributes?.attributes?.image?.data?.attributes?.url,
      }
    })

    return {
      testimonialsPageData,
      testimonial,
    };
  }, [props?.testimonialsPage]);

  console.log("Testimonials: ", testimonialsPageData)
  console.log("one: ", testimonial)


  return (
    <EvLayout showNavbar={true}>
      <PageHeader
        text={pageHeaderData.text}
        buttonText={pageHeaderData.buttonText}
        buttonLink={pageHeaderData.buttonLink}
        image={pageHeaderData.image}
      ></PageHeader>
      <Container
        sx={{
          my: 6,
        }}
      >
        <Grid container spacing={"50px"}>
          {testimonial.map((entry, index) => {
            return (
              <Grid item key={index}>
                <TestimonialCard data={entry} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps(context) {
  let testimonialsPage = null;
  let testimonialsPageError = null;

  try {
    testimonialsPage = await api.getTestimonials();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    testimonialsPageError = dev_error;
  }

  if (!testimonialsPage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      testimonialsPage: JSON.stringify(testimonialsPage),
      testimonialsPageError: JSON.stringify(testimonialsPageError),
    },
    revalidate: 10, // In seconds
  };
}

export default TestimonialsPage;
