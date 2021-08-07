import styled from 'styled-components'

export const Main = styled.main`
    margin-bottom: 20px;
    min-height: 85vh;
`

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    background-color: #212020;
    color: white;
    font-size: 25px;
    font-weight: 400;
    padding: 10px 0;
`

export const Container = styled.section`
    padding: 1rem 10px;
    margin: 0 auto;
    max-width: 1100px;
`

export const RegisterEventContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const RegisterEventBtn = styled.button`
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    margin-bottom: 30px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #18B91E;
    @media (min-width: 1040px) {
        width: 450px;
    }
`

export const Events = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    @media (min-width: 710px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1040px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`