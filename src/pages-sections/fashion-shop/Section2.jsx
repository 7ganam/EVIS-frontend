import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import Light from "components/icons/Light";
import ProductCard3 from "components/product-cards/ProductCard3";
import useWindowSize from "hooks/useWindowSize";
import React, { useEffect, useState } from "react"; // common arrow button for slider

export const arrowButtonStyle = {
  backgroundColor: "white",
  color: "#2B3445",
}; // =================================================

// =================================================
const Section2 = ({ flashDeals }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);
  return (
    <CategorySectionCreator
      icon={<Light color="primary" />}
      title="Flash Deals"
    >
      <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={flashDeals.length}
        leftButtonStyle={arrowButtonStyle}
        rightButtonStyle={arrowButtonStyle}
      >
        {flashDeals.map((item, ind) => (
          <ProductCard3
            key={ind}
            id={item.id}
            title={item.title}
            price={item.price}
            off={item.discount}
            rating={item.rating}
            imgUrl={item.imgUrl}
          />
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

export default Section2;
