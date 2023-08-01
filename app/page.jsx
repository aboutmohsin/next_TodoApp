"use client";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList/Todos";
import TodoInput from "./components/TodoInput/TodoInput";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="d-flex justify-content-center my-4 flex-column align-items-center">
      <Toaster position="top-center" reverseOrder="false"></Toaster>

      <h1 className="fw-bold lh-base text-white">Todo App Using Next js</h1>
      <TodoInput />
      <TodoList />
    </main>
  );
}
