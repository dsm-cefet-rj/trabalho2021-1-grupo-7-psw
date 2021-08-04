import React, {useState} from 'react';
import {MenuWrapper,Title,Text,ListWrapper,Link} from './style.js';

import {makeStyles} from '@material-ui/core';
import { Drawer, List,ListItem, IconButton, Divider} from '@material-ui/core';
import { history } from '../../history'


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
    marginBottom: 20
  },
  listItemRoot: {
    padding: 15,
  },
  lastItemRoot: {
    borderTop: '1px solid rgba(0,0,0,0.2)',
    position: 'absolute',
    bottom: 0
  }
});

const Header = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = (valor) => {
    setIsMenuOpen(valor);
  }

  const list = () => (
    <List classes={{root:classes.listRoot}}>
      <ListItem>
        <ListWrapper>
          
          <Text style={{ marginTop: '9px'}}>Usuário</Text>
        </ListWrapper>
      </ListItem>
      <Divider classes={{root: classes.dividerRoot}} />
      <ListItem button={true} dense={true} classes={{root: classes.listItemRoot}} onClick={() => history.push('/')}>
        <Link>Home</Link>
      </ListItem >
      <ListItem button={true} classes={{root: classes.listItemRoot}} onClick={() => history.push('/meus-ingressos')}>
        <Link>Seus Pedidos</Link>
      </ListItem>
      <ListItem button={true} classes={{root: classes.listItemRoot}}>
        <Link>Suporte</Link>
      </ListItem>
      <ListItem button={true} classes={{root: classes.listItemRoot}}>
        <Link>FeedBack</Link>
      </ListItem>
      <ListItem button={true} classes={{root: classes.listItemRoot}}>
        <Link>Sobre</Link>
      </ListItem>
      <ListItem classes={{root: classes.lastItemRoot}}>
        <Text>Todos os direitos reservados</Text>
      </ListItem>
    </List>
  )

  return (
    <>
      <MenuWrapper>
        <IconButton onClick={() => handleOpenMenu(true)} classes={{root: classes.iconButtonRoot}}>
         
        </IconButton>
        <Title>
          Ingressos Hub
        </Title>
         <Drawer anchor='left' open={isMenuOpen} onClose={() => handleOpenMenu(false)}>
          {list()}
        </Drawer> 
      </MenuWrapper> 
    </>
  )
}

export default Header;