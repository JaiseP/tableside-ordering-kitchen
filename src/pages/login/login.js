import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "./styles.css"
import "../../App.css"

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({userNameError : false, passwordError : false});

    const navigate = useNavigate();

    const handleLogin = async () => {
        const error = {
            userNameError : false,
            passwordError : false
        };

        if(username === '' || username === null || username === undefined) {
            error.userNameError = true;
        }
        if(password === '' || password === null || password === undefined) {
            error.passwordError = true;
        }

        if(!error.userNameError && !error.passwordError) {
            console.log('Im here');
            await loginUser(username, password);
        }
        
        setError(error);
    }

    const loginUser = async (username, password) => {
        console.log(password)
        let data = JSON.stringify({
            username : username,
            password : password
        });
        let headers = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.post('http://localhost:3000/api/users/login', data, headers)
        .then((res) => {
            if(res.data.success === 1) {
                saveUserStatus(res.data).then(() => {
                    navigate('/orders');
                })
            } else {
                toast.error("Invalid Credentials");
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    const saveUserStatus = async (data) => {
        const userData = {
            loggedInStatus : true,
            name: data.name,
            username : data.username,
            userId : data.userId
        }
        localStorage.setItem('userStore', JSON.stringify(userData));
        return true;
    }

  return (
    <div className="login-container">
        <ToastContainer />
        <div className="center">
            <div className="logo-container">
                <img className='logo' src={"/images/kanthari_logo_dark.png"} alt="Logo" />
            </div>
            <h3>Login to Dashboard</h3>
            <p>Invalid Credentials</p>
            <div className="input-group">
                <label htmlFor="username">Enter Username</label>
                <input type="text" value={username} style={{ border : error.userNameError ? "1px solid red" : ''}} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="username">Enter Password</label>
                <input type="password" value={password}  style={{ border : error.passwordError ? "1px solid red" : ''}} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='btn btn-theme mt-1' onClick={handleLogin}>Submit</button>
        </div>
    </div>
  )
}

export default LoginScreen