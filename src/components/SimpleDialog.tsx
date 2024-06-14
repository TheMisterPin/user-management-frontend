import React from 'react';
import { Dialog, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

const SimpleDialog: React.FC<SimpleDialogProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleListItemClick = (path: string) => {
    if (path === '/logout') {
      localStorage.removeItem('token');
      navigate('/login');
    } else {
      navigate(path);
    }
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <List>
        <ListItem button onClick={() => handleListItemClick('/profile')}>
          <ListItemText primary="Profile Page" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick('/users')}>
          <ListItemText primary="User Page" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick('/logout')}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default SimpleDialog;
