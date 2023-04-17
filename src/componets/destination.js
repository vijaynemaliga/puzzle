import destination from '../images/destination.png';
import './destination.css';
export default function Destination(){
    return(
     <div className="destination">
        <h1> CONGRATS YOU REACHED THE DESTINATION</h1>
        <img className='state-img' src={destination}></img>
     </div>
    )
}