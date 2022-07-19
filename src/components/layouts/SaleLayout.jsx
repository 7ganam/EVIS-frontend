import { Divider } from "@mui/material";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar";
import Navbar from "components/navbar/Navbar";
import SaleNavbar from "components/navbar/SaleNavbar";
import Sticky from "components/sticky/Sticky";
import Topbar from "components/topbar/Topbar";
import Head from "next/head";
import { Fragment } from "react"; // icons

import BabyFeeder from "components/icons/BabyFeeder";
import BasketBall from "components/icons/BasketBall";
import BeautyProducts from "components/icons/BeautyProducts";
import Camera from "components/icons/Camera";
import DrillMachine from "components/icons/DrillMachine";
import Picture from "components/icons/Picture";
import Sofa from "components/icons/Sofa";
import Tshirt from "components/icons/Tshirt";
import Watch from "components/icons/Watch";
import Wheel from "components/icons/Wheel";
import WomenDress from "components/icons/WomenDress";
/**
 *  Used:
 *  1. sale-page-1 page
 *  2. sale-page-2 page
 */
// =============================================================

// =============================================================
const SaleLayout = ({ children, title, type }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Topbar />
    <Header />

    {type === "one" && (
      <Fragment>
        <Navbar />
        {children}
      </Fragment>
    )}

    {type === "two" && (
      <Fragment>
        <Divider />

        <Sticky fixedOn={0}>
          <SaleNavbar saleCategoryList={saleCategoryList} />
        </Sticky>

        <div className="section-after-sticky">{children}</div>
      </Fragment>
    )}

    <Footer />
    <MobileNavigationBar />
  </Fragment>
); //  set default props

SaleLayout.defaultProps = {
  type: "one",
  title: "Multivendor Ecommerce | Sale",
};
const saleCategoryList = [
  {
    icon: Tshirt,
    title: "Men",
  },
  {
    icon: Picture,
    title: "Photos",
  },
  {
    icon: Tshirt,
    title: "Clothes",
  },
  {
    icon: Sofa,
    title: "Furniture",
  },
  {
    icon: BasketBall,
    title: "Sport",
  },
  {
    icon: WomenDress,
    title: "Women",
  },
  {
    icon: Wheel,
    title: "Automobile",
  },
  {
    icon: Watch,
    title: "Accessories",
  },
  {
    icon: Camera,
    title: "Eelctronics",
  },
  {
    icon: DrillMachine,
    title: "Hardware",
  },
  {
    icon: BeautyProducts,
    title: "Cosmetics",
  },
  {
    icon: BabyFeeder,
    title: "Baby products",
  },
];
export default SaleLayout;
