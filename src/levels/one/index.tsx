import { useState } from "react";
import marlow from '../../assets/marlow.png'
import marlowlove from '../../assets/marlowlove.png'

function One(nextLevel: any) {
    const [pets, setPets] = useState(0)
    return <>
    <h2>Level one</h2>
    <h3>Pet Marlow 50 times to continue</h3>
    <p>Pets: {pets}</p>
    <img className="marlow" src={pets >= 50 ? marlowlove : marlow} alt="Marlow" height='450px' onClick={()=>setPets(pets+1)}/>
    {pets >= 50 &&
    <div onClick={() => nextLevel()}>
        <p>Petting quota achieved</p>
        <h2>Click to progress to next level</h2>
    </div>
    }
    </>
}


export default One;