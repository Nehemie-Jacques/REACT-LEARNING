import Counter from "./Components/Counter";
import TodoList from "./Components/TodoList";
import Profile from "./Components/Profile";
import ShoppingList from "./Components/ShoppingList";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The root component of the application. This component renders
 * a <div> which contains all other components.
 *
 * @returns {React.ReactElement} The root JSX element.
 */
/*******  5127e1ba-c023-44bb-ad21-83eaeb96ff56  *******/
function App() {
    return (
        <div>
            <Counter />
            <TodoList />
            <Profile />
            <ShoppingList />
        </div>
    );
}

export default App;