import { useState } from "react";
import "./crudResort.css"
import logo from "../../assets/logoWev.png"
import { Servics } from "../../apiCLient/services";
function DeleteVacation() {
  const [phone, setPhone] = useState("");

  const handleDelete =async (e:any) => {
    e.preventDefault();

    
    const crud =Servics('/resorts')
    await crud.del('deleteresort')
    setPhone(""); 
  };

  return (
    <form onSubmit={handleDelete} className="form-container">
      <img id="imag" src={logo} alt="logo" />
      <h2>מחק נופש</h2>
      <input
        type="text"
        name="phone"
        placeholder="טלפון"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button onClick={handleDelete}>מחק</button>
    </form>
  );
}

export default DeleteVacation;
