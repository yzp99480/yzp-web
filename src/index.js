//引入react核心库
import React from 'react'
//引入ReactDOM
import { createRoot } from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import '@ant-design/v5-patch-for-react-19';
//引入App
import App from './App'

// 为提供的创建一个 React 根container并返回根。
const root = createRoot(document.getElementById("root"));
// 根可用于将 React 元素渲染到 DOM 中
root.render(
    <BrowserRouter>
        <App />    
    </BrowserRouter>

);