import React, {Component} from "react";

export default class LoginBox extends Component{
    render(){
        return (
            <div className="uk-margin-large">

                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" data-uk-icon="icon: user"/>
                        <input className="uk-input uk-form-width-large" type="text"
                               placeholder="Phone Number..."/>
                    </div>
                </div>

                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" data-uk-icon="icon: lock"/>
                        <input className="uk-input uk-form-width-large" type="text"
                               placeholder="Password"/>
                    </div>
                </div>

                <button className="uk-button uk-button-primary">Login</button>

            </div>

        )
    }
}