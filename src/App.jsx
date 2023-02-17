import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/header";
import Store from "./components/StorePage";
import dataList from "./data/dataList";
import { addList } from "./store/productSlice";
function App() {
  const dispatch = useDispatch();
  dispatch(addList(dataList));
  return (
    <div>
      <Header />
      <Store />
    </div>
  );
}

export default App;
