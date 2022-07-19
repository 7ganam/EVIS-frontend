import { Box } from "@mui/material";
import EvHeader from "components/header/EvHeader";
import EvNavbar from "components/navbar/EvNavbar";
import Sticky from "components/sticky/Sticky";
import EvTopbar from "components/topbar/EvTopbar";
import Head from "next/head";
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

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <EvHeader isFixed={isFixed} searchBoxType="type2" />

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
          background: "#fff",
        }}
      >
        {children}
      </Box>
    </Fragment>
  );
};

export default EvLayout;