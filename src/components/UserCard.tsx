import React, { useState } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Paper, Grid } from '@mui/material';
import axios from 'axios';

interface UserCardProps {
  user: {
    id: number;
    username: string;
    email?: string;
    friends: { id: number; username: string }[];
  };
  isFriend: boolean;
  onFriendChange: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, isFriend, onFriendChange }) => {
  const [loading, setLoading] = useState(false);

  const handleAddFriend = async () => {
    setLoading(true);
    try {
      await axios.post(
        'https://user-management-backend-one.vercel.app/users/add-friend',
        { friendId: user.id },
        {
          headers: { Authorization: localStorage.getItem('token') },
        }
      );
      onFriendChange();
    } catch (error) {
      console.error('Error adding friend:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFriend = async () => {
    setLoading(true);
    try {
      await axios.post(
        'https://user-management-backend-one.vercel.app/users/remove-friend',
        { friendId: user.id },
        {
          headers: { Authorization: localStorage.getItem('token') },
        }
      );
      onFriendChange();
    } catch (error) {
      console.error('Error removing friend:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={12} sx={{ padding: 2, margin: 1 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={user.username} src={`https://randomuser.me/api/portraits/lego/${user.id % 10}.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={user.username} />
          <Button
            variant="contained"
            color={isFriend ? 'secondary' : 'primary'}
            onClick={isFriend ? handleRemoveFriend : handleAddFriend}
            disabled={loading}
          >
            {isFriend ? 'Remove Friend' : 'Add Friend'}
          </Button>
        </ListItem>
      </Paper>
    </Grid>
  );
};

export default UserCard;
