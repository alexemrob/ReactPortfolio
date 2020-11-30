import React from "react";
// import "./style.css";


function Project(props) {
    return (
        <div>
            <a className="btn btn-primary icon"
                href={props.appUrl}
                role="button">
                <img src={props.img}
                    alt="PWcover"
                    className="img-thumbnail">{props.name}</img></a>
            <a className="linkColor"
                href={props.codeUrl}>click to view supporting code</a>
        </div>
    )
}
export default Project