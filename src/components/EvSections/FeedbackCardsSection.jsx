import React from 'react';
import FeedbackCard from 'components/EvComponents/FeedbackCard';
import {Box} from "@mui/system";
import { SectionTitle } from 'components/EvComponents/StyledTypography';

const FeedbackCardsSection = () => {
  return (
    <Box
    sx = {{
        mt : 2,
    }}
    >
    <SectionTitle>Feedback Boxes Section</SectionTitle>
    <FeedbackCard/>
    </Box>
  )
}

export default FeedbackCardsSection