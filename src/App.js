import "/";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="un saludo" />
    </div>
  );
}

export default App;
