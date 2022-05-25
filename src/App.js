import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function Button(props) {
    return (
        <button onClick={props.chips}>
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
    const incrementCounter = () => setCounter(counter + 1)
    return (
        <div>
            <Button chips={incrementCounter} increment={5}/>
            <Button chips={incrementCounter} increment={10}/>
            <Display message={counter}/>
        </div>
    );
}

export default App;
