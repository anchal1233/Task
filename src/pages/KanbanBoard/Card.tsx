import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Card({ task }) {

 const {
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition
 } = useSortable({ id: task.id });

 const style = {
  transform: CSS.Transform.toString(transform),
  transition,
  padding: "10px",
  background: "white",
  borderRadius: "6px",
  border: "1px solid #ddd",
  marginBottom: "10px",
  cursor: "grab"
 };

 return (
  <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
   {task.title}
  </div>
 );
}