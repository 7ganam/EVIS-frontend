import AOS from "aos";
import "aos/dist/aos.css";
// import RTL from "src/components/RTL";
import { AppProvider } from "src/contexts/AppContext";
import SettingsProvider from "src/contexts/SettingContext";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { Fragment, useEffect } from "react";
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

nProgress.configure({
  showSpinner: false,
});

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
            {getLayout(<Component {...pageProps} AOS />)}
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
