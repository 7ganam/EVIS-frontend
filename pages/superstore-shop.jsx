import ShopLayout1 from "components/layouts/ShopLayout1";
import Navbar from "components/navbar/Navbar";
import Setting from "components/Setting";
import Section1 from "pages-sections/superstore-shop/Section1";
import Section10 from "pages-sections/superstore-shop/Section10";
import Section11 from "pages-sections/superstore-shop/Section11";
import Section12 from "pages-sections/superstore-shop/Section12";
import Section13 from "pages-sections/superstore-shop/Section13";
import Section2 from "pages-sections/superstore-shop/Section2";
import Section3 from "pages-sections/superstore-shop/Section3";
import Section4 from "pages-sections/superstore-shop/Section4";
import Section5 from "pages-sections/superstore-shop/Section5";
import Section6 from "pages-sections/superstore-shop/Section6";
import Section7 from "pages-sections/superstore-shop/Section7";
import Section8 from "pages-sections/superstore-shop/Section8";
import api from "utils/api//superstore-shop";

const IndexPage = (props) => {
  const {
    carList,
    carBrands,
    moreItems,
    mobileList,
    opticsList,
    serviceList,
    mobileShops,
    opticsShops,
    mobileBrands,
    opticsBrands,
    topCategories,
    flashDealsData,
    topRatedBrands,
    newArrivalsList,
    bigDiscountList,
    mainCarouselData,
    topRatedProducts,
    bottomCategories,
  } = props;
  return (
    <ShopLayout1>
      <Navbar />

      <Section1 carouselData={mainCarouselData} />
      <Section2 flashDeals={flashDealsData} />
      <Section3 categoryList={topCategories} />
      <Section4
        topRatedList={topRatedProducts}
        topRatedBrands={topRatedBrands}
      />
      <Section5 newArrivalsList={newArrivalsList} />
      <Section13 bigDiscountList={bigDiscountList} />
      <Section6 carBrands={carBrands} carList={carList} />
      <Section7
        shops={mobileShops}
        brands={mobileBrands}
        title="Mobile Phones"
        productList={mobileList}
      />

      <Section8 />

      <Section7
        shops={opticsShops}
        brands={opticsBrands}
        title="Optics / Watch"
        productList={opticsList}
      />

      <Section10 categories={bottomCategories} />
      <Section11 moreItems={moreItems} />
      <Section12 serviceList={serviceList} />

      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const carList = await api.getCarList();
  const carBrands = await api.getCarBrands();
  const moreItems = await api.getMoreItems();
  const mobileList = await api.getMobileList();
  const opticsList = await api.getOpticsList();
  const mobileShops = await api.getMobileShops();
  const opticsShops = await api.getOpticsShops();
  const serviceList = await api.getServiceList();
  const mobileBrands = await api.getMobileBrands();
  const flashDealsData = await api.getFlashDeals();
  const opticsBrands = await api.getOpticsBrands();
  const bottomCategories = await api.getCategories();
  const topCategories = await api.getTopCategories();
  const topRatedBrands = await api.getTopRatedBrand();
  const mainCarouselData = await api.getMainCarousel();
  const newArrivalsList = await api.getNewArrivalList();
  const bigDiscountList = await api.getBigDiscountList();
  const topRatedProducts = await api.getTopRatedProduct();
  return {
    props: {
      carList,
      carBrands,
      moreItems,
      mobileList,
      opticsList,
      serviceList,
      mobileShops,
      opticsShops,
      mobileBrands,
      opticsBrands,
      topCategories,
      flashDealsData,
      topRatedBrands,
      newArrivalsList,
      bigDiscountList,
      mainCarouselData,
      topRatedProducts,
      bottomCategories,
    },
  };
}
export default IndexPage;
