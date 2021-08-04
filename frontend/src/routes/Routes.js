import React from 'react'
import { Router, Switch, Route } from 'react-router'
import { history } from '../history'
import EventDelete from '../pages/Event/Delete'
import EventEdit from '../pages/Event/Edit'
import EventRegister from '../pages/Event/Register'
//Componentes das páginas
import Home from '../pages/home/home'
import MyTickets from '../pages/myTickets/myTickets'
import LoginU from '../pages/LoginUser/login'
import LoginC from '../pages/LoginComp/login'
import RegisteredEvents from '../pages/registeredEvents/registeredEvents'
import RegisterC from '../pages/RegisterComp'
import RegisterU from '../pages/RegisterUser'
import Page404 from '../pages/Page404'

export default function Routes() {
  return (
    <Router history={history}> {/* Dentro deste componente há uma função q o Router espera receber */}
      <Switch> {/* Onde contém todas as rotas da aplicação */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/login-user" component={LoginU}/>
          <Route exact path="/login-company" component={LoginC}/>
          <Route exact path="/register-user" component={RegisterU}/>
          <Route exact path="/register-company" component={RegisterC}/>
          <Route exact path="/meus-ingressos" component={MyTickets}/>

          <Route exact path="/admin/eventos/criar"  component={EventRegister}/>
          <Route exact path="/admin/eventos/excluir"  component={EventDelete}/>
          <Route exact path="/admin/eventos/atualizar"  component={EventEdit}/>
          <Route exact path="/admin/eventos" component={RegisteredEvents}/>
          {/*Se a rota não existir... */}
          <Route path="*" component={Page404}/>
      </Switch>
    </Router>
  );
}