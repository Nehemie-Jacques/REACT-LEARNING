/* const App = () => {
    return (
        <section>
            <h1 style={{color: "white", backgroundColor: "teal", padding: "2rem"}}>Inline Style</h1>
        </section>
    )
} */

    const App = () => {
        const styles = {
            color: "white",
            backgroundColor: "teal",
            padding: "2rem",
        }
        return (
            <section>
                <h1 style={styles}>Inline Style</h1>
            </section>
        )
    }

    export default App;