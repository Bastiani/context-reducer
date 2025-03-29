import { useCustumer } from "./context/Custumer";
import { useState } from "react";

export const CustumerForm = () => {
  const { custumer, setCustumer } = useCustumer();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustumer(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Customer Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="mb-2 border border-[#646cff] rounded p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-2 border border-[#646cff] rounded p-2"
        />
        <button type="submit">Save Customer</button>
      </form>
      <div>
        <h2>Customer Details</h2>
        <p>Name: {custumer?.name}</p>
        <p>Email: {custumer?.email}</p>
      </div>
    </div>
  );
};
