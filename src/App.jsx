import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CartPage from "./components/cartPage";
import Header from "./components/header";
import Store from "./components/storePage";
import dataList from "./data/dataList";
import { productList, shoppingList } from "./store/productSlice";
function App() {
  const storePage = useSelector((state) => state.switchPage.storePage);

  const dispatch = useDispatch();
  dispatch(productList(dataList));
  // dispatch(shoppingList(dataList));
  return (
    <div>
      <Header />
      {storePage ? <Store /> : <CartPage />}
    </div>
  );
}

export default App;
