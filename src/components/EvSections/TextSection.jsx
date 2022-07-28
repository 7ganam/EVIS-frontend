import React from 'react';
import SectionWithText from 'components/EvComponents/SectionWithText';
const data = {
    title: "BY EXHIBITING, YOU CAN",
    text: " The motto for the Summit is “Smart Vehicle Mobility” with four themes (concentrations) that are in perfect synergy with Abu Dhabi, which is witnessing an overwhelming energy greening and sustainability awareness trends. Abu Dhabi has proven to be one of the fastest growing smart cities worldwide adopting the latest green technologies after the successful establishment of Masdar City, the first of its kind worldwide.",
    cmd : "Do something here"
}

const TextSection = () => {
  return (
    <SectionWithText data = {data}/>
    );
}

export default TextSection