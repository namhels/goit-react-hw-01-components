import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import defaultImage from 'img/defaultImage.jpg';
import { Card, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from 'components/Profile/Styled'

export const Profile = ({ username , location, tag , avatar =  defaultImage, stats }) => {

  return (
    <Box
      py={6}
      bg="backgroundPrimary">
      <Card>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          >
          <Avatar
            src={avatar}
            alt={username}
          />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Box>

        <Stats>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </Stats>
      </Card>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
};

