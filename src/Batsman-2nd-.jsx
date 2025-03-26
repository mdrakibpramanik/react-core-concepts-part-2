import { useState } from "react";

export default function Batsman () {
    const [runs, setRuns] = useState(0);

    const [Four, setFour] = useState(0);

    const [six, setSix] = useState(0);


    const handleWide = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleSingles = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        const updateFour = Four + 1;
        setFour(updateFour)
        setRuns(updateRuns);
    }

    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSix = six + 1;
        setSix(updateSix)
        setRuns(updateRuns);
    }

    return (
        <div>
            <h3>Player: BD Batsman</h3>

            <h5>Four: {Four}</h5>
            <h5>Six: {six}</h5>

            {
                runs > 50 && <h5>Your score--Half-Century: 50</h5>
            }

            {
                runs > 100 && <h5>Your score--Century: 100</h5>
            }

            <h1>Score: {runs}</h1>

            <button onClick={handleWide}>Wide</button>

            <button onClick={handleSingles}>Singles</button>

            <button onClick={handleFour}>Four</button>

            <button onClick={handleSix}>Six</button>
        </div>
    )
}








































