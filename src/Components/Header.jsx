import React from "react";
import styled from 'styled-components';

import Avatar from "./Avatar";
import Button from "./Button";
import Menu from "./Menu";


const Header = (props) => (
// const Header = styled.div``

    <div className="header">
        <Button>Gmail</Button>
        <Button>Imagens</Button>
        <Menu />
        <Avatar />
    </div>
// `

);


export default Header;
