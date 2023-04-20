import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {

  return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Explore My Fullstack Development Portfolio
      </SectionTitle>
      <SectionText>
        Enthusiastic fullstack developer skilled in building dynamic <br />
        and responsive web applications using the latest technologies  <br /> and best practices.
      </SectionText>
      <Button>
      <a href='/Miri_Furman_resume.pdf' download>Download my CV</a>
      </Button>
    </LeftSection>
  </Section>
)};

export default Hero;