import clue from '../clues';
import {useNavigate} from 'react-router-dom';
import './colony.css'
export default function Colony() {
  const navigate= useNavigate();
   const handleRight=()=>{
    alert('you have choosen the correct colony');
    navigate('/road');
   }
   const handleWrong=()=>{
    alert('you have selected the wrong colony');
    navigate('/difficultylevels');
   }
    return (
      <div className='colony'>
        <h1>{clue.easy.colony.statement.toUpperCase()}</h1>
        <button className='colony-btn'onClick={handleWrong} >BHARAT NAGAR</button>
        <button className='colony-btn'onClick={handleRight} >GANDHI NAGAR</button>
        <button className='colony-btn'onClick={handleWrong}>SHIVAJI NAGAR</button>
        <button className='colony-btn'onClick={handleWrong} >CHANDHA NAGAR</button>
      </div>
    );
  }