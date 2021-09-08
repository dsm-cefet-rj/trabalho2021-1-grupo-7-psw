import React, { useState, useEffect } from 'react';
import { MenuWrapper, Logo, Text, ListWrapper, Link } from './style.js';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import logoImg from '../../assets/img/logo.svg';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
import { makeStyles } from '@material-ui/core';
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Divider,
  Button,
} from '@material-ui/core';
import { history } from '../../history';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  iconButtonRoot: {
    padding: 0,
  },
  listRoot: {
    width: 250,
    height: '100%',
    position: 'relative',
  },
  dividerRoot: {
    background: 'rgba(0,0,0,0.5)',
    marginBottom: 20,
  },
  listItemRoot: {
    padding: 15,
  },
  lastItemRoot: {
    borderTop: '1px solid rgba(0,0,0,0.2)',
    position: 'absolute',
    bottom: 0,
  },
});

const Header = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const handleOpenMenu = (valor) => {
    setIsMenuOpen(valor);
  };
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    if (!user && userState.entities && userState.status === 'loaded') {
      const userResponse = Object.values(userState.entities)[0];
      setUser(userResponse);
    }
    // eslint-disable-next-line
  }, [isMenuOpen]);

  const list = () => (
    <List classes={{ root: classes.listRoot }}>
      {user ? (
        <ListItem>
          <ListWrapper>
            <UserCircle size={30} />
            <Text style={{ marginTop: '9px' }}>{user.name}</Text>
          </ListWrapper>
        </ListItem>
      ) : (
        <ListItem>
          <ListWrapper>
            <Button
              variant='contained'
              style={{ marginTop: '9px' }}
              onClick={() => history.push('/entrar')}
            >
              Entre na sua conta!
            </Button>
          </ListWrapper>
        </ListItem>
      )}
      <Divider classes={{ root: classes.dividerRoot }} />
      <ListItem
        button={true}
        dense={true}
        classes={{ root: classes.listItemRoot }}
        onClick={() => history.push('/')}
      >
        <Link>Home</Link>
      </ListItem>
      {user && user.role === 3 ? (
        <ListItem
          button={true}
          classes={{ root: classes.listItemRoot }}
          onClick={() => history.push('/admin/eventos')}
        >
          <Link>Seus Pedidos</Link>
        </ListItem>
      ) : (
        <ListItem
          button={true}
          classes={{ root: classes.listItemRoot }}
          onClick={() => history.push('/meus-ingressos')}
        >
          <Link>Seus Pedidos</Link>
        </ListItem>
      )}
      <ListItem button={true} classes={{ root: classes.listItemRoot }}>
        <Link>Suporte</Link>
      </ListItem>
      <ListItem
        button={true}
        classes={{ root: classes.listItemRoot }}
        onClick={() => history.push('/feedback')}
      >
        <Link>FeedBack</Link>
      </ListItem>
      <ListItem
        button={true}
        classes={{ root: classes.listItemRoot }}
        onClick={() => history.push('/sobre')}
      >
        <Link>Sobre</Link>
      </ListItem>
      {user && (
        <ListItem
          button={true}
          classes={{ root: classes.listItemRoot }}
          onClick={() => history.push('/entrar')}
        >
          <Link>Logout</Link>
        </ListItem>
      )}
      <ListItem classes={{ root: classes.lastItemRoot }}>
        <Text>Todos os direitos reservados</Text>
      </ListItem>
    </List>
  );

  return (
    <>
      <MenuWrapper>
        <IconButton
          onClick={() => handleOpenMenu(true)}
          classes={{ root: classes.iconButtonRoot }}
        >
          <Menu size={30} style={{ cursor: 'pointer' }} />
        </IconButton>
        <Logo src={logoImg} alt='Logo Img' onClick={() => history.push('/')} />
        <Drawer
          anchor='left'
          open={isMenuOpen}
          onClose={() => handleOpenMenu(false)}
        >
          {list()}
        </Drawer>
      </MenuWrapper>
    </>
  );
};

export default Header;
