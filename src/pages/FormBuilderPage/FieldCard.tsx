import { FaTrash, FaPlus } from "react-icons/fa";

export default function FieldCard({ field, updateField, deleteField }: any) {

 const updateOption = (index, value) => {
  const newOptions = [...field.options];
  newOptions[index] = value;
  updateField(field.id, "options", newOptions);
 };

 const addOption = () => {
  updateField(field.id, "options", [...field.options, "Option"]);
 };

 return (
  <div className="question-card">

   <div className="question-header">

    <input
     className="question-input"
     value={field.label}
     placeholder="Untitled Question"
     onChange={(e) => updateField(field.id, "label", e.target.value)}
    />

    <span className="badge bg-secondary text-capitalize">
     {field.type}
    </span>

   </div>

   {/* TEXT */}
   {field.type === "text" && (
    <input className="form-control mt-3" placeholder="Short answer text" />
   )}

   {/* NUMBER */}
   {field.type === "number" && (
    <>
     <input type="number" className="form-control mt-3" placeholder="Enter number" />

     <div className="row mt-2">
      <div className="col">
       <input
        placeholder="Min"
        className="form-control"
        onChange={(e) => updateField(field.id, "min", e.target.value)}
       />
      </div>

      <div className="col">
       <input
        placeholder="Max"
        className="form-control"
        onChange={(e) => updateField(field.id, "max", e.target.value)}
       />
      </div>
     </div>
    </>
   )}

   {/* DATE */}
   {field.type === "date" && (
    <input type="date" className="form-control mt-3" />
   )}

   {/* CHECKBOX */}
   {field.type === "checkbox" && (
    <div className="form-check mt-3">
     <input type="checkbox" className="form-check-input" />
     <label className="form-check-label">Checkbox option</label>
    </div>
   )}

   {/* SELECT */}
   {field.type === "select" && (
    <div className="mt-3">

     {field.options.map((opt, i) => (
      <div className="option-row" key={i}>
       <span className="option-dot"></span>

       <input
        className="form-control"
        value={opt}
        onChange={(e) => updateOption(i, e.target.value)}
       />
      </div>
     ))}

     <button
      className="btn btn-outline-primary btn-sm mt-2"
      onClick={addOption}
     >
      <FaPlus /> Add Option
     </button>

    </div>
   )}

   {/* FOOTER */}
   <div className="question-footer">

    <div className="form-check form-switch">
     <input
      className="form-check-input"
      type="checkbox"
      checked={field.required}
      onChange={(e) =>
       updateField(field.id, "required", e.target.checked)
      }
     />
     <label className="form-check-label">
      Required
     </label>
    </div>

    <button
     className="btn btn-outline-danger btn-sm"
     onClick={() => deleteField(field.id)}
    >
     <FaTrash />
    </button>

   </div>

  </div>
 );
}