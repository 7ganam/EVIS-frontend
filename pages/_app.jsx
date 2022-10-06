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
import OpenGraphTags from "src/utils/OpenGraphTags";
import "../src/fake-db";
//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done()); // small change
import EvNavbar from "../src/components/navbar/EvNavbar";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";

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
    src: "/assets/images/board/dr elias.png",
    name: "Dr. Elias Boutros Sayah",
    title: "President and Founder",
    company: "Sayah Engineering MENA",
    about: `President and Founder at Sayah Engineering MENA,
GEFCO Trading &amp; LIWA Petroleum Technology

Senior Vice President
AmCham Abu Dhabi
International director for Region 10
American Society of Civil Engineers ASCE
https://www.linkedin.com/in/eliassayah`,
  },
  {
    src: "/assets/images/board/prof nizar al holou.png",
    name: "Prof. Nizar Al-Holou",
    title: "Professor Emeritus",
    company: "University of Detroit Mercy",
    about: `Dr. Nizar Al-Holou is a Professor Emeritus of Electrical &amp; Computer Engineering
&amp; Computer Science at the University of Detroit Mercy since 2019. He was a
Professor for 26 years. He served as chair of the ECE department for 14 years.
He has been an active member of numerous professional engineering societies
such as the Institute of Electrical and Electronic Engineer IEEE, IEEE-Computer
Society, Intelligent Transportation Systems (ITS), and the American Society for
Engineering Education (ASEE).`,
  },
  {
    src: "/assets/images/board/eng. kamal malas.jpg",
    name: "Dr. Eng. Kamal Adnan Malas",
    title: `Kamal Malas &amp; Associates
Prof. Eng., PhD (disputes),
BA, MS in Law, MCIArb`,
    company: "",
    about: `Kamal Malas &amp; Associates
Prof. Eng., PhD (disputes),
BA, MS in Law, MCIArb
www.kamalmalas.com
Mob. 00971505971141`,
  },
  {
    src: "/assets/images/board/prof sabouni.jpg",
    name: "Prof. Abdul Rahim Sabouni",
    title: "PhD (Cornell), MSc(GWU), BSc(Honor) PEng, FASCE, FACI,FCIOB,IAUP",
    company: "",
    about: `Professor Abdul Rahim Sabouni is the President &amp; CEO of the Emirates College of
Technology ECT, and the founding CEO of Span M Consulting. He holds a PhD degree from
Cornell university and a Master’s degree from George Washington University in Structural
Engineering. He has more than 30 years of academic and professional experience in the US,
Canada, and the Middle East. He assumed teaching, research, and/or adjunct faculty
positions at several universities including Damascus University, UAE University, Ryerson
University, Western University, and Carleton University. Dr. Sabouni is the past president of
Civil Net International, Canada. He assumed the posts of the Building Design Expert, and
Technical and Projects Adviser in Abu Dhabi Municipality. He is a registered Professional
Engineer in Ontario, Fellow of the American Concrete Institute and the founding president of
the ACI-UAE Chapter, Fellow of the American Society of Civil Engineers and President of the
ASCE-UAE Section, Fellow and chartered construction manager CIOB, UK, Director of the
International Federation of High Rise StructuresIFHSUAE. He is the first recipient of the
George Winter Award from Cornell University, and the founding editor of a refereed scientific
engineering Journal in Abu Dhabi.`,
  },
  {
    src: "/assets/images/board/salim hariri.jpg",
    name: "Salim hariri",
    title: "Co-Director",
    company: `NSF Center for Cloud and Autonomic Computing The University of Arizona`,
    about: `Salim Hariri is a Professor in the Department of Electrical and Computer Engineering at The University of Arizona.
He received his Ph.D. in computer engineering from University of Southern California in 1986, an MSc from The
Ohio State University in 1982 and Electronic Engineering from Damascus University, Syria in 1977.
He is the co-director of NSF Center for Cloud and Autonomic Computing and he is the Editor-In-Chief for the
CLUSTER COMPUTING JOURNAL (Springer, http://clus.edmgr.com). He is the founder of the IEEE/ACM
Symposium on High Performance Distributed Computing (HPDC) started in 1990, http://www.hpdc.org.
Research interests include Autonomic Computing, Self-protection of networks and computers, Cybersecurity
modeling and analysis, resilient cyber resources and services, resilient DDDAS services, and high performance
distributed systems. Dr. Hariri has co-authored five books in the area of autonomic computing and parallel and
distributed systems. At the University of Arizona, he lead managed more than 10 million dollars of research
projects funded by the National Science Foundation (NSF), Department of Energy, Deparmtne of Defense and
industry.
Dr. Hariri is a founder of AVIRTEK, a startup Cybersecurity company from the NSF CAC center at UA. AVIRTEK
received more than 7 million dollars in DoD funding to develop innovative Autonomic Cyber Security platform that
provides self-protection with little involvement of users or system administrators.`,
  },
  {
    src: "/assets/images/board/dr_mohd_kafafy.jpg",
    name: "Dr. Mohamed G. Kafafy, PhD; DBA",
    title: "President",
    company: "World Chairman",
    about: `Dr. Mohamed G. Kafafy, PhD; DBA

World Chairman | President
World Green Economy Council (WGECO)
HR Management Institute (HRMI)
Global Quality Council (GQCO)

Emails: President@WGECO.org / President@HRMI.org / Info@GQCO.org
Phone: +202-44822119 - GSM: +2-01001612017 (WhastApp)
Official Sites:  www.HRMI.org / www.WGECO.org / www.GQCO.org`,
  },
  {
    src: "/assets/images/board/dr_ rami_sabouni.jpg",
    name: "Dr. Rami Sabouni",
    title: `Adjunct Professor`,
    company: "Carleton University, Ottawa, Canada",
    about: `Dr. Rami Sabouni is Adjunct Professor at Carleton University, Ottawa, Canada. He holds a PhD degree and
Master of Science degree from Carleton University in Systems and Computer Engineering and Master of
Engineering degree from University of Detroit Mercy in Electrical and Computer Engineering. He has
more than 10 years of academic and professional experience in the US, Canada, and the Middle East. He
assumed teaching and research positions at several universities including UAE University, University of
Detroit Mercy and Carleton University.
Recent relevant publications.
R. Sabouni and R. H. M. Hafez, “Performance of DSRC for V2V communications in urban and highway
environments”, Canadian Conference on Electrical and Computer Engineering (CCECE, 2012), Montreal,
Quebec, Canada, May, 2012.
R. Sabouni, N. Al-Holou, U. Mohammad, K. Albarazi, S. Fallouh, M. Abdul-Hak, and F. Saadeh, “New
Approach To Enhance And Evaluate The Performance Of Vehicle-Infrastructure Integration And Its
Communication Systems”, Report No: MIOH UTC TS15p1-2 2010-Final, September 2010.
Rami Sabouni, Evaluation of DSRC for V2V Communications, Master of Applied Science in Systems and
Computer Engineering, Carleton University, Canada, MSc Thesis, April 2011.
Rami Sabouni, Evaluation of DSRC for V2V Communications, Master of Engineering in Computer
Engineering, University of Detroit Mercy, MSc Thesis, USA, August 2008.`,
  },
  {
    src: "/assets/images/board/dr rawa adla.jpg",
    name: "Dr. Rawa Adla",
    title: "Assistant Professor",
    company: `Department of Electrical and Computer
Engineering at Florida Polytechnic University`,
    about: `Dr. Rawa Adla is an assistant professor at the Department of Electrical and Computer
Engineering at Florida Polytechnic University, FL, USA. Previously she held multi
positions at different academic and industrial institutes. She was an assistant professor
at the University of Arizona, Tucson, AZ. Also, she was a senior research engineer at
Ford Motor Company / Collision Avoidance Metrics Partnership (CAMP). She was the
technical lead manager for projects related to connected vehicles V2X and autonomous
driving. Dr. Adla has more than ten years of teaching and research experience. Dr. Adla
earned her doctoral degree in Electrical and Computer Engineering from the University
of Detroit Mercy, MI, and her Master’s degree in Computer Science from the University
of Michigan. Her B.S in Electrical and Computer Engineering from the University of
Aleppo. Dr. Adla research interest lies in the field of control systems and theories,
wireless communication, automotive safety, connected vehicles and autonomous
driving, and electric vehicles. More specifically, her research spans several areas and
aims to be as interdisciplinary as possible such as, data-fusion / target tracking problem,
real-time signal filtering and prediction. Dr. Adla has published several referee papers
and co-authored multiple high-quality publications. She is a senior member of IEEE,
ACM, SWE, and the Eta Kappa Nu (HKN) (Electrical Engineering Honor Society).`,
  },
];

const App = ({ Component, pageProps }) => {

  let {
    navbarComponentData,
    headlineData,
    leftLogoData,
    rightLogoData,
    navbarData,

  } = useMemo(() => {
    if (!pageProps?.navbarComponent) {
      return {};
    }
    let navbarComponentData = JSON.parse(pageProps.navbarComponent).data?.attributes ?? null;

    const headlineData = navbarComponentData?.Headline;
    const leftLogoData = navbarComponentData?.LeftLogo?.data?.attributes?.url;
    const rightLogoData = navbarComponentData?.RightLogo?.data?.attributes?.url;

    const navbarData = {
      headline: headlineData,
      leftLogo: leftLogoData,
      rightLogo: rightLogoData,
    }


    return {
      navbarComponentData,
      headlineData,
      leftLogoData,
      rightLogoData,
      navbarData,
    };
  }, [pageProps?.navbarComponent]);

  App.navbarData = navbarData;
  // console.log("navbarComponentData: ", navbarComponentData);
  // console.log("headline: ", headlineData);
  // console.log("leftLogoData: ", leftLogoData);
  // console.log("rightLogoData: ", rightLogoData);


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

  const [global, setGolobal] = useState({ advisoryBoard, navbarData });

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <GoogleAnalytics />
        <OpenGraphTags />
      </Head>

      <SettingsProvider>
        <AppProvider>
          <MuiTheme>
            {/* <RTL>{getLayout(<Component {...pageProps} AOS />)}</RTL> */}
            {getLayout(<Component {...pageProps} AOS global={global} />)}
            <EvNavbar navData={navbarData}></EvNavbar>
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
App.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  // console.log("hereeee")
  const test = await getStaticProps();
  // console.log("test is: ", test)
  const appProps = test;
  // const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};



export async function getStaticProps(context) {
  let navbarComponent = null;
  let navbarComponentError = null;

  try {
    navbarComponent = await api.getNavbar();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    navbarComponentError = dev_error;
  }

  if (!navbarComponent) {
    return {
      notFound: true,
    };
  }

  return {
    pageProps: {
      navbarComponent: JSON.stringify(navbarComponent),
      navbarComponentError: JSON.stringify(navbarComponentError),
    },
    revalidate: 10, // In seconds
  };
}


export default App;
