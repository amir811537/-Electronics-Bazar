import axios from "axios";
import { useEffect, useState } from "react";
import Singelcard from "./Singelcard";

const Alldata = () => {
    const [products,setProducts]=useState([])
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      console.log("data is ====))))", response.data);
      setProducts(response.data)
    } catch (error) {
      console.log("error in data fetching", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid mx-6 gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <h1>this is loded data {products.length} </h1>


      {
    products.map(singlecard  =><Singelcard key={singlecard.ID} singlecard={singlecard}></Singelcard>)
}

    </div>
  );
};

export default Alldata;
