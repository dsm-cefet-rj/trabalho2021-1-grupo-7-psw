import React from 'react'
import { Router, Switch, Route } from 'react-router'
import { history } from '../history'

//Componentes das páginas
import Home from '../pages/home/home'
import MyTickets from '../pages/myTickets/myTickets'
import Login from '../pages/login/login'
import RegisteredEvents from '../pages/registeredEvents/registeredEvents'

export default function Routes() {
  return (
    <Router history={history}> {/* Dentro deste componente há uma função q o Router espera receber */}
      <Switch> {/* Onde contém todas as rotas da aplicação */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/meus-ingressos" component={MyTickets}/>
          <Route exact path="/admin/eventos" component={RegisteredEvents}/>
      </Switch>
    </Router>
  );
}