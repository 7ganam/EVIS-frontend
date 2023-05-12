import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Button } from "@mui/material";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { AnimationWrapper } from "react-hover-animation";
import ModifiedRoundedImage from "./ModifiedRoundedImage";

function PeopleGrid({ data }) {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const [shownPeople, setShownPeople] = useState([]);
  const handleShowAll = () => {
    setShownPeople(data);
  };

  useEffect(() => {
    setShownPeople(data?.slice(0, 8) ?? []);
  }, []);

  return (
    <Box>
      <Container>
        <Grid
          container
          rowSpacing={3}
          spacing={2}
          sx={{
            padding: "35px",
            textAlign: "center",
            placeItems: "center",
            alignItems: "stretch",
          }}
        >
          {shownPeople.map(({ src, name, title, company, link }) => {
            console.log("src: ", src);
            return (
              <Grid item xs={12} sm={4} md={3} key={name}>
                <AnimationWrapper
                  reset
                  style={{
                    height: "100%",
                    position: "relative",
                    borderRadius: "7px",
                    cursor: "pointer",
                  }}
                  config={{
                    left: {
                      initial: "0px",
                      onHover: "10px",
                    },
                    top: {
                      initial: "0px",
                      onHover: "-10px",
                    },
                    boxShadow: {
                      initial: "0px 0px rgb(0 0 0 / 32%)",
                      onHover: "-10px 10px rgb(0 0 0 / 32%)",
                    },
                  }}
                >
                  <Link href={link ?? ""}>
                    <a>
                      <Box
                        sx={{ height: "100%", borderRadius: "30px" }}
                        // onClick={() => {
                        //   if (link) {
                        //     router.push(link);
                        //   }
                        // }}
                      >
                        <ModifiedRoundedImage
                          Src={src || "/assets/images/dummyUser.jpeg"}
                          Name={name}
                          Title={title}
                          Company={company}
                          bgColor={theme.palette.paste.contrastText}
                        />
                      </Box>
                    </a>
                  </Link>
                </AnimationWrapper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Button
        variant="outlined"
        sx={{
          backgroundColor: theme.palette.paste.contrastText,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
        onClick={() => handleShowAll()}
      >
        Show All
      </Button>
    </Box>
  );
}

export default PeopleGrid;
