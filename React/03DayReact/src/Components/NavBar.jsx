import { FcHome,FcAbout,FcServices,FcCallback,FcBiotech} from "react-icons/fc";
import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <>
       <div className="navBar">
        {/* Logo */}
        <div className="brandLogo"><FcBiotech className="icon" />React-App</div>

        {/* NavItems */}
        <div className="navItems">
            
            <div className="items"><FcHome className="icon" />
            <Link to='/'>Home</Link>
            {/* <a href="/about">Home</a> */}
            </div>

            <div className="items"><FcAbout className="icon" /> 
            <Link to='/about'> About Us</Link>          
            </div>   

            <div className="items"><FcServices className="icon" /> 
            <Link to='/services'>Services</Link>
            </div>

            <div className="items"><FcServices className="icon" /> 
            <Link to='/addmovie'>Add Movie</Link>
            </div>


            <div className="items"><FcCallback className="icon" /> Contact Us</div>
            
        </div>
       </div>
        </>
    )
}
export default NavBar