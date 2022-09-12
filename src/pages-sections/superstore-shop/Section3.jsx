import BazarCard from "src/components/BazarCard";
import Carousel from "src/components/carousel/Carousel";
import CategorySectionCreator from "src/components/CategorySectionCreator";
import Category from "src/components/icons/Category";
import ProductCard6 from "src/components/product-cards/ProductCard6";
import useWindowSize from "src/hooks/useWindowSize";
import Link from "next/link";
import { useEffect, useState } from "react"; // =====================================================

// =====================================================
const Section3 = ({ categoryList }) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 650) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);
  return (
    <CategorySectionCreator
      icon={<Category color="primary" />}
      title="Top Categories"
      seeMoreLink="#"
    >
      <Carousel totalSlides={5} visibleSlides={visibleSlides}>
        {categoryList.map((item, ind) => (
          <Link href={`/product/search/${item.title}`} key={ind} passHref>
            <a>
              <BazarCard
                sx={{
                  p: 2,
                }}
                elevation={0}
              >
                <ProductCard6
                  title={item.title}
                  subtitle={item.subtitle}
                  imgUrl={item.imgUrl}
                />
              </BazarCard>
            </a>
          </Link>
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

export default Section3;
