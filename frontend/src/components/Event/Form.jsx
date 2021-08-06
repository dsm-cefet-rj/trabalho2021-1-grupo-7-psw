
import { PageTitle, FormCardWrapper, InputText, Label, ButtonSubmit, Container} from "./style";


export default function FormCard(props){
    let minDate =new Date().toISOString().slice(0, -14)
    return(
        <>
        <PageTitle>{props.pageTitle}</PageTitle>
        <Container>

        <FormCardWrapper>
            <h3>{props.companyName}</h3>

            <Label htmlFor="eventName">Título:</Label>         
            <InputText type="text" id="eventName" />

            <Label htmlFor="eventType">Tipo de evento: </Label>           
            <InputText type="text" id="eventType" />

            <Label htmlFor="eventTicketNumber">Quantidade de ingressos:</Label>
            <InputText type="number" id="eventTicketNumber" />
            
            <Label htmlFor="eventDate">Data do evento:</Label>
            <InputText  type="date" min={minDate}  id="eventDate" />
            
            <Label htmlFor="purchaseStartDate">Data de inicio de compra</Label>
            <InputText type="date" id="purchaseStartDate" />
            
            <Label htmlFor="purchaseLimiteDate">Data limite de compras</Label>
            <InputText type="date" id="purchaseLimiteDate" />
           
            <Label htmlFor="priceByTicket">Preço por ingresso - R$</Label>
            <InputText type="text" placeholder="Insira o preço" id="priceByTicket" />
            <ButtonSubmit buttonStyleType={props.buttonStyleType}>{props.buttonName}</ButtonSubmit>
        </FormCardWrapper>
        </Container>

        </>
    )
}