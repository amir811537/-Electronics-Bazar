import { useEffect, useState } from "react";
import Singlebrand from "./Singlebrand";

const Brand = () => {

    const [brands, setBrands] = useState([]); 
    useEffect(() => {
        fetch('/public/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data.brands)); 
        
    }, []);

    

    return (
        <div className="text-center mt-20 py-9">
        <h2 className="text-xl md:text-3xl lg:text-5xl" > Our Brand : {brands.length}</h2>
        <div className="grid mx-6 gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


        {
    brands.map(singelbrand  =><Singlebrand key={singelbrand.ID} singelbrand={singelbrand}></Singlebrand>)
}


        </div>
    </div>
    );
};

export default Brand;