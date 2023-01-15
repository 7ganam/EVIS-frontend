import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
function AgendaTalkCard({ talk }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          margin: "auto",
          marginTop: "15px",
          border: "1px solid #ddd",
          boxShadow: "0 0 25px 0 rgb(0 0 0 / 10%)",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              bgcolor: "#58C1FE",
              fontSize: "18px",
              color: "white",
              padding: "5px",
              paddingLeft: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <Box>{talk?.type}</Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              bgcolor: "#f8f8f8",
              fontSize: "18px",
              padding: "5px",
              paddingLeft: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <Box>{talk?.title}</Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              bgcolor: "#f8f8f8",
              fontSize: "10px",
              padding: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
              // border: "1px solid #ddd",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "20px", height: "20px" }}>
                  <CalendarMonthIcon sx={{ width: "100%", height: "100%" }} />
                </Box>
                <Box sx={{ ml: "4px" }}>Day {talk?.day}</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "20px", height: "20px" }}>
                  <AccessTimeIcon sx={{ width: "100%", height: "100%" }} />
                </Box>
                <Box sx={{ ml: "4px" }}>Starts {talk?.start_time} |(GMT+4)</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "20px", height: "20px" }}>
                  <AccessTimeIcon sx={{ width: "100%", height: "100%" }} />
                </Box>
                <Box sx={{ ml: "4px" }}>Ends {talk?.end_time} |(GMT+4)</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "20px", height: "20px" }}>
                  <PersonIcon sx={{ width: "100%", height: "100%" }} />
                </Box>
                <Box sx={{ ml: "4px" }}>
                  Speaker : {talk?.speaker?.data?.attributes?.name ?? "-"}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              fontSize: "14px",
              padding: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
              // border: "1px solid #ddd",
            }}
          >
            <Box>{talk.description}</Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AgendaTalkCard;
