import { buildQueries } from "@testing-library/dom";
import { useState } from "react";

const Greeting = () => {

    const [updatedText, updateText] = useState(false);

    const contentChangeHandler = () => {
        updateText(true)
    }


    return (
        <div>
            <h1>Hello World</h1>
            {!updatedText && <p>Good to see you!!!</p>}
            <button role="tab" onClick={contentChangeHandler}>Update Text</button>
        </div >
    )
}

export default Greeting;