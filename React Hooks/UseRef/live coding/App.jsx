import { useRef } from "react";

function App() {
    const inputElement = useRef(null);

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "Rahul";
    };

    return (
        <>
           <input type="text" ref={inputElement} />
           <button onClick={() => focusInput()}>Focus & write Rahul</button>
        </>
    )
}

export default App;