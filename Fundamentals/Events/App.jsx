const Button = () => {
    const handleClick = () => {
        console.log(Math.round(Math.random() * 10));
    }
    return (
        <button onClick={handleClick}>Click</button>
    )
}

const Copy = () => {
    function copyHandler () {
        console.log("Stop Stealing My Content")
    }

    return (
        <p onCopy={copyHandler}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos velit labore culpa nobis assumenda eum blanditiis ab eligendi quibusdam praesentium, iure adipisci similique cum? Doloremque facilis deserunt eveniet. Ducimus!
        </p>
    )
}

const Move = () => {
    function moveHandler () {
        alert("Mouse Move Event Fired")
        console.log("Mouse Move Event Fired")
    }

    return (
        <p onMouseOver= {moveHandler} >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt atque aspernatur ipsa quisquam corporis aperiam labore temporibus, natus quia, ad veniam eveniet similique optio rerum! Veritatis asperiores at ipsam provident!</p>
        </p>
    )
}

const App = () => {
    return (
        <div>
            <Button />
            <Copy />
            <Move />
        </div>
    )
}

export default App