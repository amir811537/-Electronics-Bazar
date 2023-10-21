
const Singelcard = ({singlecard}) => {
    const {photourl,brandname,name,price,rating,type}=singlecard;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photourl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brandname}</h2>
    <p>{name}</p>
    <p>{price}</p>
    <p>{rating}</p>
    <p>{type}</p>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Singelcard;