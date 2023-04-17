 import './login.css';
 import { Link ,useNavigate} from 'react-router-dom';
 import {useUserAuth} from "../context/UserAuthContex";
 import React ,{useState}from 'react';
 export default function Login(){
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("")
    const{logIn}=useUserAuth("")
    const navigate= useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try{
             await logIn(email,password);
            navigate('/difficultyLevels')
        } catch(err){
            setError(err.message);
        }
    }
    return(
    <div className="login-page">
       <div className='box'>
        <h1>LOGIN</h1>
        <form className='user-data' onSubmit={handleSubmit}>
            <input placeholder="EMAIL" type='email' onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="PASSWORD" type='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <div>
            <button type='submit' className='submit-button'>LOGIN</button>
            </div>
            <p> create your account?<Link to='/siginin'>SIGN UP</Link></p>
        </form>
        </div>
    </div>

    )
 }