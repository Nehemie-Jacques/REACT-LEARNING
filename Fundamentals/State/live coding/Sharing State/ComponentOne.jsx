const ComponentOne = ({ count, onClikHandler }) => {
    const handlerClick = () => onClikHandler();

    return (
        <section>
            <p>Count: {count}</p>
            <button onClick={handlerClick}>Increment</button>
        </section>
    )
}

export default ComponentOne;