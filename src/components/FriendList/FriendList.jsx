import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import defaultImage from 'img/defaultImage.jpg';

export const FriendList = ({ friends }) => {
  return (
    <Box
      py={6}
      bg="backgroundPrimary">
      <Box
        as="ul"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap={3}
        width={1 / 3}
        mx='auto'>
        {friends.map(({ id, avatar = defaultImage, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </Box>
    </Box>

  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};


