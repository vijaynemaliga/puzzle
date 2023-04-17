import clue from '../clues';
import {useNavigate} from 'react-router-dom';
export default function House(){
    const navigate= useNavigate();
   const handleRight=()=>{
    alert('you have choosen the correct roadno')
    navigate('/destination');
   }
   const handleWrong=()=>{
    alert('you have selected the wrong roadno');
    navigate('/difficultylevels');
   }
    return(
        <div className='colony'>
        <h1>House NO IS THE {clue.easy.house.statement.toUpperCase()}</h1>
        <button className='colony-btn'onClick={handleWrong} >170</button>
        <button className='colony-btn'onClick={handleWrong} >255</button>
        <button className='colony-btn'onClick={handleRight}>225</button>
        <button className='colony-btn'onClick={handleWrong} >249</button>
      </div>
    )
}