"use client";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import Link from "next/link";
import "./Todo.css";

const Todos = () => {
  //   const listItems = [
  //     {
  //       id: "1",
  //       title: "Todo",
  //       text: "dkhjkahdjkhfajkdhjkahd",
  //     },
  //     {
  //       id: "2",
  //       title: "Todo list",
  //       text: "dkhjkahdjkhfajkdhjkahd",
  //     },
  //     {
  //       id: "3",
  //       title: "Todo list itms",
  //       text: "djhafkjsdhfjkahdjkhueywuiqyuiqy3746287368",
  //     },
  //   ];
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let todos = localStorage.getItem("todos");
    setTodos(JSON.parse(todos));
  }, []);

  const deleteTodoHandel = (title) => {
    let newTodos = todos.filter((item) => {
      return item.title != title;
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  // const editTodo = () => {
  //   <UpdateTodo />;
  //   console.log("Edits todos");
  // };
  return (
    <div className="d-flex gap-4 flex-wrap align-item-center justify-content-center">
      {todos.length == 0 && (
        <p class="text-white">
          Your Todos will show up here. Please add a todo
        </p>
      )}
      {todos.map((item) => (
        <Card
          style={{
            width: "18rem",
          }}
          key={item.title}
          className="box-shadow"
        >
          <Card.Body>
            <Card.Title className="fs-3 fw-bold lh-base text-white">
              {item.title}
            </Card.Title>
            <Card.Text className="py-2 text-white">{item.desc}</Card.Text>
            <div className="d-flex gap-4 flex-coloum">
              <Button variant="primary">
                <Link href={`/components/edit/${item.title}`}>
                  <AiFillEdit color="#fff" />
                </Link>
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  deleteTodoHandel(item.title);
                }}
              >
                <AiTwotoneDelete color="#fff" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Todos;
