import AOS from "aos";
import "aos/dist/aos.css";
import "gallery_styles.css";
// import RTL from "src/components/RTL";
import { AppProvider } from "src/contexts/AppContext";
import SettingsProvider from "src/contexts/SettingContext";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { Fragment, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import "simplebar/dist/simplebar.min.css";
import MuiTheme from "src/theme/MuiTheme";
import GoogleAnalytics from "src/utils/GoogleAnalytics";
import { analytics } from "src/utils/gtm";
import OpenGraphTags from "src/utils/OpenGraphTags";
import "../src/fake-db";
//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done()); // small change

nProgress.configure({
  showSpinner: false,
});

const advisoryBoard = [
  {
    src: "/assets/images/board/Ahmed_Samir_Elbermbali.png",
    name: "Ahmed Samir Elbermbali",
    title: "Sustainability Market Leader Middle East ",
    company: "Bureau Veritas ",
    about: `Ahmed is a seasoned professional in the sustainability and clean energy industry, currently serving as the Sustainability Market Leader for the Middle East Region at Bureau Veritas. He is a trusted advisor to clients across the region, helping them to establish and achieve their net-zero goals. Ahmed has a deep understanding of the clean energy and sustainable mobility sectors, having served as the Zero-Emission Vehicles (ZEV) Lead at the UN Climate Change High-Level Champions, where he promoted and advocated for the ZEV Declaration launched at COP26 in Glasgow. The Declaration aims to accelerate the transition to ZEVs by 2035 in leading markets and 2040 in emerging markets. He also served as the Managing Director of the MENA Clean Energy Business Council (CEBC), a non-profit organization dedicated to promoting clean energy and clean technologies and solutions in the MENA region. At CEBC he launched several initiatives and working groups and co-authored multiple research pieces and white papers around Climate Finance, Venture Capital in Climate Tech, Electric Mobility, Energy Efficiency and others. 
With an MBA in Sustainable Mobility Management from the Technical University of Berlin, Ahmed's research interests lie at the intersection of policy, technology, and consumer behavior, and how they can be leveraged to accelerate the transition to clean energy and sustainable mobility sectors. He is committed to helping businesses and organizations achieve their sustainability goals, and drive the global transition to a more sustainable future.
`,
  },
  {
    src: "/assets/images/board/Shadie-Bisharat IAB.png",
    name: "Shadie-Bisharat IAB",
    title: "General Manager Kimah and Board Advisor",
    company: "",
    about: `Mr. Bisharat is a leading Executive in the Area of Automotive Technology with more than
15 years of experience in Sales, Management, and Operation in the Automotive
Industry, he has lately led IRP Systems&#39;s Global Sales Activity, with a strong emphasis
on leading and emerging markets and various segments of the electric vehicle world.
Before that Mr. Bisharat held several executive positions in global companies, such as
being the EMEIA President at Ham-let Group, and as a Vice President and Deputy CEO
at Arkal Automotive Group where he was a key influencer in the transformation of the
company to become a strong global player with a significant double-digit growth year-
over-year.
Mr. Bisharat as well is a director of the board at the Israeli Leadership Forum, a holder
of a B.Sc. in Industrial engineering and management from the Technion, a Global
Executive MBA from the IDC Herzliya, and a GCP from the Wharton Business School
Pennsylvania, USA.`,
  },
  {
    src: "/assets/images/board/Nabih Bedewi Photo 1.jpg",
    name: "Dr. Nabih E. Bedewi",
    title: "Managing Director, Global EEE ",
    company: "Global EEE",
    about: `Dr. Nabih E. Bedewi has been serving as Managing Director of Global EEE since 2004. Based in
Washington DC, Global EEE is a nonprofit that organizes student competitions throughout the world
with a focus on Education, Energy, and the Environment. Among the competitions are the United Solar
Challenge (USC), Global Electric Vehicle Challenge (GEVC), Global Hybrid-Electric Challenge (GHEC), and
the Electric Vehicle Grand Prix (EVGP). He also serves on the Executive Board of the International
Solarcar Federation, and continues to lecture at several universities in the USA and the Middle East and
North Africa (MENA) region.
Upon receiving his PhD degree in 1986, Dr. Bedewi worked on several projects at NASA - Goddard Space
Flight Center spanning multiple programs including the Hubble Space Telescope, Space Shuttle missions,
numerous satellites, and space robotics. Over the next decade, Dr. Bedewi moved his research direction
to focus on automotive engineering and alternative energy vehicles. He founded a research center
funded by the US Department of Transportation and the automotive companies, and grew the center to
60 faculty members and research assistants. During that period, Dr. Bedewi also led the GW solar car
team development and raced internationally in the US, Japan, and Australia. In 1996, his team won the
World Solar Rallye in Akita and the Grand Solar Challenge in Noto, Japan.
During his 35 year professional career, Dr. Bedewi published over 200 papers and presented at
numerous conferences. He also co-supervised the research of 38 doctoral students and over 300 master
students. He taught mostly graduate courses in various fields of mechanical engineering and alternative
energy, as well as student design projects emphasizing competitions. Dr. Bedewi holds a PhD (1986), MS
(1984) and BS (1983) in Mechanical Engineering from the University of Maryland, and an MBA (2007)
from California Coast University. Dr. Bedewi is an Egyptian-American and has been living in the
Washington DC area since 1979. He is married with two children.`,
  },
  {
    src: "/assets/images/board/Claas Bracklo - photo.jpg",
    name: "Claas Bracklo",
    title: "Chairman",
    company: "Charging Interface Initiative (CharIN)",
    about: `Claas Bracklo is Chairman of the Charging Interface Initiative (CharIN e. V.), Senior Consultant Electromobility at the VDA and Senior Manager within the power train development at BMW.

Claas Bracklo joined BMW in March 2005 and held various positions in research and development with focus on E/E-architectures, system design, hardware/software components and in car networking. Before his current position in the powertrain development he was in charge of body electronics development. 

He started his career at Mercedes Benz and Daimler in the development of data bus systems. He led several teams and departments in the area of system test, E/E-architecture and ECU-development. 


Claas Bracklo holds a degree in Electrical Engineering from the University of Dortmund.
.`,
  },
  {
    src: "/assets/images/board/Mauricio_Zuazua_62b1a381c9.png",
    name: "Mauricio Zuazua",
    title: "Partner & Board Director",
    company: "Kearney",
    about: `Mauricio Zuazua is a Partner and Board Director of global consultancy Kearney. Mauricio leads Kearney’s Sustainability Platform and the Mobility & Infrastructure Practice in Middle East & Africa.  

Mauricio gathers nearly 25 years of experience across Americas, Asia, Middle East and Africa advising business and country leaders on policy, strategy, design and execution of major urban, transport, mobility and industrial infrastructure to make countries more liveable, sustainable, competitive and connected. He also has extensive experience in corporate strategy, launch and operational improvement. 

He is passionate about technology and how it accelerates the ESG aspirations of companies and governments. He serves on the board of Kearney Venture Capital, and until recently he also served as Lead Partner in the World Economic Forum’s Future of Production and Advanced Manufacturing platform.

Recent publications include How Millennials Will Save the World one Purchase at a Time, How Businesses can Win at Leapfrog, The Sunny Side of the Roboconomy, The Secret Sauce of Competitiveness, and has co-authored the Global Innovation Index with INSEAD. 

Mr. Zuazua is based in the UAE and holds an MBA from Columbia Business School and a BS Hons. Civil Engineering from Monterrey Tech, Mexico.`,
  },
  {
    src: "/assets/images/board/Naser_Abu_Daqqa_PNG_2702f844d8.png",
    name: "Naser Abu Daqqa",
    title: "Managing Director and Founder",
    company: "Power I.D. GmbH & eTree mobility GmbH",
    about: `Managing Director and Founder - Power I.D. GmbH
Managing Director and co-Founder - eTree mobility GmbH
Former Director eDrive - Porsche AG
Former Product Manager eDrive - Mercedes Benz

Demonstrated history in developing more than 10 e-mobility  projects from design up to mass production in the automotive and energy industry.
Accompanied the eMobility development for two and half decades with great convictions and enthusiasm.
Skilled in International Project Management, Automotive Engineering, German, Arabic, Romanian and English. 
M.Sc., Electronics and Communications Engineering Politehnica University Timisoara`,
  },
  {
    src: "/assets/images/board/download.jpeg",
    name: "Angie Farrag-Thibault",
    title: "COP27 Road Transport Lead",
    company: "Climate Champions Team",
    about: ``,
  },
];

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    AOS.init({
      startEvent: "load",
    });
    AOS.refresh(); // Remove the server-side injected CSS.

    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const INTERVAL = 1000;
    const interval = setInterval(() => {
      AOS.refresh(); // Remove the server-side injected CSS.
      console.log("refresh aos");
    }, INTERVAL);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  const [global, setGolobal] = useState({ advisoryBoard });

  useEffect(() => {
    analytics(window, document, "script", "dataLayer", "GTM-P5W4JQ4");
  });
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <GoogleAnalytics /> */}
        <OpenGraphTags />
      </Head>

      <SettingsProvider>
        <AppProvider>
          <MuiTheme>
            {/* <RTL>{getLayout(<Component {...pageProps} AOS />)}</RTL> */}
            {getLayout(<Component {...pageProps} AOS global={global} />)}
          </MuiTheme>
        </AppProvider>
      </SettingsProvider>
    </Fragment>
  );
}; // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default App;
