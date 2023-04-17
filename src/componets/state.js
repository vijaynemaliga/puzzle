import telagana from '../images/telagana.jpeg';
import delhi from '../images/delhi.jpeg';
import maharastra from '../images/maharashtra.jpeg';
import tamilnadu from '../images/tamilnadu.jpg';
import goa from '../images/goa.jpg';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import clue from '../clues';
import './state.css';
export default function State(){
   const[hint,setHint]=useState('none')
   const handleClick=()=>{
    if(hint=='none')
      setHint('inline');
    else
    setHint('none');
   }
   const show={display:hint}
   const navigate= useNavigate();
   const handleRight=()=>{
    alert('congrats you have seleced the correct state')
    setTimeout(()=> navigate('/city'),10)
   }
   const handleWrong=()=>{
    alert('oops you have seleced the wrong state')
    navigate('/difficultylevels');
   }
 return(
    <div className='state'>
        <h1 className='title1'>FIND THE STATE</h1>
        <div className='question-hint'>
        <h2> SELECT THE STATE {clue.easy.state.statement.toUpperCase()}</h2>
          <button className='hint' onClick={handleClick} >HINT</button>
          <p  style={show}>{clue.easy.state.hint.toUpperCase()}</p>
        </div>
        <div className='images'>
            <img className='state-img' onClick={handleRight} src={telagana} alt="Telagana" />
            <img className='state-img' onClick={handleWrong} src={delhi} alt="Delhi" />
            <img className='state-img' onClick={handleWrong} src={maharastra} alt="Maharashtra" />
            <img className='state-img' onClick={handleWrong} src={tamilnadu} alt="Tamil Nadu" />
            <img className='state-img' onClick={handleWrong} src={goa} alt='goa'/>
        </div>
    </div>
 )
}