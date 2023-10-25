// import useTheme from "../../darkmode/Darkmode";
import Brand from "../brandname/Brand";
import Alldata from "./Alldata";
import Banner from "./Banner";
import Extrasection from "./Extrasection";
import SecondExtra from "./SecoundExtra";

const Home = () => {
    //  function ThemBotton(){
    //     const {toggleTheme}=useTheme()
    //  }
    return (
        <div>
<div className="py-3">
    
<Banner></Banner>


    </div>  
    <div className=" py-9 mt-5">
    <h2 className="text-xl md:text-3xl lg:text-5xl text-center" >Our Brand Partner: 6</h2>
    </div>
     
    <Brand></Brand>     

            
            <div className=" py-8 text-center font-bold text-5xl">
                All products here :
            </div>
            <Alldata></Alldata>
            <div>
<SecondExtra></SecondExtra>

            </div>
            <div className="py-6">
                <Extrasection></Extrasection>
            </div>
        </div>
    );
};

export default Home;