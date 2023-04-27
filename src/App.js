import "/";
import "./App.css";
import "./components/Navbar/Navbar";
import Header from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div>
      <Header />
      <ItemListContainer />
    </div>
  );
}

export default App;
