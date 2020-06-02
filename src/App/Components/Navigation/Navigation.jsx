import React from "react";
import "./Navigation.scss"

const Navigation = (props) => {

    return <div className="nav-bar-wrapper">
        <nav className="nav-bar">
            <h1>
                {props.title ? props.title : "Es wurde kein Titel definiert"}
            </h1>
            <input type="text" value={props.title} onChange={props.updateTitle}/>
        </nav>
    </div>
};

export default Navigation;
