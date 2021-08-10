import React, { useState } from "react";
import "../css/createAccountStyle.css";

// The form for the Create Account Page

function CreateAccountForm() {

    const [userObject, setUserObject] = useState({});
    const [progressBar, setProgressBar] = useState(false);


    function visitHome(event) {
        event.preventDefault();
        location.href = "/";
    }

    function handleInputChange(event) {

        if(event.target.name === "password" && event.target.value.length >= 5) {
            setProgressBar(true);
        }
    
        const { name, value } = event.target;
        setUserObject({...userObject, [name]: value})

    }

    function updateProgressBar() {
        if(!userObject.password) {
            return;
        }
        
        if(userObject.password.length <=8) {
            return (
                <div>
                    <p className="is-size-6 mt-3 mb-3">Password Strength</p>
                    <progress className="progress is-danger" value="30" max="100">30%</progress>
                </div>
            )
        } else if (userObject.password.length <=10) {
            return (
                <div>
                    <p className="is-size-6 mt-3 mb-3">Password Strength</p>
                    <progress className="progress is-warning mb-5" value="50" max="100">50%</progress>
                </div>
            )

        } else if (userObject.password.length > 10) {
            return (
                <div>
                    <p className="is-size-6 mt-3 mb-3">Password Strength</p>
                    <progress className="progress is-success" value="100" max="100">100%</progress>
                </div>
            )
        }

    }

    return (
        <form className="box has-background-light" id="create-account-form-container">

            <h1 className="has-text-weight-bold has-text-centered mt-3 mb-3" id="create-account-form-title">Create Account</h1>

            <div className="field">
            <label className="is-size-4 mt-4 mb-4 custom-label">Email</label>
            <div className="control">
                <input title="Please enter a valid, unique email address." 
                className="input mt-3" name="email" type="email" onChange={handleInputChange} placeholder="e.g. alex@example.com" />
            </div>
            </div>

            <div className="field">
            <label className="is-size-4 mt-4 mb-4 custom-label">Username</label>
            <div className="control">
                <input title="Please create a unique username." 
                className="input mt-3" name="username" type="email" onChange={handleInputChange} placeholder="e.g. alex@example.com" />
            </div>
            </div>

            <div className="field">
            <label className="is-size-4 mt-4 mb-4 custom-label">Password</label>
            <p className="is-size-7 mt-1 custom-descr">Your password should be at least eight characters long, 
                and include at least one uppercase letter, one lowercase letter, one number, and one special character.</p>
            
            {progressBar ? updateProgressBar() : null}

            <div className="control">
                <input className="input mt-3" name="password" type="password" onChange={handleInputChange} placeholder="********" />
            </div>
            </div>

            <div className="field">
            <label className="is-size-4 mt-4 mb-4 custom-label">Confirm Password</label>
            <div className="control">
                <input className="input mt-3" name="confirm-password" type="password" onChange={handleInputChange} placeholder="********" />
            </div>
            </div>

            <button className="button is-black is-outlined is-large mt-3 mb-3 has-text-centered" 
            id="create-account-submit"
            onClick={(event) => visitHome(event)}
            >CREATE ACCOUNT</button>

        </form>
    )
}

export default CreateAccountForm;