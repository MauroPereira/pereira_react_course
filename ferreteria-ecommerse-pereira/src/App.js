import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Categories } from "./components/Categories/Categories";
import { ItemListContainer, ItemListContainerMui } from "./components/ItemListContainer/ItemListContainer";
import { MainTitle } from "./components/MainTitle/MainTitle";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div>
      <Navbar />
      <MainTitle />
      <ItemListContainer greeting="Grandes ofertas en"/>
      {/* <ItemListContainerMui /> */}
      <Categories />
    </div>
  );
}

export default App;
