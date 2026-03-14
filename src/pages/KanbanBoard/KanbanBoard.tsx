import { useState, useEffect } from "react";

import { DndContext, closestCenter } from "@dnd-kit/core";

import Column from "./Column";
import AddCard from "./AddCard";

export default function KanbanBoard() {

 type Task = {
 id: number
 title: string
 status: string
}

const [tasks, setTasks] = useState<Task[]>([]);

 // load saved tasks
 useEffect(() => {

  const saved = localStorage.getItem("kanbanTasks");

  if (saved) {
   setTasks(JSON.parse(saved));
  }

 }, []);

 // save tasks
 useEffect(() => {

  localStorage.setItem("kanbanTasks", JSON.stringify(tasks));

 }, [tasks]);

 const addTask = (title, status) => {

  const newTask = {
   id: Date.now(),
   title,
   status
  };

  setTasks([...tasks, newTask]);
 };

 const handleDragEnd = (event) => {

  const { active, over } = event;

  if (!over) return;

  const taskId = active.id;
  const newStatus = over.id;

  setTasks((prev) =>
   prev.map((task) =>
    task.id === taskId
     ? { ...task, status: newStatus }
     : task
   )
  );
 };

 const todo = tasks.filter((t) => t.status === "todo");
 const progress = tasks.filter((t) => t.status === "progress");
 const done = tasks.filter((t) => t.status === "done");

 return (

  <div style={{ padding: "20px" }}>

   <h2>Trello Style Kanban Board</h2>

   <AddCard addTask={addTask} />

   <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
   >

    <div style={{ display: "flex", gap: "20px" }}>

     <Column id="todo" title="Todo" tasks={todo} />

     <Column id="progress" title="In Progress" tasks={progress} />

     <Column id="done" title="Done" tasks={done} />

    </div>

   </DndContext>

  </div>
 );
}