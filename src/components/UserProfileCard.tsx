import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Paper, Grid, Typography } from '@mui/material';

interface UserProfileCardProps {
  user: {
    id: number;
    username: string;
    email?: string;
  };
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={12} sx={{ padding: 2, margin: 1 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={user.username} src={`https://randomuser.me/api/portraits/lego/${user.id % 10}.jpg`} />
          </ListItemAvatar>
          <ListItemText 
            primary={user.username} 
            secondary={<Typography variant="body2">{user.email}</Typography>} 
          />
        </ListItem>
      </Paper>
    </Grid>
  );
};

export default UserProfileCard;
