import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Categories } from "./components/Categories/Categories";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Categories />
    </div>
  );
}

export default App;
