import clue from '../clues';
import {useNavigate} from 'react-router-dom';
export default function Road(){
    const navigate= useNavigate();
   const handleRight=()=>{
    alert('you have choosen the correct roadno')
    navigate('/house')
   }
   const handleWrong=()=>{
    alert('you have selected the wrong roadno');
    navigate('/difficultylevels');
   }
    return(
        <div className='colony'>
        <h1>ROAD NO IS THE {clue.easy.road.statement.toUpperCase()}</h1>
        <button className='colony-btn'onClick={handleWrong} >3</button>
        <button className='colony-btn'onClick={handleWrong} >5</button>
        <button className='colony-btn'onClick={handleRight}>2</button>
        <button className='colony-btn'onClick={handleWrong} >7</button>
      </div>
    )
}