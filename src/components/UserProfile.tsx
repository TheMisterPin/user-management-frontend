import  { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import axios from 'axios';
import UserProfileCard from './UserProfileCard';

import UserCard from './UserCard';

interface User {
  id: number;
  username: string;
  email?: string;
  password: string;
  friends: User[];
}


const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('https://user-management-backend-one.vercel.app/users/', {
          headers: { Authorization: localStorage.getItem('token') },
        });
        setUser(response.data);
        setFriends(response.data.friends);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleFriendChange = () => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('https://user-management-backend-one.vercel.app/users/', {
          headers: { Authorization: localStorage.getItem('token') },
        });
        setUser(response.data);
        setFriends(response.data.friends);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  };

  if (!user) return <Typography>Loading...</Typography>;

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <>
   
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Typography variant="h2" marginTop="30px" gutterBottom>
          User Profile
        </Typography>
        <Grid container spacing={2}>
          <UserProfileCard user={user} />
        </Grid>
        <Typography variant="h4" marginTop="30px" gutterBottom>
         Friends
        </Typography>
          <Grid container spacing={2}>
          {friends.map((friend) => (
            <UserCard key={friend.id} user={friend} isFriend={true} onFriendChange={handleFriendChange} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default UserProfile;
