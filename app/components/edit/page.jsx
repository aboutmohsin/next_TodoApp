import { useRouter } from "next/navigation";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Page = () => {
  const router = useRouter();
  const { title } = router.query;
  console.log("title: ", title);

  const [todo, setTodo] = useState({ title: "", desc: "" });

  const updateTodo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos);
      if (
        todosJson.filter((value) => {
          return value.title == title;
        }).length > 0
      ) {
        let index = todosJson.findIndex((value) => {
          return value.title == title;
        });
        todosJson[index].title = todo.title;
        todosJson[index].desc = todo.desc;
        localStorage.setItem("todos", JSON.stringify(todosJson));
        alert("Todo has been updated");
      } else {
        alert("Todo does not exist");
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]));
    }
  };

  useEffect(() => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos);
      let ftodo = todosJson.filter((e) => title == e.title);
      console.log(ftodo);
      if (ftodo.length > 0) {
        setTodo(ftodo[0]);
      }
    }
  }, [router.isReady]);
  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
    console.log(todo);
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column my-2">
      <h1>Update Todo</h1>
      <Card className="w-50 p-3 my-4">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={todo.title}
              name="title"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={todo.desc}
              name="desc"
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" className="w-25" onClick={updateTodo}>
            Update
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Page;
