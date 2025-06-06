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

const User = (props) => {
    return (
        <section>
            <img src={props.img} alt={props.name} width={200} />
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Is Married: {props.isMarried}</h1>
            <h1>Hobbies: {props.hobbies.join}</h1>
        </section>
    );
};

export default App;