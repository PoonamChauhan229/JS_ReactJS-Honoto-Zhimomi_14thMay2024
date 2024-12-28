import { FcHome,FcAbout,FcServices,FcCallback} from "react-icons/fc";
const NavBar=()=>{
    return(
        <>
       <div className="navBar">
        {/* Logo */}
        <div className="brandLogo">React-App</div>

        {/* NavItems */}
        <div className="navItems">
            <div className="items"><FcHome />Home</div>
            <div className="items"><FcAbout/> About Us</div>   
            <div className="items"><FcServices/> Services</div>
            <div className="items"><FcCallback/> Contact Us</div>
        </div>
       </div>
        </>
    )
}
export default NavBar