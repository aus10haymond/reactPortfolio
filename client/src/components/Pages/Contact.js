import React, { Component } from "react";
import { Card, CardList } from "../card";
import profiles from "../../profiles.json";
import "../../styles/home.css";

class Contact extends Component {

    state = {
        profiles
    };

    render() {
    return (
        <div >
            <div className="pad" />
            <CardList>
                {this.state.profiles.map(profile => (
                <Card 
                    site={profile.site}
                    url={profile.url}
                    logo={profile.logo}
                    target={profile.target}
                    key={profile.id}
                />
                ))} 
            </CardList> 
        </div>
    );
    }
}

export default Contact;