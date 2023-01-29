import styled from 'styled-components';
// import image from '../images/background.jpg'

export const Title = styled.h1`
  font-family: 'Handlee', cursive;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  width: 180px;
  padding-bottom: 5px;
  border-radius: 10px;
  background-color: #fff;
  /* color:  #065b94; */
`;

export const TitleLogin = styled.h1`
  font-family: 'Handlee', cursive;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  width: 80px;
  padding-bottom: 5px;
  border-radius: 10px;
  background-color: #fff;  
  /* box-shadow: ; */
  /* color: #0f7ec9; */
`;

export const Main = styled.main`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  padding-top: 54px;  
`
/* background-image: url('${image }'); */

export const HeroSection = styled.section`
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 87% 50%;
  border-radius: 20px;
  @media screen and (max-width: 920px) {
    height: 400px;
  }
  @media screen and (max-width: 479px) {
    height: 300px;
  }
`;

export const ContentTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;
  margin: 0 auto;
  /* position: relative;
  margin-bottom: 20px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: 1px;
    width: 300px;
    background-color: #000;
    @media screen and (max-width: 820px) {
      width: 200px;
    }
  } */
`;

export const ImgWrapper = styled.div`
  width: calc(100% / 2);
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;