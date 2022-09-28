import React from "react";
import EvLayout from "src/components/layouts/EvLayout";
import { Container, Grid, Box } from "@mui/material";
import api from "src/utils/api/grocery3-shop";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import NewsCard from "src/components/EvComponents/NewsCard";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";
import { H3 } from "src/components/EvComponents/Typography";
import EvisInNewsSection from "@/components/EvSections/new-page-sections/EvisInNewsSection";
import { H2 } from "@/components/Typography";

const evisInNewsData = [
  {
    title: "Sky News Morning Show coverage",
    link: "https://youtu.be/b1HNKh4eU18",
    img: "/assets/images/news-page/inNews/1.jpg",
  },
  {
    title: `AD TV -Oloom Al Dar`,
    link: "https://www.youtube.com/watch?v=thzikNydA80&ab_channel=Oloomaldaar%D8%B9%D9%84%D9%88%D9%85%D8%A7%D9%84%D8%AF%D8%A7%D8%B1",
    img: "/assets/images/news-page/inNews/2.jpg",
  },
  {
    title: `Dubai TV`,
    link: "https://www.youtube.com/watch?v=bxKhcfhiLXo&ab_channel=DubaiTVI%D8%AA%D9%84%D9%81%D8%B2%D9%8A%D9%88%D9%86%D8%AF%D8%A8%D9%8A",
    img: "/assets/images/news-page/inNews/3.jpg",
  },
  {
    title: `ERAM Channel`,
    link: "https://youtu.be/KB9GENQflOo",
    img: "/assets/images/news-page/inNews/4.jpg",
  },
  {
    title: `Sky News –Our Planet `,
    link: "https://www.skynewsarabia.com/program/kawkabona-%D9%83%D9%88%D9%83%D8%A8%D9%86%D8%A7",
    img: "/assets/images/news-page/inNews/5.jpg",
  },
];
const newsList = [
  {
    img: "/assets/images/news-page/articles/1.jpeg",
    content: `Abu Dhabi, May 2022: The Electric Vehicle Innovation Summit (EVIS), taking place 23-25 May in Abu Dhabi, will feature many important discussions around how cities can become more sustainable by lowering their transport emissions and build the right infrastructure and policy framework for a sustainable and just mobility sector.

According to Eng. Naser Al Bahri, EVIS Director “The Middle East region is known for its hydrocarbon exports. As the world transitions from fossil fuel sources to clean and renewable energy sources, oil-dependent economies find themselves in a crunch and in urgent need to take urgent action to diversify their economy and mitigate the risk of climate change.

Some countries across the region have already taken some good steps towards this transition by investing in and developing mega renewable energy projects. Saudi Arabia and the United Arab Emirates (UAE) have been in the forefront of these efforts not just regionally, but also globally. The UAE and KSA are home of the largest renewable energy projects worldwide.
يكشف EVIS  السياسة والبنية التحتية والسلوك نحو تحول نموذج التنقل في مدن الشرق الأوسط

The transport sector is one of the most polluting and Energy consuming sectors globally and across the Middle East nations with more than 25% of their carbon emissions and more than 27% of their energy consumption. Accordingly, the need to decarbonize and electrify the transport sector in the MENA region is one of the most important milestones for governments to prioritize, especially as we already have alternative modes that are more environmentally friendly and economical.

The Middle East nations have already taken several steps to decarbonize their economies through investing in renewable energy, low-carbon hydrogen and clean transportation and also by providing policy incentives for the end-users and the investors to venture into low carbon industries. There are many different ways to reduce the emissions from the transport sector and electrification is just one of them. Other effective ways include the introduction of fuel efficiency standards, upgrading the public transport infrastructure, supporting and incentivizing shared and active mobility modes and more.

Concluded Eng. Naser Al Bahri, EVIS Director: “By having the right policies, infrastructure in place along with the conscious consumer, the Middle East can lead the way in the transition of the transport sector to a more sustainable, just and clean sector.”

Masdar, a global leader in renewable energy, is applying these principles of sustainable transport and infrastructure development in its projects around the world. In the United Kingdom, Masdar was the first commercial investor in the UK government’s £400 million Charging Infrastructure Investment Fund (CIIF), which aims to more than double the country’s electric vehicle charging infrastructure with 3,000 new rapid charge points by 2024 as part of its ambition to end the sale of petrol and diesel vehicles by 2040.

In Abu Dhabi, Masdar City, one of the world’s most sustainable urban communities, bases its transportation strategy on a hierarchy that puts pedestrians first and emphasizes sustainable, public transportation, which is supplemented with clean point-to-point services, including personal vehicles.

“At Masdar City, we actively demonstrate how pioneering transport offerings can provide real-world solutions to decarbonizing the sector. As part of our transportation strategy, since its inception, Masdar City has introduced several technologies that support its mission, both as commercial and pilot projects. These include the introduction of MENA’s first autonomous shuttle service, NAVYA; the first electric Eco-Bus in the region; and the world’s first Personal Rapid Transport System (PRT), which has carried more than two million passengers to date. An event like EVIS will provide an ideal platform to showcase solutions to make the transportation sector more energy-efficient and deliver a more sustainable future”, said Stephen Severance, Head of Program Management and Marketing at Masdar City.

EVIS will be featuring expert speakers from across the world to speak about how cities can build the right framework for a sustainable and just transport sector and feature some of the world leading cities and case studies. Join EVIS to learn more and connect with the world leaders and industry professionals in the EV sector: https://evinnovationsummit.com`,
    buttonText: "READ MORE",
    buttonLink:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    title:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    date: "2022-05-15",
  },
  {
    img: "/assets/images/news-page/articles/2.jpg",
    buttonText: "READ MORE",
    buttonLink: "Time for the Middle East to go electric%3F How and why%3F",
    title: "Time for the Middle East to go electric? How and why?",
    content: `Abu Dhabi, April 2022: The Middle East electric vehicle market is gathering for the first time in Abu Dhabi on 23-25 May at the first edition of the Electric Vehicle Innovation Summit (EVIS). EVIS is a platform that aims to facilitate discussions and mobilize actions to accelerate the MENA region’s transition to sustainable mobility. 

The Middle East market represents a very fertile and versatile environment for investments related to transport electrification because of the large customer base and governments support. However, different EV adoption models should be considered for each country according to its situation and consumers’ characteristics. For instance, the purchasing power of customers in Egypt and the UAE is different. In Egypt and on the contrary of the UAE, electric two and three-wheelers sales are anticipated to outperform electric car sales due to the lower average purchasing power in Egypt. In light of this, holding the 2021 and 2022 United Nations climate change conferences in Egypt and the UAE (CO27 & COP28 respectively) highlights the clear stance of the Middle East towards combating climate changes and accelerating EV adoption.

The UAE already has many success stories of private sector leadership putting huge efforts and investments in accelerating the transition to sustainable mobility. Audi Abu Dhabi dealership, Ali & Sons Motors and M Glory are two excellent examples.

Audi Abu Dhabi launched its first EV model under the e-tron umbrella nearly two years ago and the customer response since has been very encouraging. Mark Austin, Audi Abu Dhabi General Manager, said, “Audi is one of the leading premium auto brands to have introduced electric vehicles in the capital. Sustainability and electrification are two key pillars at Audi, and they are being incorporated into every aspect of the business. Our EV range has grown to include four models, with two of our latest electric spearheads on display at EVIS.
“We conducted a survey last year to explore consumer sentiment and concerns towards EV adoption in the UAE. 40% of those surveyed expressed interest in purchasing an EV, with environmental concern being the top motivator (36%). This was closely followed by value for money, with 29% believing EVs offer better value in the long run, compared to petrol/diesel cars. These indicators display a fundamental shift in consumer attitude, which will ultimately be beneficial for the consumer and the country,” added Austin.
M Glory has introduced Al Damani DMV300 as its first fully electric car that can drive you 405 km in 30 minutes charge. Company officials added that the group aims to benefit from the Fourth Industrial Revolution and sustainability by employing future technologies and robotics in the manufacture of EVs. “Today we are inaugurating an Emirati industrial facility with international specifications where we will manufacture eco-friendly electric cars, contributing to global efforts to cut carbon emissions and support sustainable development,” said by Dr Majida Al Azazi, Chairman of the Board of Directors of M Glory Holding Group. She explained that the new M Glory facility will have two production cycles each year. It will make use of Fourth Industrial Revolution techniques. The corporation’s new facility will be an extension to their portfolio, which includes robotics engineering and artificial intelligence as well as sustainable real estate.

“EVIS is a platform that will bring together all the different EV stakeholders from across the MENA region and the globe including though leaders, government officials, policymakers, private sector executives, NGOs, researchers and more in one place to discuss the status, outlook, challenges, and opportunities in the new energy vehicles market globally and across the MENA region. EVIS will include many industry, technology, and academic sessions, feature the leading innovation in the new energy vehicle market and provide an excellent platform for networking and business development” – Eng. Naser Al Bahri, Director of EVIS.

Driven by the fact that transportation accounts for nearly 15% of the worldwide greenhouse gas (GHG) emissions, transport electrification is considered a direct and effective way of reducing GHG emissions and combating climate change. Transport electrification refers to replacing vehicles’ conventional engines that rely on oil or gas with electric engines that are powered by rechargeable batteries. The concept is not limited to passenger cars; it covers all maritime, land, and air vehicles. In 2021, the global sales of electric vehicles (EVs) tripled and reached 6.6 million vehicles: exhibiting exponential growth. Moreover, the number of electric buses and trucks registrations increased by more than 10% accordingly to the International Energy Agency (IEA). Thus, transport electrification is no longer a futuristic technology; it is a mature technology that governments must pave the way into the market and incentivize its adoption.

In that context, China is the fastest in adopting transport electrification, followed by Europe and the United States. The current Ukrainian situation emphasizes the utmost urgency of the global adoption of transport electrification because oil is a major political card that shapes the whole conflict. Therefore, Middle Eastern countries must expedite their plans in adopting such technologies and provide the necessary infrastructure for their growth. Several measures can accelerate EV adoption in the Middle East. Here, we provide some useful insights on these measures:

    Policies and Regulations:
    Setting and communicating a clear and strict roadmap of the EV evolution over the next 10 to 20 years; Saudi Arabia announced during the Middle East Green Initiative last year that 30% of vehicles have to be electric by 2030 in the city of Riyadh and to reach 100% by 2060.
        Attracting EV manufacturers to the Middle East through direct investments or taxes reductions; Egypt’s government has already announced the establishment of

a joint venture with the private sector to locally manufacture affordable electric vehicles as well as charging stations, and Saudi Arabia is already one of the major investors in the EV manufacturer Lucid Motors and aims to build the first EV manufacturing plant in Saudi Arabia. The UAE just had its first EV manufacturing plant announced a few days ago by M Glory; a leading local company.

    Incentivizing the adoption of EVs through fiscal incentives, free or discount public charging, free public charging for EVs, and other encouragements. Dubai has specified that 5% of the public parking spaces are dedicated to EVs, and the Egyptian government is committed to offering an EGP 50,000 cost reduction for the first 100,000 locally assembled EVs.
    Impose new regulations that promote EV adoption and restrictions that inhibit gasoline vehicles’ growth; Egypt is promoting EV adoption by demanding public sector companies to supersede 5% of their fleet yearly with EVs.

    Infrastructure: Establishing the infrastructure necessary for EV operations as a connected electric grid with sufficient public or private charging stations; the United Arab Emirates (UAE) continues to extend its public charging network with more than 450 public charging stations in Dubai along as a part of its “EV Green Charger” initiative launched by the Dubai  Electricity and Water Authority (DEWA).

·         Public Awareness:

    Increasing consumer awareness about the importance of transport electrification and its impacts on climate change
    Participating in international initiatives that support transport electrification; Egypt and the UAE are hosting the next two rounds of the United Nations climate change         conference COP27 and COP28, respectively.
    Educating the next generation on the advantages of transport electrification as the next generation will be the primary users of EVs.

Join us at EVIS 2022 in Abu Dhabi to learn about the latest development in the EV sector regionally and globally, connect with policymakers and private sectors players and promote your company products and solutions.

About Nirvana Holding

Established in January 2021 as part of the development in travel and tourism including all related services from travel and tourism until Events and project management, nationally and internationally. Nirvana Holding consists of 4 entities: Nirvana Travel & Tourism, Nirvana Over the World, Nirvana Tours & Logistics services, and Nirvana Global Travel
`,
    date: "2022-08-08",
  },
  {
    img: "/assets/images/news-page/articles/3.jpg",
    content: (
      <a
        href="https://www.eyeofriyadh.com/news/details/announcing-the-first-edition-of-electric-vehicle-innovation-summit-in-abu-dhabi"
        target="_blank"
        rel="noreferrer"
      >
        https://www.eyeofriyadh.com/news/details/announcing-the-first-edition-of-electric-vehicle-innovation-summit-in-abu-dhabi
      </a>
    ),
    buttonText: "READ MORE",
    buttonLink:
      "Eye of Dubai: Announcing the First Edition of Electric Vehicle Innovation Summit in Abu Dhabi",
    title:
      "Eye of Dubai: Announcing the First Edition of Electric Vehicle Innovation Summit in Abu Dhabi",
    date: "2022-05-15",
  },
  {
    img: "/assets/images/news-page/articles/4.jpg",
    content: (
      <a
        href="https://www.khaleejtimes.com/auto/uae-audi-mercedes-tesla-gmc-to-feature-in-menas-first-ever-electric-vehicle-exhibition"
        target="_blank"
        rel="noreferrer"
      >
        https://www.khaleejtimes.com/auto/uae-audi-mercedes-tesla-gmc-to-feature-in-menas-first-ever-electric-vehicle-exhibition
      </a>
    ),
    buttonText: "READ MORE",
    buttonLink:
      "Khaleej Times: Audi, Mercedes, Tesla, GMC to feature in Mena's first-ever electric vehicle exhibition",
    title:
      "Khaleej Times: Audi, Mercedes, Tesla, GMC to feature in Mena's first-ever electric vehicle exhibition",
    date: "2022-05-15",
  },
  {
    img: "/assets/images/news-page/articles/5.JPG",
    content: (
      <a
        href="https://www.zawya.com/en/press-release/events-and-conferences/announcing-the-first-edition-of-evis-in-abu-dhabi-yrygyax7"
        target="_blank"
        rel="noreferrer"
      >
        https://www.zawya.com/en/press-release/events-and-conferences/announcing-the-first-edition-of-evis-in-abu-dhabi-yrygyax7
      </a>
    ),
    buttonText: "READ MORE",
    buttonLink:
      "The National : Abu Dhabi to host MENA's first electric vehicle summit in May",
    title:
      "The National : Abu Dhabi to host MENA's first electric vehicle summit in May",
    date: "2022-05-15",
  },
];
const EvHome = () => {
  const theme = useTheme();

  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <EvisInNewsSection data={evisInNewsData}></EvisInNewsSection>
      <Box mt={"30px"}>
        <SectionTitle>Articles</SectionTitle>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: "30px" }}>
          <H2>2022</H2>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "-13px 18px 17px",
          }}
        >
          <Divider
            sx={{
              border: "1px solid #bbc4c7",
              margin: "0",
              width: "47%",
              height: "1px",
            }}
          />
          <Divider
            sx={{
              border: "1px solid #55b4d4",
              margin: "0",
              width: "6%",
              height: "2px",
              backgroundColor: theme.palette.secondary.main,
            }}
          />
          <Divider
            sx={{
              border: "1px solid #bbc4c7",
              margin: "0",
              width: "47%",
              height: "2px",
            }}
          />
        </Box>
      </Box>

      <Container
        sx={{
          mb: 6,
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            mb: 6,
          }}
        >
          {newsList.map(({ img, title, date, buttonLink }) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={title}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <NewsCard
                  srcImage={img}
                  header={title}
                  date={date}
                  directory={buttonLink}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* <Videos videosList={videosList} />
        <ExhibitionFeatures data={newsList} />
        <Press data={news} />
        <Press2 data={news2} /> */}
        {/* <Footer footer1={footer1} footer2={footer2} /> */}
        <SponsorsGrid />
        <PartnersGrid />
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

export default EvHome;
