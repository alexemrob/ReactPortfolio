import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = (props) => {
    return (
        <div>
            <div class="project-card d-flex justify-content-center">
                <a class="btn" href={props.appUrl} role="button"><img
                    src={props.img}></img><p>{props.name}</p></a>

            </div>
            <a className="linkColor label"
                href={props.codeUrl}>Repository<br /><hr /></a>
        </div>
    )
}
export default Project


