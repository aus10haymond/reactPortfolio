import React from "react";


function About() {
    return (
        <div>
            <div className="pad" />
            <div className="jumbotron">
                <h1 className="display-4">Hello!</h1>
                <hr className="my-4"/>
                <p className="lead">
                    I am Austen Haymond and I am a Full Stack Developer. I am passionate about many things, but when it
                    comes to programming it comes natural to me. My dad has instilled a love for it in me since I was little. I
                    completed the University of Arizona’s Coding Boot Camp with a certificate in May 2020. I hope to soon
                    pursue a Bachelor’s in Software Engineering to continue my education.
                </p>
                <p className="lead">
                    Before becoming a developer, I served a two-year religious mission in Monterrey, Mexico for my church.
                    While serving my mission, I was able to learn Spanish and a love for Mexican food. Since then, I have
                    worked as a legal assistant for varios law firms.
                </p>
                <p className="lead">
                    I enjoy playing soccer with friends and attending Phoenix Rising games. I also occasionally like binge-
                    watch Netflix with my beautiful wife. I strongly believe in the importance of family, as they are my
                    biggest supporters.
                </p>
            </div>
        </div>
    );
}

export default About;