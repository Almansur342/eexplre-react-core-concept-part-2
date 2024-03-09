import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './users';
import Friends from './Friends';
function App() {
function handleClick(){
  alert('button clicked');
}
  const handleClick2 = () =>{
    alert('button clicked 2');
  }

  const addToFive = (num) =>{
   alert(num + 5)
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      
      <Counter></Counter>
      <button onClick={handleClick}>Click ME</button>
      <button onClick={handleClick2}>Click ME 2</button>
      <button onClick={() =>{alert('third clicked')}}>Click ME 3</button>
      <button onClick={() =>{addToFive(4)}}>Click me 4</button>
    </>
  )
}
export default App
