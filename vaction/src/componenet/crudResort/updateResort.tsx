import logo from "../../assets/logoWev.png"
import { useState } from "react";
import "./crudResort.css"
import { Servics } from "../../apiCLient/services";
function UpdateVacation() {
  const [formData, setFormData] = useState({
    phone: "",
    title: "",
    description: "",
    location: "",
    beds: 0,
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async(e:any) => {
    e.preventDefault();

   
    const crud =Servics('/resorts')
    await crud.put("/updateresort",formData) 

    setFormData({
      phone: "",
      title: "",
      description: "",
      location: "",
      beds: 0,
    });
  };

  return (
    <form onSubmit={handleUpdate} className="form-container">
      <img id="imag" src={logo} alt="logo" />
      <h2>עדכן נופש</h2>
      <input
        type="text"
        name="phone"
        placeholder="טלפון"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title"
        placeholder="כותרת"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="תיאור"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="מיקום"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        type="number"
        name="beds"
        placeholder="מספר מיטות"
        value={formData.beds}
        onChange={handleChange}
      />
      <button type="submit">עדכן</button>
    </form>
  );
}

export default UpdateVacation;
