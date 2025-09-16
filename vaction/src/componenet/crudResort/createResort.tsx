import  { useState } from "react";
import "./crudResort.css"
import logo from "../../assets/logoWev.png"
import { Servics } from "../../apiCLient/services";
const CreateVacation = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    phone: "",
    location: "",
    beds: "",
    images: [], 
  });

  const handleChange = (e:any) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: files }); 
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("phone", formData.phone);
    data.append("location", formData.location);
    data.append("beds", formData.beds);

   
    for (let i = 0; i < formData.images.length; i++) {
      data.append("images", formData.images[i]);
    }
    const crud =Servics('/resorts')
    await crud.post('/addresort',data)
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <img id="imag" src={logo} alt="logo" />
      <h2>צור נופש חדש</h2>
      <input type="text" name="title" placeholder="כותרת" onChange={handleChange} required />
      <br />
      <textarea name="description" placeholder="תיאור" onChange={handleChange} required />
      <br />
      <input type="text" name="phone" placeholder="טלפון" onChange={handleChange} required />
      <br />
      <input type="text" name="location" placeholder="מיקום" onChange={handleChange} required />
      <br />
      <input type="number" name="beds" placeholder="מספר מיטות" onChange={handleChange} required />
      <br />
      <input type="file" name="images" onChange={handleChange} multiple required />
      <br />
      <button type="submit">צור נופש</button>
    </form>
  );
};

export default CreateVacation;
