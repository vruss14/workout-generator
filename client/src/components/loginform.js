import React from "react";
import "../css/loginStyle.css";

// The Log In page

function LoginForm() {

    function visitHome(event) {
        event.preventDefault();
        location.href = "/";
      }

    return (
        <form className="box has-background-light" id="form-container">

            <h1 className="has-text-weight-bold has-text-centered mt-3 mb-1" id="login-form-title">Log In</h1>

            <p className="is-size-6 mb-3 has-text-centered">Need to create an account? Click <a href="/create-account">HERE</a>.</p>

            <div className="field">
            <label className="is-size-4 mt-4 mb-4 custom-label">Email/Username</label>
            <div className="control">
                <input className="input mt-3" type="email" />
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

            <p className="is-size-6 mt-3 mb-3">Forgot your username or password? Click <a href="#">HERE</a>.</p>

        </form>
    )
}

export default LoginForm;