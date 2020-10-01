import React from "react";
import "./Todos.css";
import Alert from "@material-ui/lab/Alert";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { AlertTitle } from "@material-ui/lab";
import db from "./firebase";

function Todos({ todo }) {
  return (
    <div className="todo">
      <Alert severity="success">{todo} </Alert>
    </div>
  );
}

export default Todos;
