import Greeting from "./Components/Greeting";
import UserStatus from "./Components/UserStatus";
import Weather from "./Components/Weather";

function App() {
    return (
        <>
            <Greeting />
            <UserStatus loggedIn={true} isAdmin={true}/>
            <Weather timeOfDay="morning"/>
        </>
    );
}

export default App;