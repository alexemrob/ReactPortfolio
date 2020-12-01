import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="page-header d-flex justify-content-center">
                        <h1>Contact Alexandria</h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <a className="submit-button nav-link d-flex justify-content-center" href="mailto:alexemrob@gmail.com" role="button">SEND</a>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;