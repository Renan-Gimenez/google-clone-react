import React from "react";

import Avatar from "./Avatar";
import Button from "./Button";
import Menu from "./Menu";


const Header = (props) => (
    <div className="header">
        <Button>Gmail</Button>
        <Button>Imagens</Button>
        <Menu />
        <Avatar />
    </div>
);


export default Header;
