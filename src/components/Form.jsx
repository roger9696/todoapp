import styles from "./form.module.css";

import { useState } from "react";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", status: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", status: false });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputcontainer}>
          <input
            className={styles.input}
            onChange={(e) => setTodo({ name: e.target.value, status: false })}
            type="text"
            value={todo.name}
            placeholder="Enter todo item"
          />
          <button className={styles.button} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
