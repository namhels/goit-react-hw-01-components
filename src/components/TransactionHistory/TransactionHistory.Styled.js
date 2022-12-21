import styled from 'styled-components';

const Table = styled.table`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.backgroundPrimary};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.small};
`;

const HeadRow = styled.tr`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  text-transform: uppercase;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.backgroundPrimary};
`;

const BodyRow = styled.tr`
  color: ${p => p.theme.colors.textSecondary};
  /* border: ${p => p.theme.borders.normal}${p =>
    p.theme.colors.backgroundPrimary}; */
  :nth-child(2n) {
    background-color: ${p => p.theme.colors.backgroundPrimary};
  }
`;

const TypeData = styled.td`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  text-transform: capitalize;
`;

export { Table, HeadRow, BodyRow, TypeData };
