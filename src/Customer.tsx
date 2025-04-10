import { Customer, useCustomer } from "./context/Customer";
import { useState } from "react";

export const CustomerForm = () => {
  const { customer, setCustomer } = useCustomer();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent, formCustomerData: Customer) => {
    e.preventDefault();
    console.log("Form submitted", formCustomerData, crypto.randomUUID());
    setCustomer(formCustomerData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen m-5">
      <h1 className="text-2xl font-bold mb-4">Customer Form</h1>
      <form
        onSubmit={(event) => handleSubmit(event, formData)}
        className="flex flex-col"
      >
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
        <p>ID: {customer?.id}</p>
        <p>Name: {customer?.name}</p>
        <p>Email: {customer?.email}</p>
      </div>
    </div>
  );
};
