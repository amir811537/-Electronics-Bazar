import Brand from "../brandname/Brand";
import Alldata from "./Alldata";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>

<div className="py-3">
    
<Banner></Banner>


    </div>       
    <Brand></Brand>     

            
            <h1 className="text-3xl bg-yellow-200">this is home path</h1>
            <Alldata></Alldata>
        </div>
    );
};

export default Home;