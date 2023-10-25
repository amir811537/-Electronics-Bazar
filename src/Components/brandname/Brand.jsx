import { useEffect, useState } from "react";
import Singlebrand from "./Singlebrand";

const Brand = () => {

    const [brands, setBrands] = useState([]); 
    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data.brands)); 
        
    }, []);

    

    return (
        <div className="grid mx-6 gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


        {
    brands.map(singelbrand  =><Singlebrand key={singelbrand.ID} singelbrand={singelbrand}></Singlebrand>)
}


        </div>
   
    );
};

export default Brand;