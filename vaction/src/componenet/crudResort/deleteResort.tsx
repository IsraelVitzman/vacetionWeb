import { useState } from "react";
import "./crud.css"
import logo from "../../assets/logoWev.png"
function DeleteVacation() {
  const [phone, setPhone] = useState("");

  const handleDelete = (e:any) => {
    e.preventDefault();

    
    console.log("מוחק לפי טלפון:", phone);

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
      <button type="submit">מחק</button>
    </form>
  );
}

export default DeleteVacation;
