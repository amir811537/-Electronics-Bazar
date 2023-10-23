import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Singelcard = ({ singlecard,setProducts,products }) => {
  console.log(products)
  const [cards, setCards] = useState([]);

  const handeldelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setProducts(products.filter((card) => card._id !== _id))

            Swal.fire("Deleted!", "Your product has been deleted.", "success");
            // if (data.deletedCount > 0) {
          
            // }
          });
      }
    });
  };

  const { _id, photourl, brandname, name, price, rating, type } = singlecard;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={photourl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{brandname}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <button>
            <span className="font-bold">Price : </span>
            {price}
          </button>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <button>
            <span className="font-bold">Rating: </span>
            {rating} stars
          </button>
        </span>
        <br />
        <div className="py-3 pl-14 ">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

            <Link to={`/products/${_id}`}>
            <button>view</button>

            </Link>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <Link to={`/updateproduct/${_id}`}>
              <button>Edit</button>
            </Link>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <button onClick={() => handeldelete(_id)}>Delete</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Singelcard;
