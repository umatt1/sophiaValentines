import { useState, useEffect } from "react";
import imgUrl from '../../assets/marlow.png'

function One(nextLevel: any) {
    const [pets, setPets] = useState(0)
    useEffect(() => {
        if (pets>=53) {
            nextLevel();
        }
    }, [pets])
    return <>
    <h2>Level one</h2>
    <h3>Pet Marlow 50 times to continue</h3>
    <p>Pets: {pets}</p>
    <img className="marlow" src={imgUrl} alt="Marlow" height='450px' onClick={()=>setPets(pets+1)}/>
    {pets >= 50 &&
        <p>Petting quota achieved</p>}
    </>
}


export default One;