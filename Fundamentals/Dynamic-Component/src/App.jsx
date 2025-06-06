const App = () => {
    const myName = "Nehemie"
    const multiply = (a, b) => a + b;
    const specialClass = "simple-classs";

    return (
        <section>
           <p>2 + 2 = {2 + 2} </p>
           <h1>Hello {myName}</h1>
           <p>My Friends List: {["Alex", "John", "Waheed", "Jordan"]} </p>
           <p>2 * 2 = {multiply(2, 2)} </p>
           <p className={specialClass}>
            This is special class
           </p>
        </section>
    )
}

export default App;