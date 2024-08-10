"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-auto bg-white p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="border-2 p-4 border-gray-300 shadow-md hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl mb-2">{item.title}</h3>
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-48 object-contain"
            />
            <p className="mt-2">₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
