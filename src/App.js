import arrow from './arrow.png';
import './App.css';
import LINE from './Line 19.png';
import CLINE from './Line 22.png';
import SUBMIT from './submit.png';
import PLINE from './Line 20.png';
import db from './DB';
import  { CardInput } from './components/inputs/Index';

function App() {
  const {inputc}=db
  return (
    <div className="App">


      <div className='profilemenu'>
        
        <p className='wtext'>Hi </p>
      

        <div className='menu'>

        <div className='vtext'>
        <p>MY PROFILE</p>


        <img className='arrow' src={arrow}></img>
        
        </div>

        <div className='vtext2'>
        <p>ORDER HISTORY</p>


        <img className='arrow2' src={arrow}></img>
        
        </div>
        <div className='vtext3'>
        <p>LOGOUT </p>


        <img className='arrow3' src={arrow}></img>
        
        </div>

        </div>

        

     <div className='line'>

     <img className='LINE' src={LINE}></img>


     </div>


      </div>




      <div className='profile'>

       
      
        <p className='ptext'>My Profile</p>

       
   
        

     </div>

     <div className='form'>

{
inputc.map((datum)=>{
  return( <CardInput datum={datum}/> )

})
      }

     



</div>




<div className='submit'>


<img className='SUBMIT' src={SUBMIT}></img>

<p className='cancel'>Cancel</p>

<img className='CLINE' src={CLINE}></img>


</div>



     
      </div>
      
   
  );
}

export default App;
