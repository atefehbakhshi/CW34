import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchToStorePage } from "../../store/page";

export default function Header() {
  const dispatch = useDispatch();
  const { productQty } = useSelector((state) => state.storePage);

  return (
    <header className="flex gap-4 justify-center">
      <button onClick={() => dispatch(switchToStorePage(true))}>Store</button>
      <button>About</button>
      <button onClick={() => dispatch(switchToStorePage(false))}>
        Cart({productQty})
      </button>
    </header>
  );
}
