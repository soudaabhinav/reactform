import './Input.css';
import PLINE from './Line 20.png';

const InputCard=({datum})=>{

    return( <div className='fname'>

    <p className='fn'>{datum.finame}</p>
    <div className='lin'>
    <input className='in' type="text" placeholder={datum.value}></input>
   <img className='LINE' src={PLINE}></img>


</div>


    

  </div>)



}

export default InputCard