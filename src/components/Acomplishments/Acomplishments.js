import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AccomplishmentsData } from "../../constants/constants.js"


const Accomplishments = () => (
  <section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {AccomplishmentsData.map((card, index) => {
        return (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        )
      })}
    </Boxes>
  </section>
);

export default Accomplishments;
