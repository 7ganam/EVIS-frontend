import { Box } from "@mui/material";
import EvHeader from "src/components/header/EvHeader";
import EvNavbar from "src/components/navbar/EvNavbar";
import Sticky from "src/components/sticky/Sticky";
import EvTopbar from "src/components/topbar/EvTopbar";
import Head from "next/head";
import EvPageFooter from "src/components/Ev-page-footer/EvPageFooter";

import React, { Fragment, useCallback, useState } from "react";

const EvLayout = (props) => {
  // props
  const { children, showNavbar = true, title = "Main" } = props; // app states

  const [isFixed, setIsFixed] = useState(true);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <EvTopbar />
      {/* <EvHeader isFixed={isFixed} searchBoxType="type2" /> */}

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Box
          zIndex={1}
          position="relative"
          className="section-after-sticky"
          sx={{
            display: showNavbar ? "block" : "none",
          }}
        >
          <EvNavbar isFixed={isFixed} />
        </Box>
      </Sticky>

      <Box
        position="relative"
        sx={{
          background: "white",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
      <EvPageFooter />
    </Fragment>
  );
};

export default EvLayout;
