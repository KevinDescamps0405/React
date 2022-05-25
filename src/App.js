import './App.css';
import {useState} from "react";
import AppDeux from "./AppDeux";

function Button(props) {
    const handleClick = () => props.chips(props.increment)
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

function Display(props) {
    return (
        <div>
            {props.message}
        </div>
    );
}


function App() {
    const [counter, setCounter] = useState(5);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue)
    return (
        <div>
            <div>
            <Button chips={incrementCounter} increment={5}/>
            <Button chips={incrementCounter} increment={10}/>
            <Display message={counter}/>
            </div>
            <div>
                <AppDeux />
            </div>
        </div>
    );
}

export default App;
