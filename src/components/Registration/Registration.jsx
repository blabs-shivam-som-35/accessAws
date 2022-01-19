import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Login from '../Login/Login';

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    function handleFormSubmit(e) {
        e.preventDefault();
        if (!name || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Mail", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            setLogin(!login);
        }
    }
    function handleClick() {setLogin(!login)}
    return (
        <>
            <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" autoComplete='off' placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" autoComplete='off' placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" autoComplete='off' placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="text-right"><a href="#" onClick={handleClick} >log in?</a></p>
                {flag && <Alert color='primary' variant="danger" > Fill All details. </Alert>}
            </form> : <Login />}
            </div> 
        </>
    )
}
export default Registration;