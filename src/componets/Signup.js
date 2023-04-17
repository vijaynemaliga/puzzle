import React ,{useState}from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {useUserAuth} from "../context/UserAuthContex";
import './siginin.css';
export default function SignIn(){
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("")
    const{signUp}=useUserAuth("")
    const navigate= useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try{
            await signUp(email,password);
            navigate('/')
        } catch(err){
            setError(err.message);
        }
    }
    return(
    <div className='sigin-page'>
     <div className='box'>
        <h1>SignUp</h1>
         {error&&<p>{error}</p>}
        <form onSubmit={handleSubmit} className='user-data'>
            <input placeholder="EMAIL" type="email" onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="PASSWORD" type='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit' className='submit-button'>SignIn</button>
            <p> already have an account<Link to='/'>LOGIN IN</Link></p>
        </form>
     </div>
    </div>
    )
}