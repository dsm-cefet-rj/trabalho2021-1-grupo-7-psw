import styled from 'styled-components'


export const FooterComponent = styled.footer`
    width: 100%;
    background-color: #404040;
`
export const Container = styled.div`
    padding: 1rem 10px;
    margin: 0 auto;
    max-width: 1100px;
    color: #FFF;
`
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media (max-width: 474px){
        justify-content: flex-start;
        margin-left: 15px;
    }
`
export const Logo = styled.img`
    width: 40px;
`
export const LinkList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    font-weight: 500;
    margin-bottom: 15px;
    li {
        margin: 10px 15px;
    }
    @media (max-width: 474px){
        flex-direction: column;
    }
`
export const Copyright = styled.div`
    text-align:center;
    margin-top: 10px;
    font-size:  14px;
`