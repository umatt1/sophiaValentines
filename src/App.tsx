import { useState } from 'react'
import './App.css'
import One from './levels/one';

function App() {
  const [level, setLevel] = useState(1);

  return (
    <>
      {level === 1 &&
        <One nextLevel={()=>{setLevel(level+1); return;}}/>}
    </>
  )
}

export default App
