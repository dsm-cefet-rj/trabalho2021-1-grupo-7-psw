import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #fff;
  box-shadow:3px 7px 16px -3px rgba(0,0,0,0.3);
  display:flex;
  flex-direction: column;
  border-radius: 10px;
  overflow:hidden;
  width: 100%;
  max-width: 330px;
  min-height: 220px;
  margin: 20px 20px;
`

export const CardsSpecs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const Title = styled.h1`
  font-size: 18px;
  margin-left: 10px;
  font-weight: bold;
  margin-bottom: 0;
`
export const SeeInfoBtn = styled.button`
  cursor:pointer;
  width: 100%;
  height:40px;
  color: white;
  background-color: black;
  border: none;
  margin-top: 10px;
`

