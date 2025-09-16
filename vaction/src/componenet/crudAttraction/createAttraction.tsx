import React, { useState } from "react";
import "./crudAttraction.css";
import logo from "../../assets/logoWev.png"
import { Servics } from "../../apiCLient/services";
export default function CreateAttraction() {
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    people: "",
    location: "",
    phone: "",
    images: [] as File[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    }
  };

  const handleCreate = async() => {
      const crud =Servics('/resorts')
      await crud.post('/createresort',formData)
  };

  return (
    <div className="container shadowed">
         <img id="imag" src={logo} alt="logo" />
      <h2>יצירת אטרקציה</h2>

      <input type="text" name="name" placeholder="שם אטרקציה" onChange={handleChange} />
      <select name="region" onChange={handleChange}>
        <option value="">בחר אזור</option>
        <option value="צפון">צפון</option>
        <option value="מרכז">מרכז</option>
        <option value="דרום">דרום</option>
      </select>
      <input type="number" name="people" placeholder="כמות אנשים" onChange={handleChange} />
      <input type="text" name="location" placeholder="מיקום" onChange={handleChange} />
      <input type="text" name="phone" placeholder="מספר טלפון" onChange={handleChange} />
      <input type="file" name="images" onChange={handleFileChange} multiple />

      <button onClick={handleCreate}>יצירה</button>
    </div>
  );
}
