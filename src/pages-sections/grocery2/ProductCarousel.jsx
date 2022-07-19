import { Box } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import ProductCard1 from "components/product-cards/ProductCard1";
import { H3 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import React, { useEffect, useState } from "react"; // =======================================================

// =======================================================
const ProductCarousel = (props) => {
  const { products, title } = props;
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);
  return (
    <Box>
      <H3 fontSize={25} mb={3}>
        {title}
      </H3>

      <Carousel
        step={3}
        showDots
        totalSlides={12}
        showArrowOnHover={true}
        arrowButtonColor="inherit"
        visibleSlides={visibleSlides}
      >
        {products.map((item, ind) => (
          <Box py={0.5} key={ind}>
            <ProductCard1 {...item} off={50} hideRating showProductSize />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}; // set default component props

ProductCarousel.defaultProps = {
  products: [],
  title: "Best Seller in Your Area",
};
export default ProductCarousel;
