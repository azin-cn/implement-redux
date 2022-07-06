import React from "react";
import connect from "./store/utils/connect.js";

import {
  incAction,
  decAction
} from './store/creators.js'

function Home(props) {

  return (
    <div>
      <hr />
      <h2>Home 当前的counter：{props.counter}</h2>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <button onClick={e => props.increment(1)}>+</button>
      <button onClick={e => props.decrement(1)}>-</button>
    </div>
  );
}

/* 将对应的方法作为Props传入组件，巧妙在于利用闭包（高阶函数）函数解耦合 */
const mapStateToProps = state => ({
  counter: 0, /* 初始值应放在前面 */
  ...state,
  // counter: state.counter, /* 真实值 */
})

/* 将对应的方法作为Props传入组件，巧妙在于利用闭包（高阶函数）函数解耦合 */
const mapDispatchToProps = dispatch => ({
  increment: num => dispatch(incAction(num)),
  decrement: num => dispatch(decAction(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

