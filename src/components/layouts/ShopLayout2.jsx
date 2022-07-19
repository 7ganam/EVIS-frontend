import { Box } from "@mui/material";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import Sticky from "components/sticky/Sticky";
import Topbar from "components/topbar/Topbar";
import Head from "next/head";
import React, { Fragment, useCallback, useState } from "react";
/**
 *  Used:
 *  1. gift-shop, grocery1, grocery2, grocery3, healthbeauty-shop, furniture-shop page
 *  2. checkout-alternative page
 */
// =======================================================

// =======================================================
const ShopLayout2 = (props) => {
  // props
  const {
    children,
    showNavbar = true,
    title = "React Next.js Ecommerce Template",
  } = props; // app states

  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Topbar />

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed} searchBoxType="type2" />
      </Sticky>

      <Box
        zIndex={1}
        position="relative"
        className="section-after-sticky"
        sx={{
          display: showNavbar ? "block" : "none",
        }}
      >
        <Navbar />
      </Box>

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

export default ShopLayout2;
