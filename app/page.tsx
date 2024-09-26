"use client";
import { useEffect, useState } from "react";

interface Datum {
  name: string;
  price: number;
  id: string;
}
export default function Home() {
  const [jsonData, setJsonData] = useState([]);
  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/api/products");
    const jsonedData = await data.json();
    setJsonData(jsonedData);
    console.log(jsonedData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {jsonData.map((datum: Datum) => (
        <li key={datum.id}>{datum.name}</li>
      ))}
    </div>
  );
}
