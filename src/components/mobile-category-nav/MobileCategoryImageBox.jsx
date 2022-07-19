import { Typography } from "@mui/material";
import { FlexRowCenter } from "components/flex-box";
import LazyImage from "components/LazyImage";

// ==============================================================
const MobileCategoryImageBox = ({ title, imgUrl, Icon }) => {
  return (
    <FlexRowCenter flexDirection="column">
      {imgUrl ? (
        <LazyImage
          src={imgUrl}
          borderRadius="5px"
          width={100}
          height={100}
          objectFit="cover"
        />
      ) : (
        Icon && <Icon size="48px">{Icon}</Icon>
      )}
      <Typography
        className="ellipsis"
        textAlign="center"
        fontSize="11px"
        lineHeight="1"
        mt={1}
      >
        {title}
      </Typography>
    </FlexRowCenter>
  );
};

export default MobileCategoryImageBox;
