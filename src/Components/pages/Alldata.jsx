import axios from "axios";
import { useEffect, useState } from "react";
import Singelcard from "./Singelcard";

const Alldata = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.log("error in data fetching", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid mx-6 gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {showAll
        ? products.map((singlecard) => (
            <Singelcard
              key={singlecard._id}
              products={products}
              setProducts={setProducts}
              singlecard={singlecard}
            ></Singelcard>
          ))
        : products.slice(0, 12).map((singlecard) => (
            <Singelcard
              key={singlecard._id}
              products={products}
              setProducts={setProducts}
              singlecard={singlecard}
            ></Singelcard>
          ))}
      {products.length > 12 && (
       <div className="my-auto mx-auto">
         <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See All"}
        </button>
       </div>
      )}
    </div>
  );
};

export default Alldata;
