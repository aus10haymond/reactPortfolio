import React from "react";

function Jumbotron() {
    return (
        <div className="jumbotron vertical-center">
            <h1 className="display-4">AUSTEN HAYMOND</h1>
            <p className="lead">WELCOME TO MY PORTFOLIO. INSIDE YOU CAN LEARN ABOUT WHO I AM, WHAT I CAN DO, AND HOW TO CONTACT ME.</p>
        <hr className="my-4" />
            <p>THIS PORTFOLIO PAGE MAKES USE OF REACT COMPONENTS, BOOTSTRAP FOR THE FRONT-END CSS AND AN EXPRESS SERVER HOSTED ON HEROKU. HIT THE BUTTON BELOW TO ENTER THE PORTFOLIO.</p>
            <a className="btn btn-dark btn-lg" href="/about" role="button">ENTER</a>
      </div>
    );
}

export default Jumbotron;