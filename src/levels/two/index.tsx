import { useState } from "react";
import Draggable from 'react-draggable';
import lola from '../../assets/lola.png';
import bed from '../../assets/bed.png';

interface TwoProps {
    nextLevel: () => void;
}

const Two = ({nextLevel} : TwoProps) => {
    const [moved, setMoved] = useState(false);

    return <>
        <h2>Level two</h2>
    <h3>Put Lola in bed </h3>
    <img src={bed} height='200' draggable={false}/>
    <Draggable onStop={()=>setMoved(true)}>
        <img className="lola" 
            src={lola} 
            alt="Lola" 
            height='200' 
            onClick={()=>1} 
            draggable={false}
            />
    </Draggable>
    {moved &&
    <div onClick={() => nextLevel()}>
        <p>Bed rotting has been achieved</p>
        <h2>Click to progress to next level</h2>
    </div>
    }
    </>
}


export default Two;