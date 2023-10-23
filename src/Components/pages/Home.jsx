import useTheme from "../../darkmode/Darkmode";
import Brand from "../brandname/Brand";
import Alldata from "./Alldata";
import Banner from "./Banner";

const Home = () => {
     function ThemBotton(){
        const {toggleTheme}=useTheme()
     }
    return (
        <div>
<button>change</button>
<div className="py-3">
    
<Banner></Banner>


    </div>       
    <Brand></Brand>     

            
            <h1 className="text-3xl bg-yellow-200">this is home path</h1>
            <div className=" py-8 text-center font-bold text-5xl">
                All products here :
            </div>
            <Alldata></Alldata>
        </div>
    );
};

export default Home;