"use client";
import axios from "axios";
import React, { use, useState } from "react";

const page = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(Images);
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
      <div>
        <button
          onClick={getImages}
          className=" bg-amber-600 font-bold px-5 py-5 cursor-pointer text-white rounded-4xl "
        >
          Get Images{" "}
        </button>
        <div className="p-5 grid grid-cols-3 gap-24 space-x-4">
        {Images.map((elem, i) => {
          return (
            <img
              key={i}
              src={elem.download_url}
              alt=""
              width={300}
              height={300}
              className="rounded-2xl flex flex-col justify-center"
            />
          );
        })}


        </div>

        
      </div>
    </>
  );
};

export default page;
