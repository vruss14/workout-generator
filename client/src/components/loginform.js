import React from "react";
import "./loginStyle.css";

// The Log In page

function LoginForm() {

    return (
        <form className="box has-background-light" id="form-container">

            <h1 className="has-text-weight-bold has-text-centered mt-3 mb-3" id="login-form-title">Log In</h1>

            <div className="field">
            <label className="is-size-4 mt-4 mb-4 custom-label">Email</label>
            <div className="control">
                <input className="input mt-3" type="email" placeholder="e.g. alex@example.com" />
            </div>
            </div>

            <div className="field">
            <label className="is-size-4 mt-4 mb-4 custom-label">Password</label>
            <div className="control">
                <input className="input mt-3" type="password" placeholder="********" />
            </div>
            </div>

            <button className="button is-black is-outlined is-large mt-5 has-text-centered" 
            id="log-in-submit"
            onClick={(event) => visitHome(event)}
            >LOG IN</button>
        </form>
    )
}

export default LoginForm;