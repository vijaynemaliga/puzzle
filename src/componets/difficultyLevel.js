import address from '../images/address.png';
import './difficultylevels.css';
import home from '../images/home.png';
import {useNavigate} from 'react-router-dom';
export default function Levels(){
    const navigate= useNavigate();
   const handleClick=()=>{
    navigate('/state');
   }
    return(
    <div className="levels"> 
        <img className='row1' src={home}></img>
        <div className="row2">
        <div className='title'>
            <h2>CHOOSE THE LEVEL OF DIFFICULTY..</h2>
            <img src={address} className='mini-image'></img>
        </div>
            <button className='level-button1' onClick={handleClick}>EASY</button>
            <button className='level-button2' onClick={handleClick}>MEDIUM</button>
            <button className='level-button3' onClick={handleClick}>HARD</button>
        </div>
     </div>
    )
}