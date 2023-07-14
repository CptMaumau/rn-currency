import React, { FC, PropsWithChildren } from 'react';

import { SecontionTitle, SectionContainer, SectionDescription } from './style';

type Props = PropsWithChildren<{
  title: string;
}>;

const Section: FC<Props> = ({ children, title }) => {
  return (
    <SectionContainer>
      <SecontionTitle>{title}</SecontionTitle>
      <SectionDescription>{children}</SectionDescription>
    </SectionContainer>
  );
};

export default Section;
