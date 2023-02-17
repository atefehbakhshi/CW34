import React from "react";
import { useDispatch } from "react-redux";
import { switchToStorePage } from "../../store/page";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="flex gap-4 justify-center">
      <button onClick={() => dispatch(switchToStorePage(true))}>Store</button>
      <button>About</button>
      <button onClick={() => dispatch(switchToStorePage(false))}>
        Cart(0)
      </button>
    </header>
  );
}
