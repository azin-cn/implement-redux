# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

- connect
- connect-with-store

实现redux-connect函数，从依赖于业务逻辑到抽出store对象，重点理解利用函数进行组合。

如果能够实现connect函数，那么理解与使用react-redux则变得非常简单。

入口文件 index.js 改变 StoreContext 为 从react-redux导入的`Provider`，value={store}变为store={store}
```js
import store from "./store";
import { StoreContext } from "./store/utils/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StoreContext.Provider value={store}> {/* 使用context提供store对象，以解connect函数的耦合，若使用connect-with-store可不用context */}
      <App />
      <Home />
    </StoreContext.Provider>
);


使用react-redux

import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
      <Home />
    </Provider>
);
```
