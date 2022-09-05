import { styled } from "@mui/material";
import BazarCard from "src/components/BazarCard";
import LazyImage from "src/components/LazyImage";
import { H4 } from "src/components/Typography";
// styled component
const StyledBazarCard = styled(BazarCard)(({ theme }) => ({
  gap: "1rem",
  display: "flex",
  borderRadius: 5,
  cursor: "pointer",
  alignItems: "center",
  padding: "0.75rem 1rem",
  "&:hover": {
    boxShadow: theme.shadows[2],
  },
})); // ==============================================================================

// ==============================================================================
const ProductCategoryItem = ({ title, isSelected, imgUrl, sx = {} }) => {
  return (
    <StyledBazarCard
      elevation={isSelected ? 2 : 0}
      sx={{
        bgcolor: isSelected ? "white" : "grey.100",
        ...sx,
      }}
    >
      {imgUrl && (
        <LazyImage
          width={20}
          height={20}
          layout="fixed"
          objectFit="cover"
          src={imgUrl}
          alt=""
        />
      )}
      <H4 lineHeight="1" textTransform="capitalize">
        {title}
      </H4>
    </StyledBazarCard>
  );
};

export default ProductCategoryItem;
