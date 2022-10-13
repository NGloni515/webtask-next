import styled from 'styled-components';
import { COLORS, FONTS } from '../../constants/styleConst';

export const ContainerTitle = styled.h4`
    font-family: ${FONTS.MAIN};
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: left;
`;

export const ContainerParam = styled.h4`
    font-family: ${FONTS.MAIN};
    font-size: 0.7rem;
    font-weight: normal;
    margin: 0 0 8px 0;
    padding: 0;
    text-align: left;
    color: ${COLORS.GRAY};
`;

export const ContainerImportantData = styled.h4`
    font-family: ${FONTS.MAIN};
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 0 16px 0;
    padding: 0;
    text-align: left;
    color: ${COLORS.BLACK};
`;

export const ContainerShare = styled.h4`
    font-family: ${FONTS.MAIN};
    font-size: 0.7rem;
    font-weight: bold;
    margin: 24px 0;
    padding: 0;
    text-align: left;
    color: ${COLORS.SOFT_BLACK};
`;

export const CountNumber = styled.h4`
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
    color: ${COLORS.LIGHT_GREEN};
`;

export const VerticalElement = styled.h4`
    font-family: ${FONTS.MAIN};
    font-size: 0.7rem;
    font-weight: bold;
    margin: 24px 0;
    padding: 0;
    text-align: left;
    color: ${COLORS.SOFT_BLACK};
`;

export const ParamsContainer =  styled.div`
  margin: 32px 0;
  padding: 0;
`;

export const Container =  styled.div`
  margin: 0;
  padding: 0;
`;

export const MainContainer =  styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
`;

export const MainImage =  styled.img`
  margin: 0;
  padding: 0;
  width: 71vw;
  max-width: 71vw;
  min-width: 71vw;
  height: 432px;
  float: left;
  object-fit: cover;
`;

export const ImageElement =  styled.img`
  width: auto;
  max-width: 16vw;
  height: 170px;
  object-fit: cover;
`;


export const CarGeneralData =  styled.div`
  padding: 0;
  margin: 0 0 0 0;
  width: 29vw;
  max-width: 29vw;
  min-width: 29vw;
  height: 432px;
  float: right;
  background-color: ${COLORS.WHITE};
`;

export const CarContainer =  styled.div`
  padding: 0;
  margin: 48px 0 0 40px;
`;

export const PerformanceCard =  styled.div`
  padding: 40px;
  margin: 0;
  max-width: 39vw;
  min-width: 39vw;
  height: 266px;
  background-color: ${COLORS.WHITE};
`;

export const PerformanceTitle =  styled.div`
  font-family: ${FONTS.MAIN};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 8px 0;
  padding: 0;
  text-align: left;
  color: ${COLORS.GRAY};
`;

// MOBILE ONLY ELEMENTS

export const ImageSlider =  styled.div`
  width: 100vw;
  height: 256px;
  position: relative;
  margin: auto;
`;

export const MobileButton =  styled.button`
  width: 100vw;
  height: 50px;
  margin: 13px 0 5px 0;
  background-color: ${COLORS.LIGHT_GREEN};
  color: ${COLORS.WHITE};
  font-size: 1rem;
  border: none;
`;

export const MobileFooter =  styled.footer`
  width: 100vw;
  margin: 13px 0 5px 0;
  background-color: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  font-size: 0.8rem;
  text-align: center;
`;

export const MobileFooterTitle =  styled.p`
  margin: 10px 0;
`;

export const MobileFooterDescription =  styled.p`
  font-size: 0.7rem;
  margin: 15px;
`;

export const Text =  styled.p`
  margin: 0;
`;