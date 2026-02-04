"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="navbar bg-amber-300 h-16 text-4xl font-bold text-center align-middle items-center py-1.5 ">
        <h1>Shivam's To-Do List</h1>
      </div>

      <form>
          <input
            type="text"
            placeholder="Enter your title here"
            className="border-2 border-black rounded-lg w-96 h-12 text-center mt-5 mx-32"
            value={title}
          />
          <input
            type="text"
            placeholder="Enter your description here"
            className="border-2 border-black rounded-lg w-96 h-12 text-center mt-5"
          />
          <button className=" rounded-2xl bg-amber-200 py-2 px-4 mx-32">Add Task</button>
        </form>

        
    </>
  );
};

export default page;
