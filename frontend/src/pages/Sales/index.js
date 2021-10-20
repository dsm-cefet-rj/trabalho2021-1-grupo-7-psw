/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Main, Title, Container, Text, Tickets,SaleContainer, SaleDivs, SaleValue} from './style.js';
import {getSales} from '../../services/event_service'

function MyTickets() {
    
    const companyId = "6163995ef5b72143d070818e";
    const [sales, setSales] = useState([]);

    useEffect(async ()=>{
        let response;

        try{
            response = await getSales(companyId);
            console.log(response.sales);
            setSales(response.sales);
        }catch(e){
            console.log(e);
        }
    },[]);
  return (
    <>
      <Header />
      <Main>
        <Title>Ingressos vendidos</Title>

        <Container>
          { sales && sales.map((sale, idx) =>{
              let sale_date = sale.buy_date.slice(0, 10).split("-")
              let event_date = sale.event.date.slice(0, 10).split("-")
              return(
                  <SaleContainer key={idx}>
                      <SaleDivs>
                        <img src={sale.event.images[0]}/>
                      </SaleDivs>
                      
                      <SaleDivs>
                        <h3>Evento</h3>
                        <p>{sale.event.name}</p>
                        <p>Dia {`${event_date[2]}/${event_date[1]}/${event_date[0]}`}</p>
                      </SaleDivs>
                    
                      <SaleDivs>
                        <h3>Cliente</h3>
                        <p>{sale.user.name}</p>
                        <p>{sale.user.email}</p>
                        <p>{sale.user.document}</p>
                      </SaleDivs>

                      <SaleDivs>
                        <h3>Informações adicionais</h3>
                        <p>Data de compra: {`${sale_date[2]}/${sale_date[1]}/${sale_date[0]}`}</p>
                        <p>Quantidade: {sale.num_tickets}</p>
                        <SaleValue>Total: R$ {sale.event.price}</SaleValue>
                      </SaleDivs>
                     
                  </SaleContainer>
              )
              
          })}
        </Container>
      </Main>

      <Footer />
    </>
  );
}

export default MyTickets;
