import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Box
      as="li"
      display="flex"
      alignItems="center"
      gridGap={3}
      width="100%"
      height="90px"
      py={3}
      pl={4}
      bg='white'
      borderRadius='normal'
      boxShadow='small'
      key={id}>
      {isOnline
        ? <Box
            as="span"
            width="22px"
            height="22px"
            borderRadius="round"
            bg='green'
          ></Box>
        : <Box
            as="span"
            width="22px"
            height="22px"
            borderRadius="round"
            bg='red'
          ></Box>}
        <Box
        as="img"
        borderRadius='normal'
        src={avatar} alt={name} width="80px" />
      <Box
        as="p"
        color='textPrimary'
        fontFamily='body'
        fontSize="l"
        fontWeight='bold'
      >{name}</Box>
    </Box>
  );
};

FriendListItem.propTypes = {
      id: PropTypes.number,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
};

