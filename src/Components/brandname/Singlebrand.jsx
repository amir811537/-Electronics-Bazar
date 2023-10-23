import { Link } from "react-router-dom";

const Singlebrand = ({singelbrand}) => {

    const { id,brand_name,brand_image } = singelbrand;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img  src={brand_image}alt="Shoes" className="rounded-xl  " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand_name}</h2>
          <div className="card-actions">
            <Link to={`/singelbranddata/${brand_name}`}><button  className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Singlebrand;