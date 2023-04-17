import hyderabad from'../images/hyderabad.webp';
import warngal from'../images/warangal.jpg';
import karimnagar from'../images/karimnagar.jpeg';
import nizambad from'../images/nizamabad.jpg';
import clue from '../clues';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
export default function City(){
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
     alert('congrats you have seleced the correct city')
     setTimeout(()=> navigate('/colony'),10)
    }
    const handleWrong=()=>{
     alert('oops you have seleced the wrong city');
     navigate('/difficultylevels');
    }
    return(
        <>
        <h1 className='title1'>FIND THE CITY</h1>
        <div className='question-hint'>
          <p>SELECT THE CITY{clue.easy.city.statement.toUpperCase()}</p>
          <button className='hint' onClick={handleClick} >HINT</button>
          <p  style={show}>{clue.easy.city.hint.toUpperCase()}</p>
        </div>
        <div className='images'>
            <img className='state-img' onClick={handleRight} src={hyderabad} alt="Telagana" />
            <img className='state-img' onClick={handleWrong} src={warngal} alt="Delhi" />
            <img className='state-img' onClick={handleWrong} src={nizambad} alt="Maharashtra" />
            <img className='state-img' onClick={handleWrong} src={karimnagar} alt="Tamil Nadu" />
        </div>
    </>
    )
}