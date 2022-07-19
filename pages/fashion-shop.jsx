import ShopLayout1 from "components/layouts/ShopLayout1";
import Setting from "components/Setting";
import Section1 from "pages-sections/fashion-shop/Section1";
import Section2 from "pages-sections/fashion-shop/Section2";
import Section3 from "pages-sections/fashion-shop/Section3";
import Section4 from "pages-sections/fashion-shop/Section4";
import Section5 from "pages-sections/fashion-shop/Section5";
import Section6 from "pages-sections/fashion-shop/Section6";
import Section7 from "pages-sections/fashion-shop/Section7";
import Section8 from "pages-sections/fashion-shop/Section8";
import api from "utils/api/fashion-shop"; // =======================================================

// =======================================================
const Home3 = (props) => {
  const {
    hotDealList,
    serviceList,
    dealOfTheWeek,
    trendingItems,
    flashDealsData,
    newArrivalsData,
  } = props;
  return (
    <ShopLayout1>
      <Section1 />
      <Section2 flashDeals={flashDealsData} />
      <Section3 newArrivals={newArrivalsData} />
      <Section4 dealOfTheWeek={dealOfTheWeek} />
      <Section5 hotDealList={hotDealList} />
      <Section6 trendingItems={trendingItems} />
      <Section7 serviceList={serviceList} />
      <Section8 />

      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const hotDealList = await api.getHotDealList();
  const serviceList = await api.getServiceList();
  const flashDealsData = await api.getFlashDeals();
  const trendingItems = await api.getTrendingItems();
  const newArrivalsData = await api.getNewArrivals();
  const dealOfTheWeek = await api.getDealOfTheWeekList();
  return {
    props: {
      hotDealList,
      serviceList,
      dealOfTheWeek,
      trendingItems,
      flashDealsData,
      newArrivalsData,
    },
  };
}
export default Home3;
