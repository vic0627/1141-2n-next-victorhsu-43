"use client";

import { useState, useEffect } from "react";
import Form from "./_components/Form_43";
import Items from "./_components/Items_43";
import { toast, ToastContainer } from "react-toastify";
import Wrapper from "../_assets/wrapper/Grocery_43";
import { nanoid } from "nanoid";

const GroceryPage_43 = () => {
  const [items, setItems] = useState([]);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
    toast.success("Item added successfully!");
  };

  return (
    <Wrapper>
      <section className="section-center">
        <ToastContainer position="top-center" />
        <Form addItem={addItem} />
        <Items items={items} />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_43;
