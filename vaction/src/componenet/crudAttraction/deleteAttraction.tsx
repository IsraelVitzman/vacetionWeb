import  { useState } from "react";
import "./crudAttraction.css";
import logo from "../../assets/logoWev.png"
import { Servics } from "../../apiCLient/services";
export default function DeleteAttraction() {
  const [phone, setPhone] = useState("");

  const handleDelete =async () => {
    const crud =Servics('/resorts')
    await crud.del('deleteattraction')
    
  };

  return (
    <div className="container">
         <img id="imag" src={logo} alt="logo" />
      <h2>מחיקת אטרקציה לפי טלפון</h2>

      <input type="text" placeholder="מספר טלפון" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button onClick={handleDelete}>מחיקה</button>
    </div>
  );
}
