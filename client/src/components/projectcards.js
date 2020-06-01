import React from "react";
import "../styles/card.css";

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
                    <p className="card-text"> {props.description} </p>
                    <a href={props.url} target={props.target} rel="noopener noreferrer" className="btn btn-dark">CHECK IT OUT</a>
                </div>
            </div>
        </div>
    );
}