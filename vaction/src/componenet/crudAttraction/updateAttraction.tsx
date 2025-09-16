import React, { useState } from "react";
import "./crudAttraction.css";
import logo from "../../assets/logoWev.png"
export default function UpdateAttraction() {
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

  const handleUpdate = () => {
    console.log("Update Attraction by Phone:", formData.phone, formData);
    // שליחה לשרת לפי מספר טלפון
  };

  return (
    <div className="container">
        <img id="imag" src={logo} alt="logo" /> 
      <h2>עדכון אטרקציה לפי טלפון</h2>

      <input type="text" name="phone" placeholder="מספר טלפון" onChange={handleChange} />
      <input type="text" name="name" placeholder="שם אטרקציה" onChange={handleChange} />
      <select name="region" onChange={handleChange}>
        <option value="">בחר אזור</option>
        <option value="צפון">צפון</option>
        <option value="מרכז">מרכז</option>
        <option value="דרום">דרום</option>
      </select>
      <input type="number" name="people" placeholder="כמות אנשים" onChange={handleChange} />
      <input type="text" name="location" placeholder="מיקום" onChange={handleChange} />
      <input type="file" name="images" onChange={handleFileChange} multiple />

      <button onClick={handleUpdate}>עדכון</button>
    </div>
  );
}

