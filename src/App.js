import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function Button(props) {
    return (
        <button onClick={props.chips}>
            +1
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
            <Button chips={incrementCounter}/>
            <Display message={counter}/>
        </div>
    );
}

export default App;
