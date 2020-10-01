import {
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  useFormControl,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import db, { provider, auth } from "./firebase";
import Todos from "./Todos";
import firebase from "firebase";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const [{ user }, dispatch] = useStateValue();

  // to get data from the firestore
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTodos(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Avatar className="avatar" src={user.photoURL} />{" "}
          <h1>Welcome {user.displayName}</h1>
          <form>
            <FormControl>
              <InputLabel htmlFor="my-input">Enter a todo...</InputLabel>
              <Input
                id="my-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-describedby="my-helper-text"
              />
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!input}
              onClick={addTodo}
            >
              Add Todo
            </Button>
          </form>
          {todos.map((todo) => (
            <>
              <Todos todo={todo.todo} key={todo.id} />
            </>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
