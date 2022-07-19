import { Box, Button, Container, Grid, styled } from "@mui/material";
import { FlexRowCenter } from "components/flex-box";
import { H2, H4, Paragraph } from "components/Typography";
import Link from "next/link";
import PageCard from "./PageCard";
const FilterButton = styled(Button)(({ theme, selected }) => ({
  color: selected ? theme.palette.primary.main : "inherit",
  ":hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
})); // ==================================================================

// ==================================================================
const Section3 = ({ filterDemo, setFilterDemo }) => {
  const pages = [
    ...demoPageList,
    ...shopPageList,
    ...vendorPageList,
    ...customerPageList,
  ];
  const filtered = pages.filter((item) =>
    filterDemo !== "" ? item.page === filterDemo : true
  );
  return (
    <Box
      mb={14}
      id="demos"
      sx={{
        background:
          "url(/assets/images/landing/landing-bg-2.svg) center/contain no-repeat",
      }}
    >
      <Container
        id="section-3"
        sx={{
          position: "relative",
        }}
      >
        <Box maxWidth="830px" mx="auto" mb="4rem" textAlign="center">
          <H4 color="primary.main" fontSize="58px" fontWeight="900">
            55+
          </H4>

          <Paragraph color="primary.main" fontSize="18px">
            Server side rendered
          </Paragraph>

          <H2 color="secondary.main" fontSize="40px" fontWeight="900" mb={4}>
            Demos & Pages
          </H2>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FlexRowCenter gap={1} flexWrap="wrap">
              <FilterButton
                disableRipple
                onClick={() => setFilterDemo("")}
                selected={filterDemo === "" ? 1 : 0}
              >
                All
              </FilterButton>

              <FilterButton
                disableRipple
                onClick={() => setFilterDemo("homepage")}
                selected={filterDemo === "homepage" ? 1 : 0}
              >
                Homepages
              </FilterButton>

              <FilterButton
                disableRipple
                onClick={() => setFilterDemo("shop")}
                selected={filterDemo === "shop" ? 1 : 0}
              >
                Shop
              </FilterButton>

              <FilterButton
                disableRipple
                onClick={() => setFilterDemo("user")}
                selected={filterDemo === "user" ? 1 : 0}
              >
                User Dashboard
              </FilterButton>

              <FilterButton
                disableRipple
                onClick={() => setFilterDemo("admin")}
                selected={filterDemo === "admin" ? 1 : 0}
              >
                Admin Dashboard
              </FilterButton>
            </FlexRowCenter>
          </Grid>

          {filtered.map((item, i) => (
            <Grid
              item
              lg={4}
              sm={6}
              xs={12}
              key={i}
              data-aos="fade-up"
              data-aos-duration={i + 1 * 500}
            >
              <PageCard {...item} />
            </Grid>
          ))}
        </Grid>

        <Link
          href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"
          passHref
        >
          <a>
            <Button
              color="primary"
              variant="contained"
              sx={{
                mx: "auto",
                mt: "2.25rem",
                display: "block",
                minWidth: "125px",
              }}
            >
              Purchase Now
            </Button>
          </a>
        </Link>
      </Container>
    </Box>
  );
};

const demoPageList = [
  {
    imgUrl: "/assets/images/landing/page-1.png",
    previewUrl: "/superstore-shop",
    title: "Super Store",
    page: "homepage",
  },
  {
    imgUrl: "/assets/images/landing/furniture.png",
    previewUrl: "/furniture-shop",
    title: "Furniture",
    page: "homepage",
  },
  {
    imgUrl: "/assets/images/landing/grocery1.png",
    previewUrl: "/grocery1",
    title: "Grocery 1",
    page: "homepage",
  },
  {
    imgUrl: "/assets/images/landing/page-2.png",
    previewUrl: "/grocery2",
    title: "Grocery 2",
    page: "homepage",
  },
  {
    imgUrl: "/assets/images/landing/grocery3.png",
    previewUrl: "/grocery3",
    title: "Grocery 3",
    page: "homepage",
  },
  {
    imgUrl: "/assets/images/landing/healthbeauty.png",
    previewUrl: "/healthbeauty-shop",
    title: "Health and Beauty",
    page: "homepage",
  },
  {
    imgUrl: "/assets/images/landing/page-3.png",
    previewUrl: "/fashion-shop",
    title: "Fashion",
    page: "homepage",
  },
  {
    imgUrl: "/assets/images/landing/gift-shop.png",
    previewUrl: "/gift-shop",
    title: "Gift Store",
    page: "homepage",
  },
  {
    imgUrl: "/assets/images/landing/page-4.png",
    previewUrl: "/gadget-shop",
    title: "Gadget",
    page: "homepage",
  },
];
const shopPageList = [
  {
    imgUrl: "/assets/images/landing/shop/page-7.png",
    previewUrl: "/sale-page-1",
    title: "Sale Page",
    page: "shop",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-8.png",
    previewUrl: "/sale-page-2",
    title: "Sale Page (Small Navigation)",
    page: "shop",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-2.png",
    previewUrl: "/shops/4345643",
    title: "Vendor Shop",
    page: "shop",
  },
  {
    imgUrl: "/assets/images/landing/shop/search-product.png",
    previewUrl: "/product/search/mobile%20phone",
    title: "Search",
    page: "shop",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-6.png",
    previewUrl: "/product/456346",
    title: "Product Details",
    page: "shop",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-3.png",
    previewUrl: "/cart",
    title: "Cart",
    page: "shop",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-4.png",
    previewUrl: "/checkout",
    title: "Checkout",
    page: "shop",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-5.png",
    previewUrl: "/checkout-alternative",
    title: "Checkout Alternative",
    page: "shop",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-1.png",
    previewUrl: "/shops",
    title: "Shop List",
    page: "shop",
  },
];
const vendorPageList = [
  {
    imgUrl: "/assets/images/landing/vendor/dashboard.jpg",
    previewUrl: "/vendor/dashboard",
    title: "Dashboard",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/product-list.jpg",
    previewUrl: "/admin/products",
    title: "Product List",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/create-product.jpg",
    previewUrl: "/admin/products/create",
    title: "Create Product",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/categories.jpg",
    previewUrl: "/admin/categories",
    title: "Category List",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/brands.jpg",
    previewUrl: "/admin/brands",
    title: "Brand List",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/reviews.jpg",
    previewUrl: "/admin/product-reviews",
    title: "Product Reviews",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/order-list.jpg",
    previewUrl: "/admin/orders",
    title: "Order List",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/order-details.jpg",
    previewUrl: "/admin/orders/1",
    title: "Order Details",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/customers.jpg",
    previewUrl: "/admin/customers",
    title: "Customer List",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/refund-request.jpg",
    previewUrl: "/admin/refund-request",
    title: "Refund Request",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/refund-setting.jpg",
    previewUrl: "/admin/refund-setting",
    title: "Refund Setting",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/seller-list.jpg",
    previewUrl: "/admin/sellers",
    title: "Seller List",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/seller-package.jpg",
    previewUrl: "/admin/seller-package",
    title: "Seller Packages",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/package-payment.jpg",
    previewUrl: "/admin/package-payment",
    title: "Pacakge Payment",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/earning-history.jpg",
    previewUrl: "/admin/earning-history",
    title: "Earning History",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/payout-list.jpg",
    previewUrl: "/admin/payouts",
    title: "Payout List",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/payout-request.jpg",
    previewUrl: "/admin/payout-request",
    title: "Payout Request",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/vendor-earning.jpg",
    previewUrl: "/vendor/earning-history",
    title: "Vendor Earning History",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/vendor-payouts.jpg",
    previewUrl: "/vendor/payouts",
    title: "Vendor Payouts",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/vendor-payout-requests.jpg",
    previewUrl: "/vendor/payout-requests",
    title: "Vendor Payout Request",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/payout-settings.jpg",
    previewUrl: "/vendor/payout-settings",
    title: "Payout Settings",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/vendor-refund-requests.jpg",
    previewUrl: "/vendor/refund-request",
    title: "Vendor Refund Requests",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/vendor-product-reviews.jpg",
    previewUrl: "/vendor/reviews",
    title: "Vendor Product Reviews",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/shop-settings.jpg",
    previewUrl: "/vendor/shop-settings",
    title: "Shop Settings",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/support-tickets.jpg",
    previewUrl: "/vendor/support-tickets",
    title: "Support Tickets",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/account-setting.jpg",
    previewUrl: "/vendor/account-setting",
    title: "Account Settings",
    status: "New",
    page: "admin",
  },
  {
    imgUrl: "/assets/images/landing/vendor/site-settings.jpg",
    previewUrl: "/vendor/site-settings",
    title: "Site Settings",
    status: "New",
    page: "admin",
  },
];
const customerPageList = [
  {
    imgUrl: "/assets/images/landing/customer/page-5.png",
    previewUrl: "/profile",
    title: "Profile",
    page: "user",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-6.png",
    previewUrl: "/profile/edit",
    title: "Edit Profile",
    page: "user",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-2.png",
    previewUrl: "/orders",
    title: "My Orders",
    page: "user",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-3.png",
    previewUrl: "/orders/23234",
    title: "Order Details",
    page: "user",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-1.png",
    previewUrl: "/address",
    title: "My Addresses",
    page: "user",
  },
  {
    imgUrl: "/assets/images/landing/customer/add-address.png",
    previewUrl: "/address/512474",
    title: "Add Addresses",
    page: "user",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-4.png",
    previewUrl: "/payment-methods",
    title: "Payment Methods",
    page: "user",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-7.png",
    previewUrl: "/support-tickets",
    title: "Support Tickets",
    page: "user",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-8.png",
    previewUrl: "/support-tickets/32432423",
    title: "Ticket Details",
    page: "user",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-9.png",
    previewUrl: "/wish-list",
    title: "Wish List",
    page: "user",
  },
];
export default Section3;
