import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyButtton from "./MyButtton";
import ShoppingList from "./ShoppingList";
import Board from "./Component/Board";


export default function App() {
  return (
    <>
      <div>
        <h1>Tic Tac Toe React Game</h1>
        <Board/>
        <br />
        <hr />
        <h1>Welcome to my first app</h1>
        <MyButtton />
        <h2>Rendering List</h2>
        <ShoppingList />
      </div>
    </>
  );
}
