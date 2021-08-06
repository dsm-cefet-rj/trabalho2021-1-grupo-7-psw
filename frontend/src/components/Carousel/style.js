
import styled from 'styled-components';

export const BannerEvent = styled.div`
  width: 100%;
  height: 500px;
  background: ${props => `url(${props.imgBanner}) no-repeat center`};
  background-size: cover;
`;
