import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  background-color: #fff;
  box-shadow: 5px 5px 13px 5px rgba(0,0,0,0.13);
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  align-items: center;
  width: 100%;
  height: 60px;
  z-index: 1000;
`

export const Logo = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-left:auto;
  margin-right: auto;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 300;
  margin-top: 7px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.h1`
  font-size: 15px;
  font-weight:300;
  padding: 10px;
`

export const Link = styled.h1`
  font-size: 18px;
  font-weight:300;
  padding-left: 10px;
  color: #000;
`

