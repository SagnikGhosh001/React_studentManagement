import CustomNavbar from "./CustomNavbar"
import Footer from "./Footer";


const Base = ({ title = "Welcome to our websites", children }) => {
    return (
        <div className="container-fuild">
            <CustomNavbar />
            {children}
            <Footer/>
        </div>
    )
}
export default Base;