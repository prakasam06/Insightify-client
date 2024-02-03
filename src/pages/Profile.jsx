import { useAuth } from '../context/JWTAuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <div>
      <h1>Profile</h1>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
    </div>
  ) : (
    <p>Loading ...</p>
  );
};

export default Profile;
