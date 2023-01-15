import { Button, Box, useTheme } from "@mui/material";
import { H1, H4 } from "src/components/Typography";
import React, { useState, useCallback, useMemo } from "react";
import "react-medium-image-zoom/dist/styles.css";
import Card1 from "@/pages-sections/dashboard/Card1";
import AgendaTalkCard from "@/components/EvComponents/AgendaTalkCard";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// ============================================================

const AgendaSection = ({ talks = [] }) => {
  const [speakerValue, setSpeakerValue] = React.useState();
  const [speakerInputValue, setSpeakerInputValue] = React.useState("");
  let speakers = useMemo(() => {
    return talks.map((talk) => talk?.speaker?.data?.attributes?.name ?? "-");
  }, [talks]);

  const [dayValue, setDayValue] = React.useState();
  const [dayInputValue, setDayInputValue] = React.useState("");
  let days = useMemo(() => {
    let allDays = talks.map((talk) => talk?.day);
    let uniqDaysSet = new Set(allDays);
    let uniqDays = Array.from(uniqDaysSet);
    return uniqDays;
  }, [talks]);

  let displayedTalks = useMemo(() => {
    let filteredTalks = talks;

    if (!speakerValue && !dayValue) {
      return talks;
    }

    if (speakerValue) {
      filteredTalks = filteredTalks.filter(
        (talk) => talk?.speaker?.data?.attributes?.name === speakerValue
      );
    }

    if (dayValue) {
      filteredTalks = filteredTalks.filter((talk) => talk?.day === dayValue);
    }

    return filteredTalks;
  }, [speakerValue, dayValue, talks]);
  const renderTalks = () => {
    let talksView = displayedTalks.map((talk) => {
      return (
        <>
          {
            <div key={talk?.id}>
              <AgendaTalkCard talk={talk} />
            </div>
          }
        </>
      );
    });

    return talksView;
  };

  return (
    <Box
      sx={{
        w: "100%",
        minHeight: "300px",
        boxShadow: 3,
        padding: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          w: "100%",
          justifyContent: "end",
          mb: "30px",
        }}
      >
        <Autocomplete
          value={speakerValue}
          onChange={(event, newValue) => {
            setSpeakerValue(newValue);
          }}
          inputValue={speakerInputValue}
          onInputChange={(event, newInputValue) => {
            setSpeakerInputValue(newInputValue);
          }}
          id="controllable-states"
          options={speakers}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Filter by speaker" />
          )}
        />
        <Autocomplete
          value={dayValue}
          onChange={(event, newValue) => {
            setDayValue(newValue);
          }}
          inputValue={dayInputValue}
          onInputChange={(event, newInputValue) => {
            setDayInputValue(newInputValue);
          }}
          id="controllable-states"
          options={days}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Filter by day" />
          )}
        />
      </Box>
      {renderTalks()}
    </Box>
  );
};

export default AgendaSection;
