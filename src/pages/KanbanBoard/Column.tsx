import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Card from "./Card";

export default function Column({ id, title, tasks }) {

 const { setNodeRef } = useDroppable({ id });

 return (

  <div
   ref={setNodeRef}
   style={{
    width: "250px",
    background: "#f4f5f7",
    padding: "15px",
    borderRadius: "8px"
   }}
  >

   <h3>{title}</h3>

   <SortableContext
    items={tasks.map((t) => t.id)}
    strategy={verticalListSortingStrategy}
   >

    {tasks.map((task) => (
     <Card key={task.id} task={task} />
    ))}

   </SortableContext>

  </div>
 );
}