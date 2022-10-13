import React from 'react';
import {
    Nav,
    Search,
    LocationIcon,
    ClockIcon,
    PhoneIcon,
    IconContainer,
    IconBackground,
  } from './NavbarElements';
  // import '../../public/css/navbar.css';

const Navbar = () => {

    return(
        <Nav>
            <IconBackground className="icon-background-mobile"/>
            <IconContainer className="icon-mobile-responsive">
                <ClockIcon />
            </IconContainer>
            <IconContainer>
                <PhoneIcon/>
            </IconContainer>
            <IconContainer>
                <LocationIcon/>
            </IconContainer>
            <Search className="icon-mobile-responsive"/>
            
        </Nav>
    )
}

export default Navbar