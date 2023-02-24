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
    src: "/assets/images/board/Ahmed_Samir_Elbermbali.jpg",
    name: "Ahmed Samir Elbermbali",
    title: "",
    company: "",
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
