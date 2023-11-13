import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import FolderIcon from '@mui/icons-material/Folder';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ChatIcon from '@mui/icons-material/Chat';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SettingsIcon from '@mui/icons-material/Settings';


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{
      width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200,
      background: 'linear-gradient(to left, #8E2DE2, #8B178B )', // Gradiente roxo
      color: 'white', // Cor do texto
      height: '100%', // Adicionando 100% de altura para cobrir todo o espaço disponível
      display: 'flex', // Usando display flex para que a altura 100% funcione corretamente
      flexDirection: 'column', // Adicionando flex-direction para garantir o layout de coluna
    }}>
      
      <List>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
      
      </List>
      <Divider />
      <List>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FolderIcon/>
              </ListItemIcon>
              <ListItemText>Jogos</ListItemText>
            </ListItemButton>
          </ListItem>
      
      </List>
      <Divider />
      <List>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LibraryMusicIcon/>
              </ListItemIcon>
              <ListItemText>Musicas</ListItemText>
            </ListItemButton>
          </ListItem>
      
      </List>
      <Divider />
      <List>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon/>
              </ListItemIcon>
              <ListItemText>Amigos</ListItemText>
            </ListItemButton>
          </ListItem>
      
      </List>
      <Divider />
      <List>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ApartmentIcon/>
              </ListItemIcon>
              <ListItemText>Comunidades</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText>configurações</ListItemText>
            </ListItemButton>
          </ListItem>
      
      </List>
      <Divider />
      <Divider />
      
    </Box>
  );
 
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{":hover":{backgroundColor:'transparent'}}}>
            <MenuIcon sx={{color:'white'}}/> {/* Substitua "MenuIcon" pelo ícone desejado */}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    
  );
}