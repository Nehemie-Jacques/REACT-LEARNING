const App = () => {
    return (
        <User 
           img="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
           name="Nehemie"
           age={21}
           isMarried={false}
           hobbies={["Coding", "Reading", "Sleeping"]}
        />
    );
};

const User = ({ img, name, age, isMarried, hobbies }) => {
    return (
        <section>
            <img src={img} alt={name} width={200} />
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Is Married: {isMarried}</h1>
            <h1>Hobbies: {hobbies.join}</h1>
        </section>
    )
}

export default App;