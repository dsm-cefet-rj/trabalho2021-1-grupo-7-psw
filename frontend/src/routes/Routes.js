import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from '../history'

//Componentes das páginas
import Home from '../pages/home/home'
import EventPage from '../pages/EventPage/index.jsx'
import MyTickets from '../pages/myTickets/myTickets'
import LoginU from '../pages/LoginUser/login'
import LoginC from '../pages/LoginComp/login'
import RegisteredEvents from '../pages/registeredEvents/registeredEvents'
import RegisterC from '../pages/RegisterComp'
import RegisterU from '../pages/RegisterUser'
import Page404 from '../pages/Page404'
import EventDelete from '../pages/Event/Delete'
import EventUpdate from '../pages/Event/Update'
import EventCreate from '../pages/Event/Create'
import EventInfo from '../pages/Event/Info'
import AboutUs from '../pages/About/about'

export default function Routes() {
  return (
    <Router history={history}> {/* Dentro deste componente há uma função q o Router espera receber */}
      <Switch> {/* Onde contém todas as rotas da aplicação */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/sobre" component={AboutUs}/>
          <Route exact path="/evento/:slug" component={EventPage}/>
          <Route exact path="/entrar" component={LoginU}/>
          <Route exact path="/admin/entrar" component={LoginC}/>
          <Route exact path="/cadastrar" component={RegisterU}/>
          <Route exact path="/admin/cadastrar" component={RegisterC}/>
          <Route exact path="/meus-ingressos" component={MyTickets}/>
          <Route exact path="/admin/eventos" component={RegisteredEvents}/>
          <Route exact path="/admin/eventos/excluir"  component={EventDelete}/>
          <Route exact path="/admin/eventos/criar"  component={EventCreate}/>
          <Route exact path="/admin/eventos/atualizar"  component={EventUpdate}/>
          <Route exact path="/admin/evento/:slug"  component={EventInfo}/>
          <Route path="*" component={Page404}/>{/*Se a rota não existir... */}
      </Switch>
    </Router>
  );
}