import React from "react";

const Button = (props, link) => (
    <a href={link} className="button">{props.children}</a>
);

export default Button;