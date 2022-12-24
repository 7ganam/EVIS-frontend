import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <React.Fragment>
      {/* Google analytics */}
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FLCDXWTVMD"

      ></script> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5PNK6PZR9M"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5PNK6PZR9M');
          `,
        }}
      ></script>

      <Script
        id="my-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P5W4JQ4');</script>
  `,
        }}
      />
    </React.Fragment>
  );
};

export default GoogleAnalytics;
