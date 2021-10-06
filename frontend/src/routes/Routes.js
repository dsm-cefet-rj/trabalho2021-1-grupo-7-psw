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

const isAuthentticated = () => {
  if (!localStorage.getItem('user')) {
    return false;
  } else {
    return true;
  }
};

export default function Routes() {
  return (
    <Router history={history}>
      {!isAuthentticated() && (
        <Redirect
          to={{
            pathname: '/entrar',
          }}
        />
      )}
      {/* Dentro deste componente há uma função q o Router espera receber */}
      <Switch>
        {' '}
        {/* Onde contém todas as rotas da aplicação */}
        <Route exact path='/' component={Home} />
        <Route exact path='/sobre' component={AboutUs} />
        <Route exact path='/evento/:slug' component={EventPage} />
        <Route exact path='/entrar' component={Login} />
        <Route exact path='/cadastrar' component={RegisterU} />
        <Route exact path='/admin/cadastrar' component={RegisterC} />
        <Route exact path='/meus-ingressos' component={MyTickets} />
        <Route exact path='/admin/eventos' component={RegisteredEvents} />
        <Route exact path='/feedback' component={Feedback} />
        <Route exact path='/admin/evento/novo' component={EventCreate} />
        <Route
          exact
          path='/admin/evento/:slug/editar'
          component={EventUpdate}
        />
        <Route
          exact
          path='/admin/evento/:slug'
          component={EventReadAndDelete}
        />
        <Route path='*' component={Page404} />
        {/*Se a rota não existir... */}
      </Switch>
    </Router>
  );
}
