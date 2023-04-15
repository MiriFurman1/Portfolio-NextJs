import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Explore My Fullstack Development Portfolio
      </SectionTitle>
      <SectionText>
        Enthusiastic fullstack developer skilled in building dynamic <br />
        and responsive web applications using the latest technologies  <br /> and best practices.
      </SectionText>
      <Button href="#projects">Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;