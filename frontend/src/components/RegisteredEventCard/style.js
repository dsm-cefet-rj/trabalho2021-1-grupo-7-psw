import styled from "styled-components";

export const Event = styled.div`
    box-shadow: 3px 7px 16px -3px rgba(0, 0, 0, 0.309);
    border-radius: 10px;
    max-width: 330px;
    margin-bottom: 20px;
`

export const EventImg = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0 ;
`

export const EventDescription = styled.section`
    padding: 8px 10px;
`

export const EventTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
`
export const EventDate = styled.div`
    font-size: 0.9rem;
    margin: 3px 0;
`
export const TicketsSold = styled.div`
    font-size: 0.9rem;
`

export const EventActions = styled.section`
    padding: 8px 10px;
    display: flex;
    justify-content: center;
`

export const SeeEventBtn = styled.button`
    width: 35px;
    height: 35px;
    border: none;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    background-image: ${props => `url(${props.imgBtn})`};
`