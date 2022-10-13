import { FaSearch, FaPhoneAlt } from 'react-icons/fa';
import { AiFillClockCircle } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';
import styled from 'styled-components';

import { COLORS } from '../../constants/styleConst';

export const Nav = styled.nav`
  background: ${COLORS.BLACK};
  height: 56px;
  width: 100vw;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
`;

export const IconBackground = styled.div`
    height: 56px;
    width: 100px;
    margin: 0 0 0 -90px;
    float:right;
    background-color: ${COLORS.ORANGE};
`;

export const IconContainer = styled.div`
  float: right;
  transform: skewX(-15deg);
  background-color: ${COLORS.ORANGE};
  padding: 24px 24px 16px 24px;
  border-style: none;
  border-left-style: inset;
  border-width: 0.5px;
  border-color: white;

`;

export const Search = styled(FaSearch)`
  float: right;
  color: #fff;
  margin: 24px 24px 16px 24px;
  font-size: 1rem;
  
  
`;

export const LocationIcon = styled(IoLocation)`
  float: right;
  color: #fff;
  background-color: ${COLORS.ORANGE};
  font-size: 1rem;
  transform: skewX(15deg);
`;

export const ClockIcon = styled(AiFillClockCircle)`
  float: right;
  color: ${COLORS.WHITE};
  // padding: 24px 24px 16px 24px;
  
  
  background-color: ${COLORS.ORANGE};
  font-size: 1rem;
  transform: skewX(15deg);
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  float: right;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.ORANGE};
  // transform: skewX(-15deg);
  font-size: 1rem;
  transform: skewX(15deg);
  transform: rotate(30deg);
`;

export const NavMenu = styled.div`
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  width: 100vw;
  white-space: nowrap; 
  
`;

