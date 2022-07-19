import { CallOutlined, MailOutline } from "@mui/icons-material";
import { Box, Container, styled } from "@mui/material";
import { FlexBox } from "components/flex-box";
import NavLink from "components/nav-link/NavLink";
import { Span } from "components/Typography";
import { layoutConstant } from "utils/constants";
const TopbarWrapper = styled(Box)(({ theme }) => ({
  fontSize: 12,
  height: layoutConstant.topbarHeight,
  background: theme.palette.primary.main,
  color: theme.palette.secondary.contrastText,
  "& .topbarLeft": {
    "& .logo": {
      display: "none",
    },
    "& .title": {
      marginLeft: "10px",
    },
    "@media only screen and (max-width: 900px)": {
      "& .logo": {
        display: "block",
      },
      "& > *:not(.logo)": {
        display: "none",
      },
    },
  },
  "& .topbarRight": {
    "& .link": {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText,
    },
    "@media only screen and (max-width: 900px)": {
      "& .link": {
        // display: "none",
      },
    },
  },
  "& .menuItem": {
    minWidth: 100,
  },
  "& .marginRight": {
    marginRight: "1.25rem",
  },
  "& .handler": {
    height: layoutConstant.topbarHeight,
  },
  "& .smallRoundedImage": {
    height: 15,
    width: 25,
    borderRadius: 2,
  },
  "& .menuTitle": {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600,
  },
}));

const EvTopbar = () => {
  return (
    <TopbarWrapper>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox className="topbarLeft" alignItems="center">
          <FlexBox alignItems="center">
            <CallOutlined fontSize="small" />
            <Span className="title">+05402 1111 1111</Span>
          </FlexBox>

          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="small" />
            <Span className="title">support@evis.com</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          <NavLink className="link" href="/faq">
            FAQ&quot;s
          </NavLink>

          <NavLink className="link" href="/help">
            Need Help?
          </NavLink>
        </FlexBox>
      </Container>
    </TopbarWrapper>
  );
};

export default EvTopbar;
