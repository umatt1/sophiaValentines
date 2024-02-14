import React, { useState } from "react";

interface ThreeProps {
    nextLevel: () => void;
}

const Three = ({ nextLevel }: ThreeProps) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [name, setName] = useState("nickname");
    const [place, setPlace] = useState("place");
    const [activity, setActivity] = useState("activity")
    const [adjective, setAdjective] = useState("adjective");
    const [adjective2, setAdjective2] = useState("adjective");
    const [name2, setName2] = useState("nickname");
    const [feeling, setFeeling] = useState("feeling");
    const [verb, setVerb] = useState("past tense verb");
    const [event, setEvent] = useState("a catastrophic historic event")
    const [celebrity, setCelebrity] = useState("celebrity")
    const [activity2, setActivity2] = useState("activity")
    const [crime, setCrime] = useState("crime")
    const [time, setTime] = useState("a unit of time")
    const [like, setLike] = useState("something you like")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <>
            <h2>Level Three</h2>
            <h2>Write a story</h2>
            {formSubmitted ? (
                <>
                <p>One day, Matt and his {name} and Valentine, Sophia were at {place} to go {activity}</p>
                <p>when they saw a man who looked extremely {adjective}</p>
                <p>Because of how {adjective2} the surroundings at {place} are, this man stood out a lot.</p>
                <p>This made Sophia, Matt's valentine and little {name2}, feel very {feeling}.</p>
                <p>To alleviate this, Matt {verb}</p>
                <p>The impacts of this were felt worldwide, resulting in {event}</p>
                <p>{celebrity}, who was also at {place} to practice {activity2} performed a citizen's arrest on Matt and Sophia as a result</p>
                <p>The judge found them both guilty of {crime} and they are now serving {time} in prison together</p>
                <p>Despite the unfortunate circumstance, Matt and Sophia are making the most of their time together in prison and bonding over a shared love of {like}</p>
                <div onClick={() => nextLevel()}>
                    <h2>Click to progress to the end</h2>
                </div>
                </>
            ) : (
                <>
                    <form onSubmit={handleSubmit}>
                        <label>A cute nickname:
                            <input
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>A place:
                            <input
                            type="text" 
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>An activity:
                            <input
                            type="text" 
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>An adjective:
                            <input
                            type="text" 
                            value={adjective}
                            onChange={(e) => setAdjective(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>Another adjective:
                            <input
                            type="text" 
                            value={adjective2}
                            onChange={(e) => setAdjective2(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>Another cute nickname:
                            <input
                            type="text" 
                            value={name2}
                            onChange={(e) => setName2(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>A feeling:
                            <input
                            type="text" 
                            value={feeling}
                            onChange={(e) => setFeeling(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>A verb in past tense (ends in -ed):
                            <input
                            type="text" 
                            value={verb}
                            onChange={(e) => setVerb(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>A catastrophic historical event:
                            <input
                            type="text" 
                            value={event}
                            onChange={(e) => setEvent(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>A celebrity:
                            <input
                            type="text" 
                            value={celebrity}
                            onChange={(e) => setCelebrity(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>Another activity:
                            <input
                            type="text" 
                            value={activity2}
                            onChange={(e) => setActivity2(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>A crime:
                            <input
                            type="text" 
                            value={crime}
                            onChange={(e) => setCrime(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>A length of time:
                            <input
                            type="text" 
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            />
                        </label>
                        <p></p>

                        <label>Something you like:
                            <input
                            type="text" 
                            value={like}
                            onChange={(e) => setLike(e.target.value)}
                            />
                        </label>
                        <p></p>
                        
                        <button type="submit">Submit</button>
                    </form>
                </>
            )}
        </>
    );
};

export default Three;
