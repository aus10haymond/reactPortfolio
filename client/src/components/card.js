import React from "react";
import "../styles/card.css";
import Thumbnail from "./Thumbnail";

export function CardList ({ children }) {
    return <div className="row">{children}</div>;
}



export function Card(props) {
return (
    <div className="col-sm-6">
        <div className="card">
            <br />
            <h2 className="card-title"> {props.site} </h2>
            <div className="card-body">
                <Thumbnail src={props.logo} className="card-img-top" alt={props.site} />
                <a href={props.url} target={props.target} rel="noopener noreferrer" className="btn btn-dark">CONNECT</a>
            </div>
        </div>
        <br />
    </div>
);
}

