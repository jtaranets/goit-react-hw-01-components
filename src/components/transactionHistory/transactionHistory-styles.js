import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 50%;
`;

export const Heading = styled.thead`
  background-color: #8bd3ea;
`;

export const Title = styled.th`
  color: #fff;
  text-transform: uppercase;
  width: calc(100% / 3);
  padding: 10px 30px;
`;

export const RowGrey = styled.tr`
  background-color: rgb(238, 235, 235);
`;

export const RowWhite = styled.tr`
  background-color: #fff;
`;

export const Data = styled.td`
  color: #808080;
  text-align: center;
  padding: 10px 30px;
  &:first-letter {
    text-transform: uppercase;
  }
`;
