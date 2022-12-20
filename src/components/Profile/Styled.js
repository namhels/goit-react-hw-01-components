import styled from 'styled-components';

const Card = styled.div`
  width: ${p => p.theme.space[8]}px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.backgroundPrimary};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.12);
`;

const Avatar = styled.img`
  width: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

const Name = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textPrimary};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.mm};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textSecondary};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const Location = styled(Tag)`
  margin-bottom: 0;
  padding-bottom: ${p => p.theme.space[5]}px;
`;

const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.backgroundPrimary};
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

const Label = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.textSecondary};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const Quantity = styled.span`
  color: ${p => p.theme.colors.textPrimary};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export { Card, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity };
