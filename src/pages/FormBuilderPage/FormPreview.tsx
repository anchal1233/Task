export default function FormPreview({fields,goBack}){

 const handleSubmit=(e)=>{
  e.preventDefault()
  alert("Form Submitted")
 }

 return(

 <div className="container py-4">

  <button
   className="btn btn-secondary mb-3"
   onClick={goBack}
  >
   ← Back to Builder
  </button>

  <h2 className="mb-4">Form Preview</h2>

  <form onSubmit={handleSubmit}>

   {fields.map(field => (

    <div key={field.id} className="mb-3">

     <label className="form-label">
      {field.label}
     </label>

     {field.type==="text" && <input className="form-control"/>}

     {field.type==="number" && (
      <input
       type="number"
       min={field.min}
       max={field.max}
       className="form-control"
      />
     )}

     {field.type==="date" && (
      <input type="date" className="form-control"/>
     )}

     {field.type==="checkbox" && (
      <input type="checkbox"/>
     )}

     {field.type==="select" && (
      <select className="form-select">
       {field.options.map((opt,i)=>(
        <option key={i}>{opt}</option>
       ))}
      </select>
     )}

    </div>

   ))}

   <button className="btn btn-primary">
    Submit
   </button>

  </form>

 </div>

 )

}