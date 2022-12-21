import { Box } from 'components/Box/Box';
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import  user  from "db/user.json";
import  data  from "db/data.json";
import friends from "db/friends.json";
import transactions from 'db/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Box py={6} bg='backgroundSecondary'>
        <Box mb={4}>
          <Statistics title="Upload stats" stats={data} />
        </Box>
        <Statistics stats={data} />
      </Box>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

