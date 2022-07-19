import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard3 from "components/product-cards/ProductCard3";
import useWindowSize from "hooks/useWindowSize";
import React, { useEffect, useState } from "react";
import { arrowButtonStyle } from "./Section2"; // ==========================================================

// ==========================================================
const Section3 = ({ newArrivals }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);
  return (
    <CategorySectionCreator title="New Arrivals" seeMoreLink="#">
      <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={newArrivals.length}
        leftButtonStyle={arrowButtonStyle}
        rightButtonStyle={arrowButtonStyle}
      >
        {newArrivals.map((item, ind) => (
          <ProductCard3
            key={ind}
            hideReview
            id={item.id}
            hideFavoriteIcon
            title={item.name}
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

export default Section3;
