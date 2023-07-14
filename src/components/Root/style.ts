import styled from 'styled-components/native';

export const SectionContainer = styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

export const SecontionTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.color.primary};
`;

export const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.color.primary};
`;

export const Highlight = styled.Text`
  font-weight: 700;
`;
