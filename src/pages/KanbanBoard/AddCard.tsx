import { useState } from "react";

export default function AddCard({ addTask }) {

 const [title, setTitle] = useState("");
 const [status, setStatus] = useState("todo");

 const handleAdd = () => {

  if (!title) return;

  addTask(title, status);

  setTitle("");
 };

 return (

  <div style={{ marginBottom: "20px" }}>

   <input
    placeholder="Task title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
   />

   <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
   >
    <option value="todo">Todo</option>
    <option value="progress">In Progress</option>
    <option value="done">Done</option>
   </select>

   <button onClick={handleAdd}>Add Task</button>

  </div>
 );
}