import styled from 'styled-components';

export const BannerEvent = styled.div`
  width: 100%;
  height: 500px;
  background: ${props => `url(${props.imgBanner}) no-repeat center`};
  background-size: cover;
  @media (max-width: 480px) {
    height: 300px;
  }
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 50px;
`;

export const PriceText = styled.h1`
  margin-top: 20px;
  font-size: 50px;
`;

export const Text = styled.h2`
  margin-top: 10px;
  font-size: 20px;
`;

export const WrapperEventNames = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const WrapperContent = styled.div`
  max-width: 900px;
  height:100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


export const ContainerBuy = styled.div`
  height: 100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0px 30px;
  box-shadow: 8px 0px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom:0;

`