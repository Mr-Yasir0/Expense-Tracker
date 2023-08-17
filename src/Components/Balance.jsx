import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((i) => i.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h4> Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
}
