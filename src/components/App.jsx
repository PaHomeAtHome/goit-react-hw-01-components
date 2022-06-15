import user from './Profile/user.json';
import Profile from './Profile/Profile';
import Container from './Container/Container';

export const App = () => {
  return (

    <Container>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
     </Container>
  );
};
