
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import { toggleshow } from './redux/actions';

function App() {

 const dispatch = useDispatch()

 const show= useSelector(state=> state.show  )
  return (
    <div className="App">
     <h1>WS redux</h1>
     <button  onClick={()=> dispatch(toggleshow())}  >  {show ? 'hide': "show"}   </button>
     {show &&  <Counter></Counter> }
    
    </div>
  );
}

export default App;
