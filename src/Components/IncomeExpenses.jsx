import React, { useContext, useState } from "react";
import { GlobalContext } from "./Context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((i) => i.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>
    </>
  );
}
