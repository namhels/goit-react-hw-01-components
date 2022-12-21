import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'components/Box/Box';
import { getRandomHexColor } from 'utils';

const Title = styled.h2`
  text-transform: uppercase;
`;

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={1 / 2}
      mx='auto'
      borderRadius='normal'
      boxShadow='small'
      >
      {title && <Box
        width="100%"
        py={5}
        color='textStatistics'
        fontFamily='heading'
        fontSize="m"
        fontWeight='bold'
        textAlign='center'
        bg='white'
      ><Title>{title}</Title></Box>}

      <Box
        as="ul"
        width="100%"
        display="grid"
        gridTemplateColumns='repeat(5, 1fr)'>
        {stats.map(({ id, label, percentage }) => (
          <Box
            as="li"
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={4}
            color='white'
            fontFamily='heading'
            fontWeight='normal'
            bg={getRandomHexColor()}
            key={id}>
            <Box
              as="span"
              mb={4}
              fontSize="m"
            >{label}</Box>
            <Box
              as="span"
              fontSize="mm"
            >{percentage}%</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};


    // <Box
    //   as="section"
    //   display="flex"
    //   flexDirection="column"
    //   alignItems="center">
    //   {title && <h2 className="title">{title}</h2>}

    //   <ul className="stat-list">
    //     {stats.map(({ id, label, percentage }) => (
    //       <li className="item" key={id}>
    //         <span className="label">{label}</span>
    //         <span className="percentage">{percentage}</span>
    //       </li>
    //     ))}
    //   </ul>
    // </Box>