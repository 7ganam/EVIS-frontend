import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, Grid, Box, useTheme } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import ModifiedRoundedImage from "src/components/EvComponents/ModifiedRoundedImage";
import { Button } from "@mui/material";
import { AnimationWrapper } from "react-hover-animation";

const SpeakersSection = (props) => {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);

  const router = useRouter();
  const data = props.data;
  const title = props.title;
  return (
    <Box id={"advisory-board"} sx={{ scrollMarginTop: "250px" }}>
      <Box sx={{ mt: "40px", mb: "20px" }}>
        <SectionTitle> {title} </SectionTitle>
      </Box>
      <Box></Box>
      <Container
        maxWidth="false"
        sx={{
          backgroundColor: theme.palette.primary.main,
          margin: "0",
          textAlign: "center",
        }}
      >
        <Box py="80px">
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
              {data?.slice(0, 8).map(({ imageSrc, name, title, company }) => {
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
                      <Box
                        sx={{ height: "100%", borderRadius: "30px" }}
                        onClick={() => {
                          router.push(`/speakers/${name}`);
                        }}
                      >
                        <ModifiedRoundedImage
                          Src={imageSrc}
                          Name={name}
                          Title={title}
                          Company={company}
                          bgColor={theme.palette.paste.contrastText}
                        />
                      </Box>
                    </AnimationWrapper>
                  </Grid>
                );
              })}
              {showAll &&
                data?.slice(8).map(({ imageSrc, name, title, company }) => {
                  return (
                    <Grid item xs={12} sm={4} md={3} key={name}>
                      <AnimationWrapper>
                        <div
                          onClick={() => {
                            router.push(`/speakers/${name}`);
                          }}
                        >
                          <ModifiedRoundedImage
                            Src={imageSrc}
                            Name={name}
                            Title={title}
                            Company={company}
                            bgColor={theme.palette.paste.contrastText}
                          />
                        </div>
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
            onClick={() => setShowAll(true)}
          >
            Show All
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SpeakersSection;
