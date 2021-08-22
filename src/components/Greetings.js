import { buildQueries } from "@testing-library/dom";
import { useState } from "react";
import Output from './output';
const Greeting = () => {

    const [updatedText, updateText] = useState(false);

    const contentChangeHandler = () => {
        updateText(true)
    }


    return (
        <div>
            <h1>Hello World</h1>
            {!updatedText && <Output>Good to see you!!!</Output>}
            <button role="tab" onClick={contentChangeHandler}>Update Text</button>
        </div >
    )
}

export default Greeting;