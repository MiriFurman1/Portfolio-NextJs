import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => {
        return (
          <BlogCard key={project.id}>
            <Img src={project.image} />
            <TitleContent>
              <HeaderThree >{project.title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TagList>
                {project.tags.map((tag,i)=>(
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              {project.source&&<ExternalLinks href={project.source}>Code</ExternalLinks>}
              {project.visit&&<ExternalLinks href={project.visit}>Demo</ExternalLinks>}
              {(!projects.source&&!project.visit)&&<p>Access will be given on demand</p>}
            </UtilityList>
          </BlogCard>
        )
      })}
    </GridContainer>

  </Section>
);

export default Projects;