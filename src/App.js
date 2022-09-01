
import './App.css';
import Bigcard from './component/Bigcard';
import Smallcard from './component/Smallcard';


function App() {
  return (
    <div className="App">

      <div className='title'>
        <img src="./moon_half.svg" alt="moon" />
        <span>riddle</span>
      </div>
      <Smallcard/>
      
        <div className="hero_container">
          <div className='card'>
            <Bigcard />
                   
          </div>
          
                 <div className="hero_right">
          <h1>Build the community your fans will love</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, nesciunt? Rem veritatis saepe repellendus libero aliquam debitis est eaque totam assumenda quasi soluta nobis temporibus excepturi beatae, voluptas at tenetur?</p>
          <button>Register</button>
                 </div>
        </div>

    </div>
  );
}

export default App;
