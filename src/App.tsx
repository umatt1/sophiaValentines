import { useState } from 'react'
import './App.css'
import One from './levels/one';
import Two from './levels/two';
import Three from './levels/three';

function App() {
  const [level, setLevel] = useState(1);

  return (
    <>
      {level === 1 &&
        <One nextLevel={()=>{setLevel(level+1); return;}}/>}
      {level === 2 && 
        <Two nextLevel={() =>{setLevel(level+1); return;}}/>}
      {level === 3 &&
        <Three nextLevel={()=>{setLevel(level+1); return;}}/>}
    </>
  )
}

export default App
