import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Categories } from "./components/Categories/Categories";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Main_title } from "./components/Main_title/Main_title";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div>
      <Navbar />
      <Main_title />
      <ItemListContainer />
      <Categories />
    </div>
  );
}

export default App;
