import { Divider } from "@mui/material";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import MobileNavigationBar from "src/components/mobile-navigation/MobileNavigationBar";
import Navbar from "src/components/navbar/Navbar";
import SaleNavbar from "src/components/navbar/SaleNavbar";
import Sticky from "src/components/sticky/Sticky";
import Topbar from "src/components/topbar/Topbar";
import Head from "next/head";
import { Fragment } from "react"; // icons

import BabyFeeder from "src/components/icons/BabyFeeder";
import BasketBall from "src/components/icons/BasketBall";
import BeautyProducts from "src/components/icons/BeautyProducts";
import Camera from "src/components/icons/Camera";
import DrillMachine from "src/components/icons/DrillMachine";
import Picture from "src/components/icons/Picture";
import Sofa from "src/components/icons/Sofa";
import Tshirt from "src/components/icons/Tshirt";
import Watch from "src/components/icons/Watch";
import Wheel from "src/components/icons/Wheel";
import WomenDress from "src/components/icons/WomenDress";
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
