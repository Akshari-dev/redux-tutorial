import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const store=useSelector((store)=>store)
  const dispatch=useDispatch()

  const handleIncrement=()=>{
    dispatch({type:'INCREMENT_COUNTER'})
  }

  const handleDecrement=()=>{
    dispatch({type:'DECREMENT_COUNTER',value:10})
  }

  const handleTwice=()=>{
    dispatch({type:'TWICE_COUNTER'})
  }
  
  return (
    <>
    <div>Counter:{store.counter}</div>
    <div>
<button onClick={handleIncrement}>INCREMENT</button>
<button onClick={handleDecrement}>DECREMENT</button>
<button onClick={handleTwice}>TWICE</button>

</div>
    </>
  )

  }
export default App;
