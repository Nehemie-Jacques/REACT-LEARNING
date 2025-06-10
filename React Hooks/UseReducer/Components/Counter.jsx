import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterReducer"

function Counter() {
    const [state, dispath] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleIncrement = () => dispath({ type: "increment" });
    const handleDecrement = () => dispath({ type: "decrement" })

    const handleIncrementByAmount = () => {
        dispath({ type: "incrementByAmount", payload: Number(inputValue) });
        setInputValue(0);
    };

    return (
        <div>
            <h2>Count: {state.count} </h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <div>
                <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleIncrementByAmount}>Add</button>
                <button onClick={handleIncrementByAmount}>Subract</button>
            </div>
        </div>
    )
}

export default Counter;