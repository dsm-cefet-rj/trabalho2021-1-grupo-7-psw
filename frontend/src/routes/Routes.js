import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from '../history';

//Componentes das páginas
import Home from '../pages/home/home';
import EventPage from '../pages/EventPage/index.jsx';
import MyTickets from '../pages/myTickets/myTickets';
import Login from '../pages/Login/login';
import RegisteredEvents from '../pages/registeredEvents/registeredEvents';
import RegisterC from '../pages/RegisterComp';
import RegisterU from '../pages/RegisterUser';
import Page404 from '../pages/Page404';
import EventReadAndDelete from '../pages/Event/ReadAndDelete';
import EventUpdate from '../pages/Event/Update';
import EventCreate from '../pages/Event/Create';
import AboutUs from '../pages/About/about';
import Feedback from '../pages/Feedback/index';
import {PrivateRoute, NotAuthRoute} from '../services/auth';

const isAuthentticated = () => {
  if (!localStorage.getItem('user')) {
    return false;
  } else {
    return true;
  }
};

export default function Routes() {

  let roletype ={
    all: "All",
    client: "Client",
    company: "Company",
    admin: "Admin",
    notAuthenticated: "NotAuth"
  }

  return (
    <Router history={history}>
      
      {/* Dentro deste componente há uma função q o Router espera receber */}
      <Switch>
        {' '}
        {/* Onde contém todas as rotas da aplicação */}
        <Route exact path='/' component={Home} />
        <Route exact path='/sobre' component={AboutUs} />
        <Route exact path='/evento/:slug' component={EventPage} />
        <NotAuthRoute exact path='/entrar' component={Login}/> {/* role={roletype.notAuthenticated} */}
        <NotAuthRoute exact path='/cadastrar' component={RegisterU}/>
        <NotAuthRoute exact path='/admin/cadastrar' component={RegisterC} />
        <PrivateRoute exact path='/meus-ingressos' component={MyTickets} role={roletype.client}/>
        <PrivateRoute exact path='/admin/eventos' component={RegisteredEvents} role={roletype.company}/>
        <Route exact path='/feedback' component={Feedback} />
        <PrivateRoute exact path='/admin/evento/novo' component={EventCreate} role={roletype.company}/>
        <PrivateRoute
          exact
          path='/admin/evento/:slug/editar'
          component={EventUpdate} role={roletype.company}
        />
        <PrivateRoute
          exact
          path='/admin/evento/:slug'
          component={EventReadAndDelete} role={roletype.company}
        />
        <Route path='*' component={Page404} />
        {/*Se a rota não existir... */}
      </Switch>
    </Router>
  );
}
