import styled from 'styled-components';

export const typeIcons = {
  income: '▲',
  outcome: '▼',
};

export const TypeIcon = styled.i`
  color: ${(props) => props.children === typeIcons.income ? '#43ba67' : '#da0a16'};
`;

export const Icon = styled.i``;
