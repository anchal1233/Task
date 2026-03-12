import { useState } from "react";
import FieldCard from "./FieldCard";
import FormPreview from "./FormPreview";

export default function FormBuilderPage() {

 const [fields,setFields] = useState<any[]>([]);
 const [preview,setPreview] = useState(false);

 const addField=(type:string)=>{

  const newField={
   id:Date.now(),
   type,
   label:"Untitled Question",
   required:false,
   min:"",
   max:"",
   options:["Option 1","Option 2"]
  }

  setFields([...fields,newField])
 }

 const updateField=(id:number,key:string,value:any)=>{
  setFields(prev =>
   prev.map(f => f.id===id ? {...f,[key]:value}:f)
  )
 }

 const deleteField=(id:number)=>{
  setFields(prev => prev.filter(f => f.id!==id))
 }

 if(preview){
  return <FormPreview fields={fields} goBack={()=>setPreview(false)} />
 }

 return(

 <div className="builder-container">

 <div className="builder-header">
  <h2>Create Form</h2>
  <button
   className="preview-btn"
   onClick={()=>setPreview(true)}
  >
   Preview
  </button>
 </div>

 <div className="field-toolbar">

  <button onClick={()=>addField("text")}>Text</button>
  <button onClick={()=>addField("number")}>Number</button>
  <button onClick={()=>addField("select")}>Select</button>
  <button onClick={()=>addField("checkbox")}>Checkbox</button>
  <button onClick={()=>addField("date")}>Date</button>

 </div>

 {fields.map(field => (

  <FieldCard
   key={field.id}
   field={field}
   updateField={updateField}
   deleteField={deleteField}
  />

 ))}

</div>

 )

}