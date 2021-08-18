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
  font-size: 50px;
  @media(max-width: 480px ){
    font-size: 45px;
  }
`;

export const PriceText = styled.h1`
  margin-top: 20px;
  font-size: 50px;
  font-weight: bold;
  @media(max-width: 480px ){
    margin-top: 0px;
    margin: 0;
    font-size: 45px;
  }
`;

export const Text = styled.h2`
  font-size: 25px;
  margin-top: 20px;
  @media(max-width: 480px ){
    margin: 0 !important;
    font-size: 16px;
  }
`;

export const StrongText = styled.h2`
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: ${props => `${props.font}px`};
`;

export const WrapperEventNames = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const WrapperPriceSpecs = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media(max-width: 480px ){
    flex-direction: column;
    align-items: flex-start;

  }
`;

export const Divider = styled.div`
  margin-top: 5px;
  height:1px;
  background: rgba(0,0,0,0.2);
  width:100%;
`;

export const Map = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 5px;
  object-fit: cover;
`;

export const TagContainer = styled.h2`
  background: rgba(0,0,0,1);
  color: #fff;
  font-size: 15px;
  border-radius: 3px;
  padding: 5px 15px;
  font-weight: 600;
`;

export const WrapperEventSpecs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WrapperSectionContainer = styled.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ParagraphsText = styled.p`
  max-width: 600px;

`

export const WrapperContent = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  margin-bottom: 100px;
  height:100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;


export const ContainerBuy = styled.div`
  height: 100px;
  width: 100%;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0px 20px;
  z-index: 10000;
  box-shadow: 8px 0px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom:0;

`