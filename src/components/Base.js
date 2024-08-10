import CustomNavbar from "./CustomNavbar"


const Base = ({ title = "Welcome to our websites", children }) => {
    return (
        <div className="container-fuild">
            <CustomNavbar />
            {children}
            {/* <Footer/> */}
        </div>
    )
}
export default Base;