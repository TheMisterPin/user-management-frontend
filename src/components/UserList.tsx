import  { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import axios from 'axios';
import UserCard from './UserCard';

interface User {
  id: number;
  username: string;
  email?: string;
  friends: User[];
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userResponse = await axios.get('https://user-management-backend-one.vercel.app/users/', {
          headers: { Authorization: localStorage.getItem('token') },
        });
        setCurrentUser(userResponse.data);

        const usersResponse = await axios.get('https://user-management-backend-one.vercel.app/users/all', {
          headers: { Authorization: localStorage.getItem('token') },
        });
        setUsers(usersResponse.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleFriendChange = () => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('https://user-management-backend-one.vercel.app/users/', {
          headers: { Authorization: localStorage.getItem('token') },
        });
        setCurrentUser(response.data);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  };

  return (
    <Container maxWidth="md">
       <Typography variant="h2" marginTop="30px" gutterBottom>
        All Users
        </Typography>
      <Grid container spacing={2}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isFriend={currentUser?.friends.some((friend) => friend.id === user.id) || false}
            onFriendChange={handleFriendChange}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default UserList;
