import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Demo() {
  let st = useSelector((state) => state.countReducer);
  let dispatch = useDispatch();

  function Tang() {
    dispatch({
      type: "INCRESE",
    }); //cach goi 1 action
  }

  function Giam() {
    dispatch({
      type: "DECRESE",
    });
  }

  return (
    <div style={{ margin: "200px auto", fontSize: 100 }}>
      <h1 style={{ paddingBottom: "100px", fontSize: 100 }}>DEMO REDUX</h1>

      <span>{st.count}</span>
      <button onClick={Tang}>increase</button>
      <button onClick={Giam}>decrease</button>
    </div>
  );
}

export default Demo;
