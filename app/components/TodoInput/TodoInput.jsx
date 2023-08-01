"use client";

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { toast } from "react-hot-toast";

const TodoInput = () => {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const addTodo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos);
      if (
        todosJson.filter((value) => {
          return value.title == todo.title;
        }).length > 0
      ) {
        toast.error("Title already exists");
      } else {
        todosJson.push(todo);
        localStorage.setItem("todos", JSON.stringify(todosJson));
        toast.success("Add Data Successfully");
        setTodo({ title: "", desc: "" });
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]));
    }
  };

  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
    console.log(todo);
  };
  return (
    <Card className="w-50 p-3 my-4 box-shadow">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-white">Title</Form.Label>
          <Form.Control
            type="text"
            value={todo.title}
            name="title"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-white">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={todo.desc}
            name="desc"
            onChange={onChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          className="w-fit"
          onClick={addTodo}
          disabled={!todo.title || !todo.desc}
        >
          Add Data
        </Button>
      </Form>
    </Card>
  );
};

export default TodoInput;
