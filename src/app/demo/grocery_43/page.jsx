"use client";

import { useState, useEffect } from "react";
import Form from "./_components/Form_43";
import Items from "./_components/Items_43";
import { toast, ToastContainer } from "react-toastify";
import Wrapper from "../_assets/wrapper/Grocery_43";
import { nanoid } from "nanoid";

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    let list = localStorage.getItem("list");
    if (list) {
      list = JSON.parse(list);
    } else {
      list = [];
    }
    return list;
  }
  return []; // Return default for server-side
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const GroceryPage_43 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedList = getLocalStorage();
    if (storedList.length > 0) {
      setItems(storedList);
    }
  }, []);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItem);
    setLocalStorage(newItems);
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
