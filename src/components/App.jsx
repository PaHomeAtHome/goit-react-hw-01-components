import user from './Profile/user.json';
import data from './Statistics//data.json';
import Profile from './Profile/Profile';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (

    <Container>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
        stats={user.stats} />
      <Statistics title={`Upload stats`} stats={data} />
     </Container>
  );
};
