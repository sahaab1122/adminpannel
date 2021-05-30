import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../components/Logo/logos.png";
import "./login.css";


const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
        return(
           <>
            
            <form action="">
           
            <img alt="Grocery Cart" src={logo}/>
            
            <div>
                <label htmlFor="email">Email</label>
                </div>
                <div>
                <input type="text" name="email" id="email" autoComplete="off" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                </div>
                <div>
                <input type="password" name="password" id="password" autoComplete="off" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button>
            <NavLink to="/App" activeClassName="activeClass">Login </NavLink>
            </button>
            </form>
           </>
        )

}

export default Login;